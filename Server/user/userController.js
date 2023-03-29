import User from './user.js';
import jwt from 'jsonwebtoken';
import { comparePassword, hashPassword } from '../utils/bcrypt.js';


export default async function signup(req,res){
    const {username,password,email,role} = req.body;

    if(!username || !password || !email || !role){
        res.status(401).json({
            success: false,
            message:"All fields are required"
        });
    };

    // checking if user already exists
    const existingUser = await User.findOne({email:email});
    if(existingUser){
        res.status(400).json({
            success:false,
            message: "Email already exists"
        });
    }
    
    else{
        //creating a new user
    const newUser = new User({
        username: username,
        email: email,
        password: hashPassword(password),
        role: role
    });

    try{
        //saves user
        const user = await newUser.save();
        const {_id, email, username, role} = user;

        //access and refresh token is assigned to the user
        const accessToken = jwt.sign({username: user.username, id: user._id, role: user.role},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'900s'});
        const refreshToken = jwt.sign({username: user.username, id: user._id, role: user.role},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1d'});
        
        //refresh token is sent through cookie
        res.cookie('jwt', refreshToken,{
            secure:true,
            sameSite:'None',
            maxAge: 24 * 60 * 60 * 1000
        });

        //access token is sent along the user details as a response
        res.status(200).json({
            success: true,
            message: "User registered successfully.",
            user: {_id, username, role, email},
            accessToken

        });
    }
    catch(e){
        res.status(500).json({
            success:false,
            message: e.message
        });
    }
    }
}

export async function login(req,res){
    const {email, password} = req.body;

    //checks if both email and password are provided
    if(!email || !password){
        res.json({
            success: false,
            message:"All fields are required."
        });
    }

    //checks if user exits
    const user = await User.findOne({email:email});

    if(!user){
        return res.json({
            success:false,
            message:"Incorrect username or password!"
        });
    }

    //if user exists with the given email then checks if the password is correct
    const passwordMatch = comparePassword(password, user.password);
    if(!passwordMatch){
        return res.json({
            success:false,
            message:"Incorrect username or password!"
        });
    }

    //if given info is correct then it sends the response with user data, access token and refresh token
    if(user && passwordMatch){
        const {_id, email, username, role} = user;
        const accessToken = jwt.sign({username: username, id: _id, role: role},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'900s'});
        const refreshToken = jwt.sign({username: username, id: _id, role: role},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1d'});
        
        res.cookie('jwt', refreshToken, {
            secure:true,
            sameSite: 'None',
        });

        res.status(200).json({
            success: true,
            message: "User logged in successfully.",
            user: {_id, username, role, email},
            accessToken
        });
    }
}

export function refreshTokenHandler(req,res){

    //refresh token is sent through cookies
    const cookies = req.cookies;

    //checks if refresh token exists
    if(cookies?.jwt){
        const refreshToken = cookies.jwt;
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async(err, decoded)=>{
                if(err){
                    res.status(403).json({message:"Forbidden"});
                }
                
                else{
                    const user = await User.findOne({username: decoded.username});

                    if(user){
                        const {username, _id, role, email,conversation} = user;
                        const accessToken = jwt.sign(
                            {'UserInfo' : {
                                'username': user.username,
                                'role': user.role,
                                'id': user._id
                            }},
                            process.env.ACCESS_TOKEN_SECRET,
                            {expiresIn:'900s'}
                        );
                        
                        //sends new access token 
                        res.json({user:{username,email,_id,role,conversation},accessToken});
                    }
                    
                    else{
                        res.status(401).json({message:'Unauthorized user'});
                    }
                }
            }
        )
    }

    else{
        res.status(401).json({message: "Unauthorized Token"});
    }
}

export async function logout(req,res){

    try {
        
        const cookies = req.cookies;
        if(!cookies?.jwt) return res.sendStatus(204);
        res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
        res.json({message: "Cookie cleared"});

    } catch (error) {
        console.log(error);
    }
}
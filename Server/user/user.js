import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import findOrCreate from 'mongoose-findorcreate';

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        min:4,
        max:80
    },
    role:{
        type:String,
    },
    email:{
        type: String,
        max:40,
        unique: true,
    },
    password:{
        type: String,
        required: false,
        min:8,
        max:40,
    },
},
{timestamps:true});

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

const User = mongoose.model("User", UserSchema);

export default User;
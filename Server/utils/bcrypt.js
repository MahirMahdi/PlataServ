import bcrypt from 'bcrypt';

export const hashPassword = function(password) {
    return bcrypt.hashSync(password, 10);
}
export const comparePassword = function(password,dbPassword){
    return bcrypt.compareSync(password,dbPassword);
}
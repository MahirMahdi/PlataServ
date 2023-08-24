import bcrypt from "bcrypt";

export const hashPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};
export const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 4,
      max: 80,
    },
    img: {
      type: String,
    },
    email: {
      type: String,
      max: 40,
      unique: true,
    },
    password: {
      type: String,
      required: false,
      min: 8,
      max: 40,
    },
  },
  { timestamps: true }
);

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

const User = mongoose.model("User", UserSchema);

export default User;

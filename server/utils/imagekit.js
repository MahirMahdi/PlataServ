import ImageKit from "imagekit";
import dotenv from "dotenv";

const env = dotenv.config();

const imagekit = new ImageKit({
  publicKey: process.env.CDN_PUBLIC_KEY,
  privateKey: process.env.CDN_PRIVATE_KEY,
  urlEndpoint: process.env.CDN_URL,
});

export default imagekit;

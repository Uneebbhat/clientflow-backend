import { config } from "dotenv";

config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGODB_CONNECTION_STRING;
const JWT_TOKEN = process.env.JWT_TOKEN;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const CLOUD_HOST = process.env.CLOUDINARY_HOST_NAME;
const CLOUD_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUD_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const DEFAULT_PIC = process.env.CLOUDINARY_DEFAULT_PICTURE;
const NODE_SERVICE = process.env.NODEMAILER_SERVICE;
const NODE_HOST = process.env.NODEMAILER_HOST;
const NODE_PORT = process.env.NODEMAILER_PORT;
const NODE_USER = process.env.NODEMAILER_USER;
const NODE_PASS = process.env.NODEMAILER_PASS;

export {
  PORT,
  MONGO_URI,
  JWT_TOKEN,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  CLOUD_HOST,
  CLOUD_API_KEY,
  CLOUD_API_SECRET,
  DEFAULT_PIC,
  NODE_SERVICE,
  NODE_HOST,
  NODE_PORT,
  NODE_USER,
  NODE_PASS,
};

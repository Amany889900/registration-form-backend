import {v2 as cloudinary} from "cloudinary"

import dotenv from "dotenv";
// import path from "path";

// dotenv.config({ path: path.resolve("src/config/.env") });
dotenv.config({});

cloudinary.config({
    api_key:process.env.api_key,
    api_secret:process.env.api_secret,
    cloud_name:process.env.cloud_name

})

export default cloudinary


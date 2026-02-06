import mongoose from "mongoose";
import { lowercase } from "zod";

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 50,
        lowercase: true, 
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    phone: {
        type: String, 
        required: true,
        trim: true,
        maxLength: 16,
    },
    ID: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        // maxLength: 14,
        minLength: 14,
        maxLength: 14,
    },
    university: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 30,
    },
    faculty: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 30,
    },
    facultyID: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    technicalBackground: {
        type: String,
        trim: true,
        maxLength: 200,
        required: false 
    },
    workshop: {
        type: String,
        enum: [
            "computer arithmetic", 
            "system verilog verification", 
            "digital design", 
            "uvm", 
            "oop", 
            "automation & control", 
            "analog ic fundamentals", 
            "analog/mixed-signals", 
            "knx"
        ],
        required: true,
        lowercase: true
    },
    cv:{
    secure_url:{type:String},
    public_id:{type:String}
},
}, { timestamps: true });

const registrationModel = mongoose.models.Registration || mongoose.model("Registration", registrationSchema);

export default registrationModel;
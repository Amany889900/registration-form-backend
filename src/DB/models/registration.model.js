import mongoose from "mongoose";

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
        maxLength: 11,
    },
    ID: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
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
            "Computer arithmetic", 
            "System verilog verification", 
            "Digital design", 
            "UVM", 
            "OOP", 
            "Automation & control", 
            "Analog IC fundamentals", 
            "Analog/Mixed-signals", 
            "KNX"
        ],
        required: true,
    }
}, { timestamps: true });

const registrationModel = mongoose.models.Registration || mongoose.model("Registration", registrationSchema);

export default registrationModel;
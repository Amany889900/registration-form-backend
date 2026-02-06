import joi from "joi";
import { Types } from "mongoose";

  

export const customId = (value, helper) => {
    return Types.ObjectId.isValid(value) ? value : helper.message("Invalid Object ID");
};

const workshopList = [
    "computer arithmetic", "system verilog verification", "digital design", 
    "uvm", "oop", "automation & control", "analog ic fundamentals", 
    "analog/mixed-signals", "knx"
];

export const registrationSchema = {
    body: joi.object({
        name: joi.string().min(3).max(50).required(),
        email: joi.string().email().required(),
        phone: joi.string().max(16).required(), 
        ID: joi.string().length(14).required(), 
        university: joi.string().min(3).max(30).required(),
        faculty: joi.string().min(3).max(30).required(),
        facultyID: joi.string().required(),
        technicalBackground: joi.string().max(200).optional(), 
        workshop: joi.string().lowercase().valid(...workshopList).required(),
    }).required(),
    file:joi.object({
  size:joi.number().positive().required(),
  mimetype:joi.string().required(),
  encoding:joi.string().required(),
  originalname:joi.string().required(),
  fieldname:joi.string().required(),
  buffer:joi.binary().required()
}).messages({
  "any.required":"file is required"
})
};

export const updateRegistrationSchema = {
    body: joi.object({
        name: joi.string().min(3).max(50),
        email: joi.string().email(),
        phone: joi.string().max(16), 
        ID: joi.string().length(14),
        university: joi.string().min(3).max(30),
        faculty: joi.string().min(3).max(30),
        facultyID: joi.string(),
        technicalBackground: joi.string().max(200),
        workshop: joi.string().valid(...workshopList)
    }).required(),
    params: joi.object({
        id: joi.string().custom(customId).required()
    }).required(),
    file:joi.object({
  size:joi.number().positive(),
  mimetype:joi.string(),
  encoding:joi.string(),
  originalname:joi.string(),
  fieldname:joi.string(),
  buffer:joi.binary()
}).messages({
  "any.required":"file is required"
})
};

   export const getRegistrationSchema = {

  params:joi.object({
    id:joi.string().custom(customId).required()
  })
}

   

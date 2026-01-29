import registrationModel from "../../DB/models/registration.model.js";

export const register = async (req, res, next) => {
    try {
        const { name, email, phone, ID, university, faculty, facultyID, technicalBackground, workshop } = req.body;

        const existingRegistration = await registrationModel.findOne({ ID });

        if (existingRegistration) {
            return res.status(409).json({ message: "Student with this ID already exists!" });
        }

        const newRegistration = await registrationModel.create({ 
            name, email, phone, ID, university, faculty, facultyID, technicalBackground, workshop 
        });

        return res.status(201).json({ message: "Registered successfully!", newRegistration });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export const getRegistration = async (req, res, next) => {
    try {
        const { id } = req.params;
        const registration = await registrationModel.findById(id);
        
        if (!registration) {
            return res.status(404).json({ message: "Registration not found" });
        }

        return res.status(200).json({ message: "Entry found successfully!", registration });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export const updateRegistration = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, phone, university, faculty, facultyID, technicalBackground, workshop } = req.body;

        const updatedRegistration = await registrationModel.findByIdAndUpdate(
            id,
            { name, email, phone, university, faculty, facultyID, technicalBackground, workshop },
            { new: true, runValidators: true }
        );

        if (!updatedRegistration) {
            return res.status(404).json({ message: "Registration not found" });
        }

        return res.status(200).json({ message: "Updated successfully", updatedRegistration });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
}

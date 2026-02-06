import registrationModel from "../../DB/models/registration.model.js";
import cloudinary from "../../utils/cloudinaryConfig.js";
import { Readable } from "stream"; 


export const register = async (req, res, next) => {
    try {
        const { name, email, phone, ID, university, faculty, facultyID, technicalBackground, workshop } = req.body;

        const existingRegistration = await registrationModel.findOne({ ID });

        if (existingRegistration) {
            return res.status(409).json({ message: "Student with this ID already exists!" });
        }

        if (!req.file) {
            return res.status(400).json({ message: "cv file is required!" });
        }

         const uploadFromBuffer = (fileBuffer) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: `ieee-workshops-registration-1/cvs/${workshop.replace(/\s+/g, '_')}`,
                        resource_type: "auto", 
                    },
                    (error, result) => {
                        if (result) resolve(result);
                        else reject(error);
                    }
                );
                Readable.from(fileBuffer).pipe(stream);
            });
        };

        const { secure_url, public_id } = await uploadFromBuffer(req.file.buffer);

        const newRegistration = await registrationModel.create({ 
            name, email, phone, ID, university, faculty, facultyID, technicalBackground, workshop, cv: {secure_url, public_id}
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

// export const updateRegistration = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const { name, email, phone, university, faculty, facultyID, technicalBackground, workshop } = req.body;

//         const updatedRegistration = await registrationModel.findByIdAndUpdate(
//             id,
//             { name, email, phone, university, faculty, facultyID, technicalBackground, workshop },
//             { new: true, runValidators: true }
//         );

//         if (!updatedRegistration) {
//             return res.status(404).json({ message: "Registration not found" });
//         }

//         return res.status(200).json({ message: "Updated successfully", updatedRegistration });
//     } catch (error) {
//         return res.status(500).json({ message: "Server Error", error: error.message });
//     }
// }


export const updateRegistration = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = { ...req.body };

        const existingRegistration = await registrationModel.findById(id);
        if (!existingRegistration) {
            return res.status(404).json({ message: "Registration not found" });
        }

    
        if (req.file) {
          
            const uploadFromBuffer = (fileBuffer) => {
                return new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        {
                            folder: `ieee-workshops-registration-1/cvs/${(req.body.workshop || existingRegistration.workshop).replace(/\s+/g, '_')}`,
                            resource_type: "auto",
                        },
                        (error, result) => {
                            if (result) resolve(result);
                            else reject(error);
                        }
                    );
                    Readable.from(fileBuffer).pipe(stream);
                });
            };

            const { secure_url, public_id } = await uploadFromBuffer(req.file.buffer);

            if (existingRegistration.cv && existingRegistration.cv.public_id) {
                await cloudinary.uploader.destroy(existingRegistration.cv.public_id);
            }

       
            updateData.cv = {secure_url, public_id };
        }

        const updatedRegistration = await registrationModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        return res.status(200).json({ message: "Updated successfully", updatedRegistration });
    } catch (error) {
        console.error("Update Error:", error);
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
};
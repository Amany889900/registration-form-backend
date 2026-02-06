import multer from "multer"


export const fileValidation = {
   
    file:["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-word"]
}
export const multerCloud = ({
  fileTypes
})=>{

        const storage = multer.memoryStorage();
        const fileFilter = (req,file,cb) =>{
        if(fileTypes.includes(file.mimetype)){
            cb(null,true);
        }
        else{
            cb(new Error("Invalid file type"),false)
        }
    };

    const upload = multer({storage,limits:{fileSize:1024*1024*10},fileFilter});
    return upload
}
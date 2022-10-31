const path = require('path')
const multer = require("multer");


const storage = multer.diskStorage({
    destination :"./images",
    filename:(req,file,cb)=>{
      return cb(null,  `${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`)
    }
  });
  
  module.exports = ImageStore = multer({
    storage: storage
  });
  
  
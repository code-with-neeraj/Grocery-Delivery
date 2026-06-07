
import express from 'express'
import auth from '../middleware/auth.js'
import multer from 'multer'
import cloudinary from '../config/cloudinary.js';


const uploadRouter = express.Router()

const storage = multer.memoryStorage();
const upload = multer({storage})

uploadRouter.post('/', auth, upload.single('image'), async (req, res) => {
  try {

    const b64 = Buffer.from(req.file!.buffer).toString("base64")
    const dataURI = `data:${req.file!.mimetype};base64,${b64}`


    const result = await cloudinary.uploader.upload(dataURI,{
      folder:"grocery-del",
      resource_type:"auto"
    })


    res.json({
      url: result.secure_url
    })

  } catch(error:any){

    console.log("UPLOAD ERROR =>")
    console.log(error)

    res.status(500).json({
      message:error.message
    })
  }
})

export default uploadRouter;
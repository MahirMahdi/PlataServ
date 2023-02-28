import express from 'express';
import multer from "multer";
import createProduct, { getProducts } from '../controllers/products.js';

//multer configuration
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null, file.originalname)
    }
});

const upload = multer({storage:storage});

const router = express.Router();


router.post('/product',upload.single('image'),createProduct)
router.get('/product',getProducts)

export {router as productRouter}


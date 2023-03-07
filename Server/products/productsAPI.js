import express from 'express';
import multer from "multer";
import createProduct, { getOrderProductsDetails, getSpecificCategoryProducts } from './productsController.js';

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
router.get('/product/:type',getSpecificCategoryProducts)
router.post('/orderProducts',getOrderProductsDetails)

export {router as productRouter}


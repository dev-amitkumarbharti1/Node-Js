const express=require("express");

const productController=require("../controllers/product");

const router=express.Router();

router.get('/get-product',productController.getIndex);
router.get('/add-product',productController.addProduct);

module.exports=router;
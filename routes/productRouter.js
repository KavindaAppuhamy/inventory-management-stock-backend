import express from 'express';
import { deleteProduct, getProducts, saveProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", saveProduct);
productRouter.delete("/:productId", deleteProduct); // Assuming you have a deleteProduct function in your controller

export default productRouter; 
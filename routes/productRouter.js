import express from 'express';
import { deleteProduct, getProductById, getProducts, saveProduct, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", saveProduct);
productRouter.delete("/:productId", deleteProduct); // Assuming you have a deleteProduct function in your controller
productRouter.put("/:productId", updateProduct); // Assuming you have a saveProduct function in your controller
productRouter.get("/:productId", getProductById)

export default productRouter;  
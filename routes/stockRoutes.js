import express from 'express';
import {
  createStock,
  getAllStocks,
  getLowStockItems,
  getStockById,
  updateStock,
  deleteStock
} from '../controllers/stockController.js';

const stockRouter = express.Router();

stockRouter.get('/', getAllStocks);
stockRouter.post('/', createStock);
stockRouter.get('/low-stock', getLowStockItems);
stockRouter.get('/:id', getStockById);
stockRouter.put('/:id', updateStock);
stockRouter.delete('/:id', deleteStock);

export default stockRouter;
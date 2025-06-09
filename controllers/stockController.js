import Stock from '../models/stock.js';

// Get all stock items
export async function getAllStocks(req, res) {
    try {
        const stocks = await Stock.find().sort({ lastUpdated: -1 });
        res.status(200).json(stocks);
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get stock items',
            error: err
        });
    }
}

// Create a new stock item
export async function createStock(req, res) {
    const stockItem = new Stock(req.body);

    try {
        await stockItem.save();
        res.status(201).json(stockItem);
    } catch (err) {
        res.status(400).json({
            message: 'Failed to create stock item',
            error: err
        });
    }
}

// Get a single stock item by ID
export async function getStockById(req, res) {
    const id = req.params.id;

    try {
        const stockItem = await Stock.findById(id);

        if (!stockItem) {
            return res.status(404).json({ message: 'Stock item not found' });
        }

        res.status(200).json(stockItem);
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        });
    }
}

// Update a stock item by ID
export async function updateStock(req, res) {
    const id = req.params.id;
    const updates = req.body;

    try {
        const stockItem = await Stock.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true
        });

        if (!stockItem) {
            return res.status(404).json({ message: 'Stock item not found' });
        }

        res.status(200).json(stockItem);
    } catch (err) {
        res.status(400).json({
            message: 'Failed to update stock item',
            error: err
        });
    }
}

// Delete a stock item by ID
export async function deleteStock(req, res) {
    const id = req.params.id;

    try {
        const stockItem = await Stock.findByIdAndDelete(id);

        if (!stockItem) {
            return res.status(404).json({ message: 'Stock item not found' });
        }

        res.status(200).json({ message: 'Stock item deleted successfully' });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete stock item',
            error: err
        });
    }
}

// Get all low stock items (quantity < reorderLevel)
export async function getLowStockItems(req, res) {
    try {
        const lowStockItems = await Stock.find({
            $expr: { $lt: ['$quantity', '$reorderLevel'] }
        });

        res.status(200).json(lowStockItems);
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get low stock items',
            error: err
        });
    }
}

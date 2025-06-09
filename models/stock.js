import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true
    },
    itemName: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    unit: {
        type: String,
        required: true,
        enum: ['kg', 'g', 'l', 'ml', 'units', 'packs'],
        default: 'units'
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    supplier: {
        type: String,
        required: true,
        trim: true
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    reorderLevel: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        trim: true
    }
})

const Stock = mongoose.model("stock", stockSchema)
export default Stock;

const mongoose = require('mongoose');

// Define the Order schema
const orderSchema = new mongoose.Schema({
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

// Create and export the Order model
module.exports = mongoose.model('Order', orderSchema);


const Order = require('../models/order');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({ status: 'success', data: order });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ status: 'fail', message: 'Order not found' });
        res.status(200).json({ status: 'success', message: 'Order deleted' });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
};

// Update order status by ID
exports.updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ status: 'fail', message: 'Order not found' });
        order.status = req.body.status;
        await order.save();
        res.status(200).json({ status: 'success', data: order });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
};

// Get an order by ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ status: 'fail', message: 'Order not found' });
        res.status(200).json({ status: 'success', data: order });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({ status: 'success', data: orders });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
};

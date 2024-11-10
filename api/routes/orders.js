const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');
const { authenticateAdmin } = require('../middleware/auth');

// POST /orders
router.post('/', ordersController.createOrder);

// DELETE /orders/:id
router.delete('/:id', authenticateAdmin, ordersController.deleteOrder);

// PATCH /orders/:id (voor status bijwerken)
router.patch('/:id', authenticateAdmin, ordersController.updateOrderStatus);

// GET /orders/:id
router.get('/:id', ordersController.getOrderById);

// GET /orders
router.get('/', ordersController.getAllOrders);

module.exports = router;
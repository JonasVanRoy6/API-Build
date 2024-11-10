const express = require('express');
const mongoose = require('mongoose');
const ordersRouter = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Root Route (Toevoegen van een basismelding voor '/')
app.get('/', (req, res) => {
    res.send('API is working! Welcome to the root route.');
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://Andres:Jonas@ordersdb.z2wf6.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err.message);
    });

// Orders Routes
app.use('/orders', ordersRouter);

// Start server (Dit werkt alleen lokaal)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// Export de Express-app voor Vercel
module.exports = app;

// Import required modules
const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies

// Example route for testing
app.get('/', (req, res) => {
    res.send('Parking App Backend is Running!');
});

// API route to handle parking data (example)
app.post('/api/parking', (req, res) => {
    const { slotNumber, timing } = req.body;

    if (!slotNumber || !timing) {
        return res.status(400).json({ message: 'Slot number and timing are required.' });
    }

    // Example response (In real-world, you'd save this data to a database)
    res.status(200).json({ message: 'Parking data received.', data: { slotNumber, timing } });
});

// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


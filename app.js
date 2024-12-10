const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let slots = Array(6).fill({ isOccupied: false, carOwner: null, timings: null });

// Get all parking slots
app.get('/slots', (req, res) => {
  res.json(slots);
});

// Update a specific slot
app.post('/update-slot', (req, res) => {
  const { slotIndex, carOwner, timings } = req.body;
  slots[slotIndex] = { isOccupied: true, carOwner, timings };
  res.json({ message: 'Slot updated successfully', slots });
});

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));

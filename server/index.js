const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/tasks', (req, res) => {
    res.json([
        { id: 1, title: 'Water the plants', status: 'completed' },
        { id: 2, title: 'Prepare slides', status: 'pending' }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

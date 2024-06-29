const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');
const rewardRoutes = require('./routes/rewardRoutes');
const { Server } = require('ws');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Setup routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);
app.use('/rewards', rewardRoutes);

// Setup WebSocket server
const wss = new Server({ noServer: true });

wss.on('connection', (ws) => {
    console.log('New WebSocket connection');
    
    ws.on('message', (message) => {
        console.log('Received:', message);
        ws.send('Message received');
    });
});

// Integrate WebSocket with Express server
app.server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

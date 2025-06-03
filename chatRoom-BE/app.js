const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

app.use(express.json());

// Mount auth routes under /api/auth
app.use('/api/auth', authRoutes);

module.exports = app;

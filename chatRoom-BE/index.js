const express = require('express');
const http = require('http');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const mainApp = require('./app');

mainApp.use(cors());

const server = http.createServer(mainApp);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
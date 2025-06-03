const express = require('express');
const http = require('http');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const mainAapp = require('./app');
// const app = express();
mainAapp.use(cors());
// app.use(express.json());


const server = http.createServer(mainAapp);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// async function fetchMessages() {
//     const { data, error } = await supabase
//         .from('room')
//         .select('name');

//     if (error) {
//         console.error('Error fetching messages:', error);
//     } else {
//         console.log('Rooms:', data);
//     }
// }

// fetchMessages();

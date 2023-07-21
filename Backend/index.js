const express = require('express');
const app = express();
const connect = require('./db/connect');
const cors = require('cors');
require('dotenv').config();

const users = require('./routes/route');

// middleawre functions
app.use(express.json({limit:'50mb'}));
app.use(cors())

app.use('/api/v1/users',users);



const PORT = 3000;
const {TOKEN} =  process.env;
(async()=>{
    try {
        connect(TOKEN)
        app.listen(PORT,()=>{
            console.log(`the server is currently running on ${PORT}.../`);
        })
    } catch (error) {
        console.log(error);
    }
})()

const express = require('express');
const dotenv = require('dotenv');


// Load env vars
dotenv.config({
  path: './config/config.env'
});

const app = express();

// Route files
const bootcamps = require('./routes/bootcamps');

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);



app.get('/', (req, res) => {
  res.send('Hello');
});



const PORT = process.env.PORT || 5000;

app.listen(
  PORT, 
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}` )
);

const express = require('express');
const dotenv = require('dotenv');
//const logger = require('./middleware/logger');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');


// Load env vars
dotenv.config({
  path: './config/config.env'
});

// Connect to database;
connectDB();

const app = express();

// Body Parser
app.use(express.json());

//app.use(logger);
// Dev Loggin middleware
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}


// Route files
const bootcamps = require('./routes/bootcamps');


// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// this error handler has to go after the controller
app.use(errorHandler);


app.get('/', (req, res) => {
  res.send('Hello');
});



const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT, 
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server 
  server.close(() => process.exit(1));
})

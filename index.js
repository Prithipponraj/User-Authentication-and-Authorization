// import mongoose
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

console.log('Mongo URI:', process.env.MONGODB_URI);

app.get('/',(request, response) => {
    response.json({Message: 'Hello There 🙋‍♂️!!! '});
  });

// connect to the database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to the database!');

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Server is running @ http://localhost:5000`);
        });
    })
    .catch((error) => {
        console.log('Connection failed!');
        console.log(error);
    })
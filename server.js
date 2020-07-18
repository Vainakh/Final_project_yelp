const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "./client/dist")));

// const yelpController = require('./controllers/Yelp.jsx');
// app.use('/yelp', yelpController)

// mongoose.connect('mongodb://localhost:27017/NAMEHERE', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=>{
//     console.log('connected to mongod...');
// });


const port = Number(process.env.PORT || 4000); 
app.listen(port, function () {  console.log('JSON Server is running')});
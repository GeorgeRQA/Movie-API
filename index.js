const express = require('express');
const mongoose= require('mongoose');
const app = express();
const routes = require('./routes');

//Set up mongoose
mongoose.connect("mongodb://localhost/movies", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        const app = express();
        app.use(express.json());
        app.use('/api', routes);
        app.listen(5000, ()=>{
            console.log('Server has started');
        })
    });
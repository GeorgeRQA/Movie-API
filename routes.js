const express = require('express');
const router = express.Router();

const movie = require('./models/movie');

//Get all movies curl http://localhost:5000/api/getAll
router.get('/getAll', async(req,res)=>{
    try{
        const mov = await movie.find()
    res.send(mov);
    }catch{
        res.status(500).send("Cannot find any movies");
    }
});

//Get one ----- curl http://localhost:5000/api/getOne
router.get("/getOne/:id", async(req, res) => {
    try {
        const mov = await movie.findById(req.params.id); 
        res.send(mov);
    } catch {
        res.status(500).send(`A movie does not exist with the ID: ${req.params.id}`);
    }
})

//Create a movie ----- curl -X post -H "Content-Type:application/json" http://localhost:5000/api/create       
router.post('/create', async(req,res)=>{
    // const movieInfo = {
    //     name: req.body.name,
    //     genre: req.body.genre,
    //     release_year: req.body.release_year,
    //     actors: req.body.actors
    // }
    const newMovie = new movie({
        name: "Harry Potter",
        genre: "Fantasy",
        release_date: 2000,
        actors:[{name: 'Daniel Radcliffe',age:12},{name:'Emma Watson',age:12}]
    });
    // try{
        await newMovie.save();
        res.status(201).send(newMovie);
    // }catch{
    //     res.status(500).send("Cannot create entry");
    // }
});

// Delete movie ----- curl http://localhost:5000/api/delete
router.get("/delete/:id", async(req, res) => {
    try {
        const mov = await movie.findByIdAndDelete(req.params.id); //This can be subbed with a req.params.id and a /:id at the end of the pathway to work for any id
        res.send(mov);
    } catch {
        res.status(500).send(`A movie does not exist with the ID: ${req.params.id}`);
    }
})

module.exports = router;
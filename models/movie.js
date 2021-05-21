const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actorSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: [0, "Age must be above 0"]
    }
})

const movieSchema = new Schema({
    name: {
        type: String,
        required: true},
    genre: {
        type: String,
        required: true},
    release_year: {
        type: Number,
        required: true},
    actors: [actorSchema]
});

module.exports = mongoose.model("movies", movieSchema);
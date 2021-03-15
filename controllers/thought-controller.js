const { Thought, User } = require('../models');

const thoughtController = {
    // GET all available thoughts
    getAllThoughts(req, res) {
        Thought.find({})

    }
    // FGET one thought by _id

    /* 
    POST to create a new thought
        example data
        {
            "thoughtText": "Here's a cool thought...",
            "username": "lernantino",
            "userId": "5edff358a0fcb779aa7b118b"
        }
    */

    // PUT to update a thought by its _id
    
    // Delete to remove a thought by its _id

    // Reactions
}

module.exports = thoughtController;
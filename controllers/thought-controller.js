const { Thought, User } = require('../models');

const thoughtController = {
    // GET all available thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        // Populate with reactions
        .populate({ path: 'reactions', select: '-__v' })
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch (err => {
            console.log(err);
            res.sendStatus(400);
        });

    }
    // GET one thought by _id

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

    // === REACTIONS === //

    // POST to create a reaction stored in a single thought's reactions array field

    // DELETE to pull and remove a reaction by the reaction's reactionId value
}

module.exports = thoughtController;
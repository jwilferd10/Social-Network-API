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
    },
    
    // GET one thought by _id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'There is NO thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400);
            });
    },

    /* 
    POST to create a new thought
        example data
        {
            "thoughtText": "Here's a cool thought...",
            "username": "lernantino",
            "userId": "5edff358a0fcb779aa7b118b"
        }
    */
    createThought({params, body }, res) {
        console.log(params);

        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate (
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            // Check for errors
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'There is NO user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => 
                res.json(err)
            );
    },

    // PUT to update a thought by its _id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true})
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'There is NO thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err =>
                res.json(err)
            );
    },

    // Delete/Remove to remove a thought by its _id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then(deletedThought => {
                if (!deletedThought) {
                    res.status(404).json({ message: 'There is NO thought found with this id!' });
                    return;
                }
                // Note to self: 
                // We're updating the id
                // $pull on specifically the thoughtId
                return User.findOneAndUpdate (
                    { _id: params.userId },
                    { $pull: { thoughts: params.thoughtId } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'There is NO user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => 
                res.json(err)
            );
    },

    // === REACTIONS === //

    // POST to create a reaction stored in a single thought's reactions array field
    // /api/thoughts/:thoughtId/reactions
    addReaction({ params, body}, res) {
        Thought.findOneAndUpdate (
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'There is NO thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => 
            res.json(err)
        );
    },

    // DELETE to pull and remove a reaction by the reaction's reactionId value
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate (
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
        .then((dbUserData) => res.json(dbUserData))
        .catch(err => 
            res.json(err)
        );
    }
}

module.exports = thoughtController;
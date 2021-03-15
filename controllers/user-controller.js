const { User } = require('../models');

// Perform CRUD routes
const userController = {
    // Find all users
    // testing link: /api/users
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    // Find one user by id
    // testing link: /api/users/:id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate ({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400)
        });
    }

}
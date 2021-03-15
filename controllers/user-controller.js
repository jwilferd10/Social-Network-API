const { User } = require('../models');

// Perform CRUD routes
const userController = {
    // Find all users
    // testing link: /api/users
    getAllUsers(req, res) {
        User.find({})
        .select('-__v')
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
        // Turn populate into an array.
        // GET a single user by its _id and populated thought and friend data
        .populate([ 
            // Reference comments
            { path: 'comments', select: '-__v' },
            // Reference friends
            { path: 'friends', select: '-__v' },
        ])
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Create a new user
    // EXAMPLE: 
    // {
    //     "username": "lernantino",
    //     "email": "lernantino@gmail.com"
    // }
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => 
                res.json(err)
            );
    },
    
    // Update User by id
    // testing link: /api/users/:id
    updateUser ({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
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
    
    // Delete a user
    // testing link: /api/users/:id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json ({ message: 'There is NO user found by this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err =>
                res.json(err)
            );
    }, 

    // === FRIENDS === //

    // POST to add a new friend to a user's friend list
    createFriend({params}, res) {
        User.findOneAndUpdate (
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json ({ message: 'There is NO user found by this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => 
            res.json(err)
        );
    },
    // DELETE to remove a friend from a user's friend list
    deleteFriend({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json ({ message: 'There is NO user found by this id!' });
                return;  
            }
            res.json(dbUserData);
        })
        .catch(err => 
            res.json(err)
        );
    }
};

module.exports = userController;
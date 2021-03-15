const router = require('express').Router();

// Router pulling from this const
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// For getting all users and creating a user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Route specifically finding things by id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// Friend Routes

router
    .route('/:userId/friends/:friendId')
    .post(createFriend)
    .delete(deleteFriend)

module.exports = router;
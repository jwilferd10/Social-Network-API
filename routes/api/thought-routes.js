const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router 
    .route('/:userId')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(addReaction)
    .delete(deleteThought);

router
    .route('/:userId/:thoughtId/:reactionsId')
    .delete(removeReaction)

module.exports = router;
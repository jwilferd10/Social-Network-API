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
    .route('/')
    .get(getAllThoughts)
router 
    .route('/:userId')
    .post(createThought)

router
    .route('/:id')
    .get(getThoughtById)
router
    // .route('/:userId/:thoughtId')
    .route('/:thoughtId')
    .delete(deleteThought);

router
    .route('/:userId/:thoughtId/:reactionsId')
    .put(addReaction)
    .delete(removeReaction)

module.exports = router;
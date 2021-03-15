const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Reaction (SCHEMA ONLY)
const ReactionSchema = new Schema (
    {
        // Adding comment for the sake of memory, this is setting a custom id to avoid confusion with the parent Thought id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        },
        // Prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
module.exports = ReactionSchema;
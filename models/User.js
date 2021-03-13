const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// User

// username

// String
// Unique
// Required
// Trimmed

// email

// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)

// thoughts

// Array of _id values referencing the Thought model
// friends

// Array of _id values referencing the User model (self-reference)
// Schema Settings

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.


const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^#?([a-f0-9]{6}|[a-f0-9]{3})$/]
        },
        // Array of _id values referencing the Thought model
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
        // Array of _id values referencing the User model (self-reference)
        friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
    {

        toJSON: {
            virtuals: true,
        },
        // Prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
)

// friendCount virtual, retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
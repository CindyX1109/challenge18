const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            email: {
                type: String,
                trim: true,
                lowercase: true,
                unique: true,
                required: "Email address is required",
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
            },
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

// get total count of friends and replies on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String,}
})

const User = mongoose.models.User || mongoose.model('User', Schema);
export default User;
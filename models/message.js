mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    name: String,
    message: String
})

var Message = module.exports = mongoose.model('Message', messageSchema);
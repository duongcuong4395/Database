const mongoose = require('mongoose');

let ProductSchema = mongoose.Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);

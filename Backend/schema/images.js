const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  added_date: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  Approve: {
    type: Number,
    required: false,
    default: 0,
  },
  prompt: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
    default: 0,
  },
  tags: {
    type: [String], // An array of strings for tags
    required: false,
  },
  userID: {
    type: Schema.Types.ObjectId,
    default: 0,
  },
});

module.exports = mongoose.model('Image', ImageSchema);

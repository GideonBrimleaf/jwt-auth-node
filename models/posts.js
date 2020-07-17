const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
  date: {
    type: 'number',
    required: true
  },
  post: {
    type: 'String',
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('Post', postSchema)
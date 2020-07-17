const mongoose = require('mongoose')
const Post = require('../models/posts')

const connUri = process.env.MONGO_LOCAL_CONN_URL

module.exports = {
  create: (req, res) => {
    mongoose.connect(connUri, { useUnifiedTopology: true, useNewUrlParser : true }, (err) => {
      let result = {}
      let status = 201
      if (!err) {
        const { date, postContent } = req.body
        const post = new Post({ date:date, post:postContent })
        post.save((err, post) => {
          if (!err) {
            result.status = status
            result.post = post
          } else {
            result.status = 500
            result.error = err
          }
          res.status(status).send(result)
        })
      } else {
        result.status = 500
        result.error = err
        res.status(status).send(result)
      }
    })
  },

  index: (req, res) => {
    mongoose.connect(connUri, { useUnifiedTopology: true, useNewUrlParser : true }, (err) => {
      let result = {}
      let status = 200

      if(!err) {
        Post.find({}, (err, posts) => {
          if(!err){
            result.posts = posts
            result.status = status
            result.error = err
          } else {
            result.error = err
            result.status = 500
          }
          res.status(status).send(result)
        })
      } else {
        result.error = err
        result.status = 500
        res.status(status).send(result)
      }
    })
  }
}
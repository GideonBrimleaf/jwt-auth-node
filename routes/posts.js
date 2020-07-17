const controller = require('../controllers/posts')
const validateToken = require('../utils').validateToken

module.exports = (router) => {
  router.route('/posts')
  .get(controller.index)
  .post(validateToken, controller.create)
}
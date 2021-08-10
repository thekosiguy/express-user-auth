const { User } = require('../models')

const addVarsToResLocals = async (req, res, next) => {
  // add currentUser property to res.locals to make it available for EJS template engine on all req/res cycles
  if (req.session.userId) {
    res.locals.currentUser = await User.findOne({
      where: {
        id: req.session.userId
      }
    })
  } else {
    res.locals.currentUser = undefined
  }
  // add errors property to res.locals to make it available for EJS template engine on all req/res cycles
  res.locals.errors = []
  // proceed to next function
  next()
}

module.exports = addVarsToResLocals

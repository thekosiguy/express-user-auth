const authenticator = (req, res, next) => {
  // check if there is a user signed in
  if (req.session.userId === undefined) {
    // if not, redirect back to index
    res.redirect('/')
  } else {
    // if yes, proceed to next function
    next()
  }
}

module.exports = authenticator

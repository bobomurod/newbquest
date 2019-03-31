function checkTokenSetUser(req, res, next) {
  const authHeader = req.get("authorization");
  console.log(authHeader);
  next();
}

module.exports = {
  checkTokenSetUser
};

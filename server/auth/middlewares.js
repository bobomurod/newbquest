const webToken = require("jsonwebtoken");

function checkTokenSetUser(req, res, next) {
  const authHeader = req.get("authorization");
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token);
    if (token) {
      webToken.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
        console.log(decoded.username);
      });
    } else {
    }
  } else {
    next();
  }
}

module.exports = {
  checkTokenSetUser
};

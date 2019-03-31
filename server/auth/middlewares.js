function checkTokenSetUser(req, res, next) {
  console.log("Ok, this is middleware");
  console.log("i will run for every request comes to server");
  console.log("if i call NEXT,  i will go to the next middleware");
  next();
}

module.exports = checkTokenSetUser;

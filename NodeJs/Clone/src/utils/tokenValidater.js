const verifyToken = (req, res, next) => {
    const userToken = req.headers["token"];
    // console.log(token);
    if (!userToken) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = jwt.verify(userToken, jwtSecretKey);
      req.user = decoded;
      console.log(req.user.name);
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
  };

  module.exports={verifyToken};
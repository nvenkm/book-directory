const jwt = require("jsonwebtoken");

//middleware function to verify token
async function verifyToken(req, res, next) {
  try {
    // get the authorization header
    const authHeader = req.headers["authorization"];

    // if no authheader then send message
    if (!authHeader || !authHeader.startsWith("Bearer"))
      return res.status(401).json({ message: "Unauthorized!" });

    //extract the token by removing bearer
    const token = authHeader.substr(7);

    //verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    //set the payload to req.user
    req.user = verified;

    // continue the request
    next();

    // catch any error
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
}

module.exports = {
  verifyToken,
};

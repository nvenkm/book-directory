const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//function to register user
async function handleUserRegister(req, res) {
  try {
    // fetch the recieved email
    const recievedEmail = req.body.email;

    //check if the user already exists and send message if it does
    const userExists = await User.findOne({ email: recievedEmail });
    if (userExists) {
      return res.status(400).json({ message: "User Already Exists!" });
    }

    // hash the sent password
    const hash = await bcrypt.hash(req.body.password, 10);

    // create a new user object
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    //save the new user object to DB
    const savedUser = await newUser.save();

    // send the saved user as response
    return res.status(201).json(savedUser);

    //catch any other erorr
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong!", error: error.message });
  }
}

//function to login user
async function handleUserLogin(req, res) {
  try {
    // fetch the recieved email and password
    const { email: userEmail, password } = req.body;
    console.log(req.body);
    // find the user in the database
    const user = await User.findOne({ email: userEmail });

    // if user not found send message
    if (!user) return res.status(400).json({ message: "Invalid credentials!" });

    // match the hash from the db
    const match = await bcrypt.compare(password, user.password);

    // if not matched send message
    if (!match)
      return res.status(400).json({ message: "Invalid credentials!" });

    //if matched create a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    //delete user.password before sending to the user
    delete user.password;

    //send token and user
    res.status(200).json({ token, user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong!", error: error.message });
  }
}

module.exports = {
  handleUserRegister,
  handleUserLogin,
};

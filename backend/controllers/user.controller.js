const User = require("../models/user.js")
const bcrypt = require("bcryptjs")
const register = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;
    const resolvedUsername = (username || name || "").trim();

    if (!resolvedUsername || !email || !password) {
      return res.status(400).json({ message: "Username, email and password are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
      username: resolvedUsername,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}
module.exports = {register}

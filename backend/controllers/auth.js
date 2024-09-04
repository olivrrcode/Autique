import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register a new user
async function register(req, res) {
  try {
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      profilePicture,
    } = req.body;

    // Validate required fields
    if (!username || !email || !password || !firstName || !lastName) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    // Check if the user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Optional: Check if the username is unique
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new user object
    const newUser = new User({
      username,
      email,
      password: passwordHash, // Store the hashed password
      firstName,
      lastName,
      phoneNumber,
      address: {
        street: address?.street,
        city: address?.city,
        county: address?.county,
        postcode: address?.postcode,
        country: address?.country || "United Kingdom", // Default country if not provided
      },
      profilePicture,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Generate a JWT token for authentication
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Respond with the token and user details (password excluded)
    const userResponse = savedUser.toObject();
    delete userResponse.password; // Remove password before sending response
    res.status(201).json({
      token,
      user: userResponse,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Server error" }); // Generic error message for client
  }
}

// User login function
async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    // Check if the user exists by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" }); // Use 401 for authentication failure
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Respond with the token and user details (password excluded)
    const userResponse = user.toObject();
    delete userResponse.password; // Remove password before sending response
    res.status(200).json({ token, user: userResponse });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Server error" }); // Generic error message for client
  }
}

export { register, login };

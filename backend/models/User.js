import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  address: {
    street: { type: String, required: false },
    city: { type: String, required: false },
    county: { type: String, required: false },
    postcode: { type: String, required: false },
    country: { type: String, default: "United Kingdom" },
  },
  profilePicture: {
    type: String,
    required: false,
  },
  auctionsCreated: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auction",
    },
  ],
  bidsPlaced: [
    {
      auctionId: { type: mongoose.Schema.Types.ObjectId, ref: "Auction" },
      amount: { type: Number, required: true },
      datePlaced: { type: Date, default: Date.now },
    },
  ],
  favoriteCars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
  accountCreated: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;

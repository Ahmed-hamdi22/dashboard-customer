// Moment.js for date formatting
var moment = require("moment");
const User = require("../models/customer-schema");

// Get All Users
const aa = (req, res) => {
  User.find()
    .then((data) => {
      res.render("index", { arr: data, moment: moment });
    })
    .catch((err) => {
      console.error("Error fetching users:", err);
    });
};

// Get User by ID for Edit
const bb = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      res.render("user/edit", { item: data });
    })
    .catch((err) => {
      console.error("Error fetching user for edit:", err);
    });
};

// Show Add Form
const cc = (req, res) => {
  res.render("user/add");
};

// Add New User
const dd = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Error adding user:", err);
    });
};

// Update User
const ee = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Error updating user:", err);
    });
};

// Delete User
const ff = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Error deleting user:", err);
    });
};

// View Single User
const gg = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      res.render("user/view", { obj: data, moment: moment });
    })
    .catch((err) => {
      console.error("Error fetching user by ID:", err);
    });
};

// Search Users
const hh = (req, res) => {
  const searchText = req.body.searchText.trim();
  User.find({ $or: [{ fireName: searchText }, { lastName: searchText }] })
    .then((result) => {
      res.render("user/search", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.error("Error searching users:", err);
    });
};

module.exports = { aa, bb, cc, dd, ee, ff, gg, hh };

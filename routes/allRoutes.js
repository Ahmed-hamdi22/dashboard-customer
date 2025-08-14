const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

// Routes

// Get All Users
router.get("/", controller.aa);

// Show Add User Page
router.get("/user/add.html", controller.cc);

// Add New User
router.post("/user/add.html", controller.dd);

// Show Edit User Page
router.get("/edit/:id", controller.bb);

// Update User
router.put("/edit/:id", controller.ee);

// Delete User
router.delete("/edit/:id", controller.ff);

// View User by ID
router.get("/user/:id", controller.gg);

// Search Users
router.post("/search", controller.hh);
module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Define routes

router.get("/", userController.root);

router.get("/user", userController.getUser);

router.get("/user/:username", userController.getUserByUsername);

module.exports = router;

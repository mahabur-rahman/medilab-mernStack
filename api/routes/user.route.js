const express = require("express");
const router = express.Router();

const {
  registerUser,
  getAllUser,
  getSingleUser,
  updatedUser,
  deleteUser,
} = require("../controllers/user.controller");

// CREATE | POST
// READ ALL USER | GET
// GET SINGLE USER | GET
// EDIT | PUT
// DELETE | DELETE

// ###########################
router.post("/register", registerUser);
router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.put("/:updateId", updatedUser);
router.delete("/:id", deleteUser);
// ###########################

module.exports = router;

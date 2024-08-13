// src/routes/userRoutes.js
const { Router } = require("express");
const {
  createUser,
  updateUser,
  fetchUsers,
  showUser,
  deleteUser,
} = require("../repositories/user.repository");

const router = Router();

router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/", fetchUsers);
router.get("/:id", showUser);
router.delete("/:id", deleteUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../Modals/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const sec_code = "vallabyh@123";

// Route for '/' for create a new user
router.post("/", async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const old_user = await User.findOne({ email: email });
    if (old_user) {
      return res.status(200).send("user with ihis email is alerady exist");
    }

    const salt = await bcrypt.genSalt(5);
    const sec_password = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      phone,
      password: sec_password,
    });
    const Data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(Data, sec_code);
    res.json({
      msg: "user created suceesfully",
      data: token,
      user_id: user.id,
    });
  } catch (error) {
    return res.status(400).send(error);
  }
});
module.exports = router;

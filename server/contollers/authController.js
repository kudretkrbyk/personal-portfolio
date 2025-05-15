const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sanityFunction } = require("../middleware/sanityFunction");
const { validationResult } = require("express-validator");
const { getUserByUsername, createUser } = require("../models/userModel");

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const username = sanityFunction(req.body.userName);
    const password = sanityFunction(req.body.userPassword);

    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: "Bu kullanıcı adı zaten alınmış." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await createUser(username, hashedPassword);

    res.status(201).json({ message: "Kayıt başarılı." });
  } catch (err) {
    console.error("REGISTER ERROR:", err.message);
    res.status(500).json({ error: "Sunucu hatası." });
  }
};

const login = async (req, res) => {
  try {
    const username = sanityFunction(req.body.userName);
    const password = req.body.userPassword;

    const user = await getUserByUsername(username);
    console.log("User: login", user);
    if (!user) return res.status(401).json({ error: "Invalid credentials." });

    const match = await bcrypt.compare(password, user.userpassword);
    if (!match) return res.status(401).json({ error: "Invalid credentials." });
    if (!user.isadmin)
      return res.status(401).json({ error: "Invalid credentials." });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({
      token,
      username: user.username,
      userID: user.id,
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed." });
  }
};
module.exports = {
  register,
  login,
};

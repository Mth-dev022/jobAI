const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const pool = require('./db.js')
const dotenv = require('dotenv')

dotenv.config();

const register = async (req, res) => {
  try {
    const existingUserQuery = `
      SELECT * FROM "User" WHERE username = $1 OR email = $2;
    `;
    const { rows: existingUser } = await pool.query(existingUserQuery, [req.body.username, req.body.email]);

    if (existingUser.length > 0) {
      return res.status(409).json('User already exists');
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const createUserQuery = `
      INSERT INTO "User" (username, email, password) VALUES ($1, $2, $3);
    `;
    await pool.query(createUserQuery, [req.body.username, req.body.email, hash]);

    return res.status(200).json("User has been created");
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const findUserQuery = `
      SELECT * FROM "User" WHERE email = $1;
    `;
    const { rows: user } = await pool.query(findUserQuery, [req.body.email]);

    if (user.length === 0) {
      return res.status(404).json("Usuário ou senha incorretos");
    }

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user[0].password);
    if (!isPasswordCorrect) {
      return res.status(400).json("Usuário ou senha incorretos");
    }

    const token = jwt.sign({ id: user[0].id }, process.env.JWT_KEY);
    const userData = { id: user[0].id, username: user[0].username, email: user[0].email };

    res.cookie("access_token", token, {
      httpOnly: true,
      maxAge: 900000,
    }).status(200).json(userData);
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json(error);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("access_token", {
      sameSite: "none",
      secure: true
    }).status(200).json("User has been logged out.");
  } catch (error) {
    console.error("Error logging out:", error);
    return res.status(500).json(error);
  }
};

module.exports = {
  register,
  login,
  logout
};

import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const signup = async (req, res) => {
  const body = req.body;
  const { username, email, password } = body;
  const hasedPassword = bcrypt.hashSync(password, 10);

  const nweUser = new User({ username, email, password: hasedPassword });
  try {
    await nweUser.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.status(201).json('User created successfully!');
};

const router = require('express').Router();
const User = require('../models/ClientModel');
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user) return res.status(404).json({ message: 'User not found' });

    const passwordValid = await bcrypt.compare(password, user.password);

    if(!passwordValid) 
      return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({ 
      message: 'Login successful!',
      token: generateToken(user.id) 
    });

  } catch (err) {
    res.status(500).json({ error: err });
  }

});

module.exports = router;

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('Authorization header:', authHeader); // Debug: Log full header
  const token = authHeader?.replace('Bearer ', '');
  console.log('Token received:', token); // Debug: Log extracted token
  if (!token) {
    console.log('No token found in Authorization header');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    console.log('JWT_SECRET:', process.env.JWT_SECRET); // Debug: Log secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded); // Debug: Log decoded payload
    if (!decoded.user || !decoded.user.id || !decoded.user.role) {
      console.error('Invalid token payload structure:', decoded);
      return res.status(401).json({ message: 'Invalid token payload' });
    }
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Token validation error:', err.message); // Debug: Log error details
    res.status(401).json({ message: 'Invalid token' });
  }
};
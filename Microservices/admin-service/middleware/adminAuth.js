const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const token = authHeader.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded.user || decoded.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized: Admin access required' });
        }

        req.user = decoded.user;
        next();
    } catch (error) {
        console.error('JWT verification error:', error.message);
        return res.status(401).json({ message: 'Token is not valid' });
    }
};

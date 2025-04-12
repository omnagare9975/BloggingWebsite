const jwt = require('jsonwebtoken')

const authMiddleware = (req ,res, next) =>{
    const token = req.cookies.token;
    
    if (!token){
        return res.redirect('/user/login')
    }
    try {
        const decocded = jwt.verify(token , process.env.JWT_SECRET)
        req.user = decocded
        next()

    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token.' });
        
    }
}

module.exports = {authMiddleware,}
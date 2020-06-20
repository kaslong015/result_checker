module.exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated() && !(req.user.role)) {
        next();
    }else if(req.isAuthenticated() && req.user.role){
        res.redirect('/admin');
    }
     else {
        res.redirect('/login');
        //res.status(401).json({ msg: 'You are not authorized to view this resource' });
    }
}

module.exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin.' });
    }
}
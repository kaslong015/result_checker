var express = require('express');
var router = express.Router();
var passport = require('passport');
var controller = require('../controllers/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',controller.getlogin);
router.get('/homepage',controller.homepage);
router.post('/register',controller.register);
router.post('/login', passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/homepage' }));
// Visiting this route logs the user out
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;

var router = require('express').Router();
var session = require('express-session');
router.get('/login.html', function(req, res){
    res.sendFile(__dirname + '/login.html');
    session.userLoggedIn = false;
})

// router.get('/index.html', function(req, res) {
//     // res.sendFile(__dirname + '/index.html');
//     if (session.userLoggedIn) {
//         res.sendFile(__dirname + '/orar.html');
//     }
//     else {
//         res.sendFile(__dirname + '/login.html');
//     }
// })

router.get('/register.html', function(req, res) {
    res.sendFile(__dirname + '/register.html');
})

router.get('/orar.html', function(req, res) {
    if (session.userLoggedIn) {
        res.sendFile(__dirname + '/orar.html');
    }
    else {
        res.redirect('/login.html');
    }
})

router.get('/profile.html', function(req, res) {
    if (session.userLoggedIn) {
        res.sendFile(__dirname + '/profile.html');
    }
    else {
        res.redirect('/login.html');
    }
})


module.exports = router;
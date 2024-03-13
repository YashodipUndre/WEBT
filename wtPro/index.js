//imports
const express = require('express');
const ejs = require('ejs')
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const server = express();
const jwt = require('jsonwebtoken');
const ClgModel = require("./Model/College")
const College = ClgModel.Model;
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const username = encodeURIComponent("yashundre07");
const password = encodeURIComponent("Yashodip@123");
const db = `mongodb+srv://${username}:${password}@cluster0.uucxr3d.mongodb.net/?appName=mongosh+2.1.4/`
const ldb = 'mongodb://localhost:27017/ecommarce'
const StudentModel = require("./Model/Student")
const Students = StudentModel.Model;
const TeacherModel = require("./Model/Teacher")
const Teacher = TeacherModel.Model;
const session = require('express-session')
const passport = require("passport");
const bdp = require("body-parser");
const path = require('path')
const LocalStrategy = require('passport-local').Strategy;
server.use(cors());
server.use(bdp.json());
server.use(bdp.urlencoded())


//DataBase
main().catch(err => console.log(err))
async function main() {
    await mongoose.connect(db);
    console.log("DB Connected")
}

// Authentication And Session
server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 }
}))
server.use(passport.initialize())
server.use(passport.session())

passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log(username);
        Teacher.findOne({ username: username })
            .then(user => {
                if (!user) {
                    return Promise.reject(new Error('User not found'));
                }
                if (user.password !== password) {
                    return Promise.reject(new Error('Incorrect password'));
                }
                return Promise.resolve(user);
            })
            .then(user => {
                // User found and password is correct
                return done(null, user);
            })
            .catch(err => {
                // Handle errors
                return done(err);
            })

    }
));
passport.serializeUser((user, done) => {
    if (user) {
        return done(null, user.id);
    }
    return done(null, false);
});
passport.deserializeUser((id, done) => {
    Teacher.findById(id)
        .then(user => {
            return done(null, user)
        })
        .catch(err => {
            return done(null, false);
        })
})

//Static for react files
server.use(express.static('build'));
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

//Controller 
server.get('/ld', isauth, (req, res) => {
    req.session.test ? req.session.test++ : req.session.test = 1;
    res.send(req.session.test.toString() + " " + req.user.username);
})
function isauth(req, res, done) {
    if (req.user) {
        return done();
    }
    return res.redirect('/');
}
server.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            res.send(err)
        }

    });
    res.send("logged out")
})
server.post('/login',
    passport.authenticate('local'),
    function (req, res) {
        res.json(req.user);
    });




//Server
server.listen(8080);

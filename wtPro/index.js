//imports
const express = require('express');
const mongodb = require('mongodb');
const server = express();
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const username = encodeURIComponent("yashundre07");
const password = encodeURIComponent("Yashodip@123");
const db = `mongodb+srv://${username}:${password}@cluster0.uucxr3d.mongodb.net/?appName=mongosh+2.1.4/`
const ldb = 'mongodb://localhost:27017/ecommarce'
const session = require('express-session')
const passport = require("passport");
const bdp = require("body-parser");
const path = require('path')
const LocalStrategy = require('passport-local').Strategy;
const User = require('./Model/User');
const UserModel = User.Model;
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
server.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname,'build', "index.html"));
});

//Auth Funtion
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

function isauth(req, res, done) {
    if (req.user) {
        return done();
    }
    return res.redirect('/');
}

server.get('/ld', isauth, (req, res) => {
    req.session.test ? req.session.test++ : req.session.test = 1;
    res.send(req.session.test.toString() + " " + req.user.username);
})
server.post('/registration',async (req,res)=>{
    try {
        const newUser=new UserModel(req.body);
        const as = await newUser.save();
        res.json(as);
    }
    catch (error) {
        // res.status(500).json({ error: error.message })
         console.log(error)
         res.json(req.body);
    }
        
})

server.get('/registration',async (req,res)=>{
    res.json(req.body);
    try {
        const newUser=await UserModel.find();
        res.json(newUser);
    }
    catch (err) {
       console.log(err.message);
    }
        
})
//Server
server.listen(8080);

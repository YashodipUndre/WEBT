const Model = require("../Model/User")
const fs = require('fs')
//const Users = Model.Model;
const jwt = require('jsonwebtoken')
const ClgModel = require("../Model/College")
const College = ClgModel.Model;
const path = require('path');
const ejs = require('ejs')
const TeacherModel = require("../Model/Teacher")
const Teacher = TeacherModel.Model;
const StudentModel = require("../Model/Student")
const Students = StudentModel.Model;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

exports.createUser = async (req, res) => {
    const newUser = new Users(req.body);
    var token = jwt.sign({ email: req.body.email }, 'shhhhh');
    newUser.token = token;
    const ans = await newUser.save();
    res.json(ans);
}
exports.createCollage = async (req, res) => {
    let college;
    let newUser = null;
    try {
        newUser = new College(req.body);
        const ans = await newUser.save();
        res.render('sendRequest', { college: ans._id });
    }
    catch (err) {
        res.render('sendRequest', { college: 'College is Already Registered' });
    }
}
exports.createTeacher = async (req, res) => {
    let Msg;
    let newUse = null;
    try {
        newUse = new Teacher(req.body);
        const ans = await newUse.save();
        res.render('Registration', { Msg: ans._id });
    }
    catch (err) {
        res.render('Registration', { Msg: "Already Registered" });
    }
    
}
exports.createStudent = async (req, res) => {
    let Msg;
    let newUser = null;
    try {
        newUser = new Students(req.body);
        const ans = await newUser.save();
        res.render('Registration', { Msg: ans._id });
    }
    catch (err) {
        console.log(err.message);
        res.render('Registration', { Msg: 'Already Registered' });
    }
}
exports.LoginStudent = async (req, res) => {


}

exports.LoginTeacher = async (req, res) => {

  
}
exports.LogoutTeacher = async (req, res) => {
    req.logout((err) => {
        if (err) { console.log(err) }
        else {
            res.redirect('/aboutus');
        }

    });
}
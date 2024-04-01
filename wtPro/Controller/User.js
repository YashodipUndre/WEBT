const Model = require("../Model/User")
const Users = Model.Model;

exports.getUsers = (req,res)=>{
    Users.find()
    .then(function (models) {
      res.json(models);
    })
    .catch(function (err) {
      console.log(err);
    });
}

exports.getUser = (req,res)=>{
    const id = req.params.id;
    const User = Users.find(p=>p.id==id);
    res.json(Users);
}

exports.createUser = async(req,res)=>{
    const newUser = new Users(req.body);
    const ans= await newUser.save();
    res.json(ans);
}


exports.ReplaceUser = (req,res)=>{
    const id = req.params.id;
    const UserIndex = Users.findIndex(p=>p.id==id);
    Users.splice(UserIndex,1,{...req.body,id:id})
    res.sendStatus(201);
}

exports.updateUser  = (req,res)=>{
    const id = req.params.id;
    const UserIndex = Users.findIndex(p=>p.id==id);
    const ExPro=Users[UserIndex];
    Users.splice(UserIndex,1,{...ExPro,...req.body})
    res.sendStatus(201);
}
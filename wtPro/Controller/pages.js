
exports.Reg = (req,res)=>{

}

exports. = async(req,res)=>{
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
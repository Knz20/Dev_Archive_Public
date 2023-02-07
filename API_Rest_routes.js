const db = require('../config/config.db'); 
const user = require("../models/user");
const jwt = require("jsonwebtoken"); 
const auth = require("../middlewares/auth");

// type de service :  hello 

routes.get ('/hello', function(req, res) {
    res.send('hello');
     
}); 

// Type de service : Obtenir un token

routes.post ('/login', async (req, res) => {
    
    const {email, password} = req.body;
    const emailuser = await user.findOne({where: {email}}).catch((err) => { 
    console.log ("error:", err);
    }); 

    if (!emailuser)
        return res.json ({message: "Email/pseudo est incerrecte"}); //Pour plus de sécurité, on précise pas que c'est l'email qui ne match pas 
   
    if (emailuser.password !== password)
        return res.json ({message: "bad credentiel"});

    
    const body = {_id: user.idUsers, email: user.email};
    const jwttoken = jwt.sign({user : body}, 'TOP_SECRET'); 
    res.json({ message : "login ok", token: jwttoken  });


});
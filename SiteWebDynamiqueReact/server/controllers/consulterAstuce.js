const sequelize = require("../models/objets");
const Astuce= sequelize.models.Objets;
const { Op } = require("sequelize");

exports.ConsultAstuce = (req, res,next) =>{
    
     Astuce.findOne({ 
         where:  { nomObjet: req.query.nomObjet },
                 
               
           
         })
         .then(objets => {
                 res.status(200).send({
                    objets : {
                        Astuce : objets // format json à renvoyer
                    }
                 })
                        
         }
         
         ) 
         .catch(err => {
             console.log(err);
             res.status(401).send("astuce introuvable");
         })     
         
   
 }
 
 
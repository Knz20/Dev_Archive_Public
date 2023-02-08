const sequelize = require("../models/objets");
const Astuce= sequelize.models.Objets;
const { Op } = require("sequelize");


/*exports.findAstuce = (req, res) =>{
    Astuce.findAll
         Astuce =>{
                 res.status(200).send({
                     //Données du profil à renvoyer
                  nomObjet : objets.nomObjet,
                  imgUrlObjet : objets.imgUrlObjet,
                  InformationObjet: objets.InformationObjet,
                  
                 })
                }
   }              
         */
         
         
         
 



 exports.listAstuce = (req, res, next) =>{
    
            Astuce.findAll({
                attributes: ['nomObjet', 'imgUrlObjet', 'InformationObjet']
                //spécification des infos à recuperer
            })
            .then(objets =>{
                    res.status(200).send({
                        objets : {
                            Astuce : objets // format json à renvoyer
                        }});
                })
            .catch(error =>
                {
                    console.log(error);
                    res.status(400).send("Impossible de recuperer les astuces");
                });

      
}
 
 
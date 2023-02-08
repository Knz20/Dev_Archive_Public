const sequelize = require("../models/users");
const User = sequelize.models.Users;

//fonction pour supprimer un user
exports.deleteUser = (req, res, next) =>
{
    const username = req.decodedToken.username; // valeur fournie par le middleware token_auth
    const userToDelete = req.body.username;
    User.findOne({ where: {pseudo: username}})
    .then( user => {
        console.log('ici ' + user);
        if(user.isAdmin) // verifier si l'User est admin
        {
            console.log(user);
            //Suppression de l'utilisateur
            User.destroy({
                where: {
                  pseudo: userToDelete
                }
            })
            .then( () =>{
                    res.status(200).send("OK: Utilisateur Supprimé");
                })
            .catch(error =>
                {
                    console.log(error);
                    res.status(400).send("Impossible de supprimer cet user");
                });

        }
        else{
            res.status(400).send("Pas le droit de suppression ");
        }
    })
    .catch(error =>
        {
            console.log(error);
            res.status(400).send("Utilisateur non trouvé");
        });

}



//fonction pour modifier un utilisateur
exports.userToAdmin = (req, res, next) =>
{
    const username = req.decodedToken.username; // valeur fournie par le middleware token_auth, correspondant au pseudo de l'user qui est déjà admin
    const userToAdmin = req.body.username;
    User.findOne({ where: {pseudo: username}})// compares le pseudo dans la table à username
    // ca va te permettre de savoir que celui qui modifie est bien un admin
    .then( user => {
        console.log('ici ' + user);
        if(user.isAdmin) // verifier si l'User est admin : celui qui veut rendre admin
        {
            console.log(user);
            //modification de l'utilisateur qui n'est pas admin pour le rendre admin
            User.update({
                isAdmin : 1,
            },
                {where: {pseudo: userToAdmin }
                }
            ) // c'est comme un update users set isAdmin = 1 where pseudo = valeur de usrToAdmin
            
            .then( () =>{
                    res.status(200).send("OK: Utilisateur est devenu administrateur");
                })
            .catch(error =>
                {
                    console.log(error);
                    res.status(400).send("Impossible de rendre l'utilisateur administrateur");
                });

        }
        else{
            res.status(400).send("Pas le droit de modifier ");
        }
    })
    .catch(error =>
        {
            console.log(error);
            res.status(400).send("Utilisateur non trouvé");
        });

}
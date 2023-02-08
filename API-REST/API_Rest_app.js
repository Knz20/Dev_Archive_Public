const express = require('express');    
const app = express(); //intialiser l'app 
const passport = require('passport');  
const passeportjwt = require('passport-jwt')       
const jwt = require('jsonwebtoken');     
const PORT = 3000 // port d'écoute du serveur              
const model_users = require('./src/models/user');  

const routes = require('./src/routes/routes'); 


// Appel des routes
app.use(express.json()); 


// Lancement du serveur
app.listen(PORT, () => {
    console.log(`le server est en ecoute sur http://localhost:${PORT}`)
    });

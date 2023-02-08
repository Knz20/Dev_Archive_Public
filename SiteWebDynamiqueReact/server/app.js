/*fichier qui relie les routes et les models et les controllers*/

const express = require('express');//appel de express
const session = require('express-session');
const passport = require('passport');
require('./auth');

const app = express();



const loginRoute=require('./routes/login');//indiquer ou se trouve la route login
const registerRoute=require('./routes/register');
const profilRoute = require('./routes/profil');//indiquer ou se trouve la route profil
const gestionUser = require('./routes/admin');//indiquer ou se trouve la route admin
const ajoutAstuce = require('./routes/ajoutAstuce');
const listAstuce = require('./routes/listAstuce');
const consulterAstuce = require('./routes/consulterAstuce');
const path = require('path');
const cookieParser = require('cookie-parser');

/*// Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '485909074496-3tnnjljpspl7rl79b0tof9sh7sirqnds.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);*/


app.use('/files', express.static(path.join(__dirname, 'files')));
app.use(express.urlencoded({extended: true}));

app.use(express.json());//pouvoir envoyer les données en format json


function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
  
  app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
  });
  
  app.get('/auth/google',
    passport.authenticate('google', { scope: [ 'email', 'profile' ] }
  ));
  
  app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/google/failure'
    })
  );
  
  app.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
  });
  
  app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
  });
  
  app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });
  //Moi j'aurai fais comme ca :
//const isLoggedIn = (req, res, next) => {
  //req.user ? next() : res.sendStatus(401);
//};
//pour eviter la duplication j'aujai fais ceci
// const sendProtected = (req, res) => {
  //res.send(`Hello ${req.user.displayName}`);
//};
//app.get('/auth/google', async (req, res) => {
 // await passport.authenticate('google', { scope: [ 'email', 'profile' ] })(req, res);
//});
//j'aurai utilisé cette fonction asynchrone 
//app.get('/auth/google/callback', async (req, res) => {
 // await passport.authenticate('google', {
   // successRedirect: '/protected',
   // failureRedirect: '/auth/google/failure'
  //})(req, res);
//});

app.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

//les routes*/

app.use('/register' , registerRoute);
app.use('/login' , loginRoute);
app.use('/profil', profilRoute);
app.use('/admin', gestionUser);
app.use('/ajoutAstuce', ajoutAstuce);
app.use('/listAstuce', listAstuce);
app.use('/consulterAstuce', consulterAstuce);


module.exports = app;//export de la variable "app" 





const Sequelize = require("sequelize");
const sequelize = new Sequelize(
     
        'progwebserveur', 
        'ania', 
        'ania@2002', 
        { 
    
            host: 'localhost', 
            dialect: 'mysql'
        }
    
    ); 

    sequelize.authenticate().then(() => { 
        console.log(('conection to databse OK')); 
    }).catch((error) => { 

        console.log('Connection to databse KO : ', error);
    });



    module.exports = sequelize;
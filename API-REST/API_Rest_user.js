const {DataTypes}  = require("sequelize");
const sequelize = require ("../config/config.db");

const user = sequelize.define('users', { 

    idUsers: { 
        type: DataTypes.INTEGER,  
        allowNull: false, 
        autoIncrement: true, //incrementation automatiques 
        primaryKey: true 
    
    }, 
    email: { 
        type: DataTypes.STRING(45), //sequelize dataype string for varchar
        allowNull: false,  
        primaryKey: true
    }, 
    pseudo: { 
        type: DataTypes.STRING(45),
        primaryKey: true 
    }, 
    name: { 
        type: DataTypes.STRING(45)

    }, 
    lastName: { 
        type: DataTypes.STRING(45)
          
    }, 
    password: { 
        type: DataTypes.STRING(45), 
        allowNull: false  
    },  
    isAdmin: { 
        type: DataTypes.TINYINT,  
        defaultValue: "0" //par défault 0  car droit spécifique
       
    }
}, 
{
    // évite la création automatiques des colonnes createdat et updatedat
    timestamps: false
    
});


module.exports = user;
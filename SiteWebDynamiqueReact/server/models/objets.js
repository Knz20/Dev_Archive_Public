const keys  = require('../keys/keys');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(keys.databaseName, keys.username, keys.password, {
    host: keys.host,
    dialect:'mysql', 
    logging: false
  });





sequelize.define('Objets', {  //création de la table "objets"
  //definition des attributs
  IdAstuces:{ //clé primaire
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    
  },
  nomObjet:{ 
    type: DataTypes.STRING(45),
    allowNull: false
  },

  imgUrlObjet:{
    
    type: DataTypes.STRING(225),
    allowNull: false
  },

  InformationObjet:{ 
    type: DataTypes.STRING(225),
    allowNull: false,
    
  },

  commentaire:{ 
    type: DataTypes.STRING(255),
    allowNull: false
  },

  username:{ 
    type: DataTypes.STRING(45),
    allowNull: false
  },

  approved:{
    
      type: DataTypes.TINYINT,
      allowNull: false
  
  }

  


});

sequelize.sync();

module.exports= sequelize;

const keys  = require('../keys/keys');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(keys.databaseName, keys.username, keys.password, {
    host: keys.host,
    dialect:'mysql', 
    logging: false
  });

 //S'authentifier
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.')) 
    .catch(error =>  console.error('Unable to connect to the database:', error));
    




sequelize.define('Users', {  //création de la table "Users"
  // definition des attributs
  IdUsers:{ //clé primaire
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    
  },
  email:{ 
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true

  },
  pseudo:{ 
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true
  },

  name:{ 
    type: DataTypes.STRING(45),
    allowNull: false
  },

  lastName:{ 
    type: DataTypes.STRING(45),
    allowNull: false
  },

  password:{ 
    type: DataTypes.STRING(255),
    allowNull: false
  },

  isAdmin:{ 
    type: DataTypes.TINYINT,
    allowNull: false
  },

  imgUrl:{
    
    type: DataTypes.STRING(225),
    allowNull: false
  }

});

sequelize.sync();

module.exports= sequelize;

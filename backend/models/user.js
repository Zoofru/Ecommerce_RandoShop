'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    verifyPassword(pass) {
      return bcrypt.compareSync(pass, this.password)
    }
  };
  user.init({
    username: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        len: [5, 15],
        notNull: true
      }
    },
    password: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        len: [8, 30]
      }
    },
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  user.addHook('afterValidate', async (user, options) => {
    const hashedPass = await bcrypt.hash(user.password, 10)
    user.password = hashedPass
  })
  return user;
};
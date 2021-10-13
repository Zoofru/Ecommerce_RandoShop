'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shoppingcart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  shoppingcart.init({
    userid: DataTypes.INTEGER,
    itemid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'shoppingcart',
  });
  return shoppingcart;
};
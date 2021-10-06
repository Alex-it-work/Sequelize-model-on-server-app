'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      model: { type: DataTypes.STRING, allowNull: false },
      brand: { type: DataTypes.STRING, allowNull: false },
      manufactureYear: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { is: /^[0-9]{4}$/ },
      },
      ram: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { is: /^\d+$/ },
      },
      cpu: { type: DataTypes.STRING, allowNull: false },
      diagonal: { type: DataTypes.FLOAT, allowNull: false },
      nfc: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};

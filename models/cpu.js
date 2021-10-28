'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CPU extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      CPU.hasMany(models.Phone, {
        foreignKey: 'CPU_id',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      });
    }
  }
  CPU.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      AnTuTu: { type: DataTypes.INTEGER },
      Geekbench: { type: DataTypes.INTEGER },
      kernels: { type: DataTypes.INTEGER },
      MHz: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: 'CPU',
    }
  );
  return CPU;
};

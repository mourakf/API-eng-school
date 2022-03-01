'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      People.hasMany(models.Enrollments, {
        foreignKey: "teacher_id"
      })
      People.hasMany(models.Classes, {
        foreignKey: "student_id"
      })

      People.belongsTo(models.Classes, {
        foreignKey: "class_id"
      })
      People.belongsTo(models.Enrollments, {
        foreignKey: "enroll_id"
      })
    }

  }
  People.init({
    names: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    roles: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};
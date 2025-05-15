const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Users = sequelize.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userpassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isadmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Users;

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Comment",
  }
);

module.exports = Comment;

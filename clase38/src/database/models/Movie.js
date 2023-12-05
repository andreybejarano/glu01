const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL(3, 1).UNSIGNED,
      allowNull: false
    },
    awards: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    length: {
      type: DataTypes.INTEGER(10).UNSIGNED
    },
    genre_id: {
      type: DataTypes.INTEGER(10).UNSIGNED
    }
  }, {
    sequelize,
    modelName: 'Movie',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'movies'
  });
  return Movie;
};
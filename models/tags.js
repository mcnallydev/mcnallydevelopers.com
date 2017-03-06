'use strict';
module.exports = function (sequelize, DataTypes) {
  var Tags = sequelize.define('tags', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    classMethods: {
      associate: function (models) {
        Tags.hasMany(models.posts_tags);
        Tags.belongsToMany(models.posts, {through: 'posts_tags'});
      }
    },
    tableName: 'tags'
  });
  return Tags;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define('posts', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    markdown: DataTypes.TEXT,
    image: DataTypes.TEXT,
    status: DataTypes.TEXT,
    published_at: DataTypes.DATE,
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
      associate: function(models) {
        Posts.hasMany(models.posts_tags);
        Posts.belongsToMany(models.tags, {through: 'posts_tags'});
      }
    },
    tableName: 'posts'
  });
  return Posts;
};
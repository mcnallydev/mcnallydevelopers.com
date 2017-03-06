'use strict';
module.exports = function(sequelize, DataTypes) {
  var PostsTags = sequelize.define('posts_tags', {
    postId: {
      type: DataTypes.INTEGER,
      field: 'post_id'
    },
    tagId: {
      type: DataTypes.INTEGER,
      field: 'tag_id'
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        PostsTags.belongsTo(models.posts);
        PostsTags.belongsTo(models.tags);
        // associations can be defined here
      }
    },
    tableName: 'posts_tags'
  });
  return PostsTags;
};
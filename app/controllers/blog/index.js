/*jshint esversion: 6 */
"use strict";

/**
 *  This section work with https://github.com/mcnallydev/blog.mcnallydevelopers.com
 */

// Fixme: Resolve the middleware import automatically
const dataMiddleware = require('../../middleware/data');
const models = require('../../../models');

module.exports = function (router) {

  // blog home
  router.get('/', dataMiddleware, (req, res) => {
    res.locals.app.navigation = '/blog';

    let Posts = models.posts;
    let Tags = models.tags;

    // find posts
    Posts.findAll({
      where: {
        status: 'published'
      },
      include: [
        {
          model: Tags
        }
      ],
      limit: 12,
      order: [
        [
          'createdAt',
          'DESC'
        ]
      ]
    }).then(function (posts) {
      res.render('blog/index', {
        posts: posts
      });
    });
  });

  // tag list
  router.get('/:tag_slug', dataMiddleware, (req, res) => {
    res.locals.app.navigation = '/blog';
    models.tags.findOne({
      where: {
        slug: req.params.tag_slug
      }
    }).then(function (tag) {
      models.posts.findAll({
        include: [
          {
            model: models.tags,
            where: {
              id: tag.id
            }
          }
        ],
        limit: 12,
        order: [
          [
            'createdAt',
            'DESC'
          ]
        ]
      }).then(function (posts) {
        res.render('blog/tag', {
          tag: tag,
          posts: posts
        });
      });
    });
  });

  // post
  router.get('/:tag_slug/:post_slug', dataMiddleware, (req, res) => {
    res.locals.app.navigation = '/blog';
    models.posts.findOne({
      include: [
        {
          model: models.tags
        }
      ],
      where: {
        slug: req.params.post_slug
      }
    }).then(function (post) {
      res.render('blog/post', {
        post: post
      });
    });
  });
};

const {
  Tag
} = require('../models');

const tagsController = {

  renderTagsPage: async (req, res) => {
    const tags = await Tag.findAll({
      include : ['quizzes']
    });

  // console.log(tags);

    res.render("tags", {tags});
  }
};


module.exports = tagsController;
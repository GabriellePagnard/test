const { Quiz } = require('../models');

const mainController = {
  async renderHomePage(req, res) {

    const quizzes = await Quiz.findAll({
      include:["author", "tags"]
    });


    res.render("home", {quizzes});
  },

};

module.exports = mainController;

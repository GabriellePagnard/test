const { Quiz } = require('../models');

const quizzController = {
  async renderQuizPage(req, res) {

    const quizzId = req.params.id;

    const quizz = await Quiz.findOne({
      where: { id : quizzId },
      include: [
        { association: 'author' },
        { association: 'questions', include: ['propositions', 'level'] },
        { association: 'tags' }
      ]
    });

    const date = quizz.created_at;
    const options = {weekday: "long", day: "2-digit", month: "long", year: "numeric"};
    const dateFormatee = date.toLocaleDateString("fr-FR", options);
    console.log(dateFormatee);

    res.render("quiz", {quizz, dateFormatee: dateFormatee});
}

};

module.exports = quizzController;

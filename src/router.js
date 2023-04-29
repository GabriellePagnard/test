const { Router } = require("express");
const mainController = require("./controllers/mainController");
const quizzController = require("./controllers/quizzController");
const tagsController = require("./controllers/tagsController");



const router = Router();


router.get("/", mainController.renderHomePage);
router.get("/quizz/:id", quizzController.renderQuizPage);
router.get("/tags", tagsController.renderTagsPage);
router.get("/tags/:id", quizzController.renderQuizPage);
//router.get("/signup", signUpController.rendersignUpPage);
//router.get("/login", loginController.renderloginPage);


module.exports = router;

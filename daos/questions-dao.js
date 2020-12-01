const questionsModel = require('../models/questions/questions-models.js')
const quizzesModel = require('../models/quizzes/quizzes-models.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
    .populate("questions").exec()
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }
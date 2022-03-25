const Question = require('./QuestionSchema');

exports.getQuestion = async (req, res) => {
  const question = await Question.findById(req.params.id);
  res.json(question);
};
exports.createQuestion = async (req, res) => {
  const question = new Question({ ...req.body });
  await question.save();
  res.json(question);
};

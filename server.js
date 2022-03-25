const express = require('express');
const connectDB = require('./db');
const { getQuestion, createQuestion } = require('./QuestionController');
const app = express();
require('dotenv').config();
connectDB();

app.use(express.json({ extende: false }));
app.get('/:id', getQuestion);
app.post('/', createQuestion);
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

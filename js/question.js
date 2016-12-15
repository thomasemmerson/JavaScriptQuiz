//object literal containing questions
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

//checks if user's answer is correct
Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};
//Create questions
var questions = [
  new Question("What is 1 plus 2?", ["1", "3"], "3"),
  new Question("What is 2 plus 2?", ["4", "6"], "4"),
  new Question("What is 1 plus 7?", ["5", "8"], "8")
  
];

//create quiz
var quiz = new Quiz(questions);

//display quiz
QuizUI.displayNext();
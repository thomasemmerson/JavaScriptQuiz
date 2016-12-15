var QuizUI = {
  
     displayNext: function () {
          if (quiz.hasEnded()) {
               this.displayScore(); 
          }
          else {
               this.displayQuestion();
               this.displayChoices();
               this.displayProgress();
               this.displayCurrentScore();
          }
     },
  
     displayQuestion: function() {
          this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
     },
  
     displayChoices: function() {
          var choices = quiz.getCurrentQuestion().choices;
          for (var i = 0; i < choices.length; i++) {
               this.populateIdWithHTML("choice" + i, choices[i]);
               this.guessHandler("guess" + i, choices[i]);
          }
     },
    
     displayScore: function() {
          var gameOverHTML = "<h1>Game Over</h1>";
          gameOverHTML += "<h2> Your total score is: " + quiz.score + "</h2>";
          this.populateIdWithHTML("quiz", gameOverHTML);
     },
      
     populateIdWithHTML: function(id, text) {
          var element = document.getElementById(id);
          element.innerHTML = text;
     },
      
     guessHandler: function(id, guess) {
          var button = document.getElementById(id);
          button.onclick = function() {
               quiz.guess(guess);
               QuizUI.displayNext();
          }
     },

     displayProgress: function() {
          var currentQuestionNumber = quiz.currentQuestionIndex + 1;
          this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
     },
     
     displayCurrentScore: function() {
          var currentScoreCalc = "<p>Current score: " + quiz.score + "</p>";
          this.populateIdWithHTML("currentScore", currentScoreCalc);
     }
}
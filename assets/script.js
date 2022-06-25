

var questions = [
    {
        text:"Javascript is an _______ language?",
        options:["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        answer:"Object-Oriented"
    },

    {
        text:"Which of the following keywords is used to define a variable in Javascript?",
        options:["var", "let", "Both A and B", "None of the above"],
        answer:"Both A and B"
    },

    {
        text:"Which of the following methods is used to access HTML elements using Javascript?",
        options:["getElementbyId()", "getElementsByClassName()", "Both A and B", "None of the above"],
        answer:"Both A and B"
    },

    {
        text:"Upon encountering empty statements, what does the Javascript Interpreter do?",
        options:["Throws an error", "Ignores the statements", "Gives a warning", "None of the above"],
        answer:"Ignores the statments"
    },
]



// setting variables for game interaction
var playerName="";
var questionsPosition= 0;
var timeRemaining = 60;
var score= 0;
var time = document.getElementById("timer");
var timeContext = document.getElementById("timetogo");
var timeLoop = document.getElementById("timeloop");
var quiz = document.getElementById("quiz");
var question = document.getElementById("questions");
var questionInfo = document.getElementById("title");


//setting time and starting countdown
var startTimer = function() {
    timeRemaining=setInterval(setTimer, 650)

}

// begin quiz/set question positions
var startQuestions = function() {
    if (questionsPosition < questions.length) {
        

    for ( var i=0; i < questions.length; i++ ){
        var answer = document.createElement("button");
        answer.textContent = questions[questionsPosition].options[i];
        quiz.appendChild(answer);
        answer.setAttribute("value", questions[questionsPosition].options[i]);
        answer.addEventListener("click", function(){
            confirmAnswer(answer.textContent)
        })
    }

    }
}





//check answers
var confirmAnswer = function(){
    var answer = event.target.value;
    if (answer === questions[questionsPosition].answer){
        window.alert("Congratulations! That is correct!");
    }
    else {
        window.alert("Sorry. Maybe next time.");
    }

    questionsPosition++;
    startQuestions();
}


// end quiz
var stopQuiz = function() {

}


//parse data once game complete. Add additional playing features
var setScore = function() {

}


startQuestions();
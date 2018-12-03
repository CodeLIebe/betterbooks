// The current question number
var currentQuestionNumber = 0;
// the number of right answers the user answered
var numberOfRightAnswers = 0;
// The current question presented to the user
var currentQuestion;
// This property holds a json of all possible questions
var questions = [

    {
        "id": "1",
        "question": "Was ist schwerer? Ein Kilo Gold oder ein Kilo Federn?",
        "answers": {
            "a": "Gold",
            "b": "Federn",
            "c": "Haha, sehr lustig!"

        },
        "rightAnswer": "c"
    },
    {
        "id": "2",
        "question": "Wie viele Erbsen passen in ein leeres Glas?",
        "answers": {
            "a": "500",
            "b": "Keine, sonst ist es ja nicht mehr leer",
            "c": "200"

        },
        "rightAnswer": "b"
    },
    {
        "id": "3",
        "question": "In welchem Beutel kann man nichts tragen?",
        "answers": {
            "a": "Geldbeutel",
            "b": "Turnbeutel",
            "c": "Windbeutel.. Witzig!"

        },
        "rightAnswer": "c"
    }
]

// This method is called if the next question of the quiz should be provided
function nextQuestion() {

    // If all questions are completed hide end the quiz
    if (currentQuestionNumber == questions.length) {
        endQuiz();
        return;
    }
    // Otherwise update current question
    currentQuestion = questions[currentQuestionNumber];
    // Inject all properties to UI
    $("#questionNumber").text(currentQuestionNumber + 1);
    $("#questionText").text(currentQuestion.question);
    $("#answerA").text(currentQuestion.answers.a);
    $("#answerB").text(currentQuestion.answers.b);
    $("#answerC").text(currentQuestion.answers.c);


}

// This method is called if a user submits his answer. The value is the answer (a,b,c)
function userAnswered(value) {
    // Check if question was answered correctly
    if (value === currentQuestion.rightAnswer) {
        // Increase number of right answers
        numberOfRightAnswers += 1;
    }
    // Increase current question
    currentQuestionNumber += 1;
    // Present next question
    nextQuestion();
}

// This method is called if user starts the quiz
function startQuiz() {
    // hide the quiz div and present the question
    $(".quizStart").fadeOut(function () {
        nextQuestion();
        $("#question").show();
    });
}
// This method is called if user completed the quiz
function endQuiz() {
    // hide the questions div and present the result page
    $("#question").fadeOut(function () {
        // Inject total number of correct answers
        $("#numberOfRightAnswers").text(numberOfRightAnswers);
        // Show result page
        $(".quizEnd").show();
    });
}

function showQuiz() {
    // hide the quiz div and present the question
    document.getElementById("StartPage").innerHTML = "<quiz-container/>";
}





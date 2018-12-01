
// This action is called if user taps the start button
$("#start_btn").click(function() {
    startQuiz();
});

// This action is called if the user taps answer a button
$("#answerButtonA").click(function() {
    userAnswered("a");
});

// This action is called if the user taps answer b button
$("#answerButtonB").click(function() {
    userAnswered("b");
});

// This action is called if the user taps answer c button
$("#answerButtonC").click(function() {
    userAnswered("c");
});

// This action is called if the user taps the close quiz button
$("#end_btn").click(function() {
});
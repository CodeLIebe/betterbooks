class QuizContainer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `

    <main class="container-fluid fixed-top bg-light">
                <div id="startScreen" class="jumbotron quizStart">
                 <h2>Herzlich Willkommen!</h2>
                 <p>Drücken Sie "Jetzt starten" um das Quiz zu beginnen</p>
                 <p><button id="start_btn" class="btn btn-primary btn-block" onclick="startQuiz()">Jetzt starten</button></p>
                </div>
                <div id="endScreen" class="jumbotron quizEnd" style="display: none">
                 <h2>Quiz Vorbei!</h2>
                 <p>Dein Punktestand ist: <span id="numberOfRightAnswers">0</span> von 3</p>
                 <p><button id="end_btn" class="btn btn-primary btn-block">Schließen</button></p>
                </div>
                <div id="question" class="jumbotron quizRunning" style="display: none">
                 <h2>Frage <span id="questionNumber">0</span></h2>
                 <p id="questionText">Was ist schwerer? Ein Kilo Gold oder ein Kilo Federn?</p>
                 <p><button id="answerButtonA" class="btn btn-primary btn-block" onclick="userAnswered('a')">1. <span id="answerA">Gold</span></button></p>
                 <p><button id="answerButtonB" class="btn btn-primary btn-block" onclick="userAnswered('b')">2. <span id="answerB">Federn</span></button></p>
                 <p><button id="answerButtonC" class="btn btn-primary btn-block" onclick="userAnswered('c')">3. <span id="answerC">Haha, sehr lustig!</span></button></p>
                </div>
            </main>
            `;
    }

}
customElements.define("quiz-container", QuizContainer)
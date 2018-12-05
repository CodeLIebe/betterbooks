class QuizContainer extends HTMLElement {
    connectedCallback(){
	//class .container replaced by bootstrap classes: w-50 py-3 bg-light
        this.innerHTML = `
		<div id="modal-wrapper" class="modal">
          <div id="startScreen" class="modal-content w-50 py-3 bg-light text-center align-middle">
					<div class="py-5">
						<h2>Herzlich Willkommen!</h2>
					   <p class="pt-5">Drücken Sie "Jetzt starten", um das Quiz zu beginnen</p>
					   <p><button id="start_btn" class="btn btn-primary mt-5" onclick="startQuiz()">Jetzt starten</button></p>
				   </div>
          </div>
          <div id="endScreen" class="modal-content w-50 py-3 bg-light text-center" style="display: none">
					<div class="py-5">
					   <h2 id="lost" style="display: none">Sorry! Leider verloren..</h2>
					   <h2 id="won" style="display: none">Yey! Du hast gewonnen!</h2>
					   <p><button id="end_btn" class="btn btn-primary mt-5" onclick="hideQuiz()">Schließen</button></p>
				   </div>
               </div>
               <div id="question" class="modal-content w-50 py-3 bg-light text-center" style="display: none">
                   <p class="display-6">Frage <span id="questionNumber">0</span></p>
                   <h2 id="questionText">Was ist schwerer? Ein Kilo Gold oder ein Kilo Federn?</h2>
                   <p><button id="answerButtonA" class="btn btn-primary " onclick="userAnswered('a')">1. <span id="answerA">Gold</span></button></p>
                   <p><button id="answerButtonB" class="btn btn-primary " onclick="userAnswered('b')">2. <span id="answerB">Federn</span></button></p>
                   <p><button id="answerButtonC" class="btn btn-primary " onclick="userAnswered('c')">3. <span id="answerC">Haha, sehr lustig!</span></button></p>
               </div>
		</div>

            `;
    }

}
customElements.define("quiz-container", QuizContainer)

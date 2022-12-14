(function() {
	const myQuestions = [
	  {
		question: "Mikä on Suomen kansalliseläin",
		answers: {
		  a: "Karhu",
		  b: "Poro",
		  c: "Kameli"
		},
		correctAnswer: "a"
	  },
	  {
		question: "Mikä on isoin näistä eläimistä",
		answers: {
		  a: "Siili",
		  b: "Piisami",
		  c: "Susi"
		},
		correctAnswer: "c"
	  },
	  {
		question: "Mikä on Suomen kansalliskukka",
		answers: {
		  a: "Ruusu",
		  b: "Nokkonen",
		  c: "Auringonkukka",
		  d: "Kielo"
		},
		correctAnswer: "d"
	  },
      {
		question: "Minkä värinen on kirahvin kieli",
		answers: {
		  a: "Valkoinen",
		  b: "Keltainen",
		  c: "Neonvihreä",
		  d: "Punasininen"
		},
		correctAnswer: "d"
	  },
      {
		question: "Milloin Kvagga kuoli sukupuuttoon",
		answers: {
		  a: "2002",
		  b: "1883",
		  c: "2022",
		  d: "1917"
		},
		correctAnswer: "b"
	  },
      
	];
  
	function buildQuiz() {
	  const output = [];
  
	  // jokaiselle kysymykselle
	  myQuestions.forEach((currentQuestion, questionNumber) => {
		// kysymys vaihdoehdot
		const answers = [];

		for (letter in currentQuestion.answers) {
		  answers.push(
			`<label>
			   <input type="radio" name="question${questionNumber}" value="${letter}">
				${letter} :
				${currentQuestion.answers[letter]}
			 </label>`
		  );
		}
  
		output.push(
		  `<div class="slide">
			 <div class="question"> ${currentQuestion.question} </div>
			 <div class="answers"> ${answers.join("")} </div>
		   </div>`
		);
	  });
  
	  quizContainer.innerHTML = output.join("");
	}
  
	function showResults() {
	  // vastaukset
	  const answerContainers = quizContainer.querySelectorAll(".answers");
  
	  // vastaukset
	  let numCorrect = 0;
	  myQuestions.forEach((currentQuestion, questionNumber) => {
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
		// jos oikein
		if (userAnswer === currentQuestion.correctAnswer) {
		  // add to the number of correct answers
		  numCorrect++;
  
		  // vastaukset muuttaa väriä
		  answerContainers[questionNumber].style.color = "lightgreen";
		} else {
		  // jos väärin tai tyhjä muuttaa väriä kans
		  answerContainers[questionNumber].style.color = "red";
		}
	  });
  
	  // oikeiden määrä kaikista
	  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	}
  
	const quizContainer = document.getElementById("quiz");
	const resultsContainer = document.getElementById("results");
	const submitButton = document.getElementById("submit");
  
	// lataa kysymykset
	buildQuiz();
  
	// submit submittaa vastausket
	submitButton.addEventListener("click", showResults);
  })();
  
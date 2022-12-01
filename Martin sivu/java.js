(function() {
	const myQuestions = [
	  {
		question: "Question number 1: What is your response to: Nice to meet you!",
		answers: {
		  a: "Okay.",
		  b: "Bye!",
		  c: "You too!"
		},
		correctAnswer: "c"
	  },
	  {
		question: "Question number 2: How do you say: Kello on vartin yli yhdeksän.",
		answers: {
		  a: "It's nine o'clock.",
		  b: "It's half past ten.",
		  c: "It's quarter past nine."
		},
		correctAnswer: "c"
	  },
	  {
		question: "Question number 3: What is the meaning of the word mother?",
		answers: {
		  a: "Äiti",
		  b: "Iskä",
		  c: "Mummo",
		  d: "Veli"
		},
		correctAnswer: "a"
	  },
      {
		question: "Question number 4: How do you say: Minulla on kylmä?",
		answers: {
		  a: "Im thirsty.",
		  b: "Im ten years old.",
		  c: "Im freezing"
		},
		correctAnswer: "c"
	  },
      {
		question: "Question number 5: What you do not sit on?",
		answers: {
		  a: "Table",
		  b: "Chair",
		  c: "Sofa"
		},
		correctAnswer: "a"
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
	  // vastausten koonti
	  const answerContainers = quizContainer.querySelectorAll(".answers");
  
	  // vastaukset
	  let numCorrect = 0;
	  myQuestions.forEach((currentQuestion, questionNumber) => {
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
		// jos vastaus on oikein
		if (userAnswer === currentQuestion.correctAnswer) {
		  // lisätään oikea vastaus lopputulokseen
		  numCorrect++;
  
		  // oikeat vastaukset näkyy vihreänä
		  answerContainers[questionNumber].style.color = "lightgreen";
		} else {
		  // jos vastaus on väärä tai ei ole vastattu antaa punaisen
		  answerContainers[questionNumber].style.color = "red";
		}
	  });
  
	  // lasketaan oikeiden määrä
	  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	}
  
	const quizContainer = document.getElementById("quiz");
	const resultsContainer = document.getElementById("results");
	const submitButton = document.getElementById("submit");
  
	// kysymykset näkyviin heti sivun ladattua
	buildQuiz();
  
	// valmis nappula lähettää vastauksen
	submitButton.addEventListener("click", showResults);
  })();
  
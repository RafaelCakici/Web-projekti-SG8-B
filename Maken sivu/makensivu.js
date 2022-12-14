(function() {
	const myQuestions = [
	  {
		question: "Kuka oli Urho Kaleva Kekkonen?",
		answers: {
		  a: "Lääkäri",
		  b: "Presidentti",
		  c: "Astronautti"
		},
		correctAnswer: "b"
	  },
	  {
		question: "Mihin Egyptiläisiä pyramideja käytettiin?",
		answers: {
		  a: "Faaraoiden hautoina",
		  b: "Museoina",
		  c: "Koteina"
		},
		correctAnswer: "a"
	  },
	  {
		question: "Minä vuonna Suomessa käytiin talvisota?",
		answers: {
		  a: "1925-1930",
		  b: "1935-1938",
		  c: "1939-1940",
		  d: "1943-1945"
		},
		correctAnswer: "c"
	  },
      {
		question: "Minä vuonna Suomi voitti Euroviisut?",
		answers: {
		  a: "2006",
		  b: "2003",
		  c: "2008",
		  d: "2007"
		},
		correctAnswer: "a"
	  },
      {
		question: "It is what it is?",
		answers: {
		  a: "It is",
		  b: "It is",
		  c: "It is",
		  d: "It is"
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
	  // vastauksen koonti
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
  
		  // vastaukset vihreäks
		  answerContainers[questionNumber].style.color = "lightgreen";
		} else {
		  // jos väärin tai tyhjä, punainen
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
  
	// submit lähettää vastaukset
	submitButton.addEventListener("click", showResults);
  })();
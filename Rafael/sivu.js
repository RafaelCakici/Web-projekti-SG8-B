(function() {
	const myQuestions = [
	  {
		question: "what is 1 + 1?",
		answers: {
		  a: "11",
		  b: "3",
		  c: "2"
		},
		correctAnswer: "c"
	  },
	  {
		question: "What is 10/2?",
		answers: {
		  a: "4",
		  b: "10",
		  c: "5"
		},
		correctAnswer: "c"
	  },
	  {
		question: "How many sides does a triangle have?",
		answers: {
		  a: "Zero",
		  b: "One",
		  c: "Two",
		  d: "Three"
		},
		correctAnswer: "d"
	  },
      {
		question: "If Joe has two apples and gets five more, how many apples does Joe have??",
		answers: {
		  a: "6",
		  b: "3",
		  c: "8",
		  d: "7"
		},
		correctAnswer: "d"
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
  
		// and for each available answer...
		for (letter in currentQuestion.answers) {
		  // ...add an HTML radio button
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
  
	function showSlide(n) {
	  slides[currentSlide].classList.remove("active-slide");
	  slides[n].classList.add("active-slide");
	  currentSlide = n;
	  
	  if (currentSlide === 0) {
		previousButton.style.display = "none";
	  } else {
		previousButton.style.display = "inline-block";
	  }
	  
	  if (currentSlide === slides.length - 1) {
		nextButton.style.display = "none";
		submitButton.style.display = "inline-block";
	  } else {
		nextButton.style.display = "inline-block";
		submitButton.style.display = "none";
	  }
	}
  
	function showNextSlide() {
	  showSlide(currentSlide + 1);
	}
  
	function showPreviousSlide() {
	  showSlide(currentSlide - 1);
	}
  
	const quizContainer = document.getElementById("quiz");
	const resultsContainer = document.getElementById("results");
	const submitButton = document.getElementById("submit");
  
	// lataa kysymykset
	buildQuiz();
  
	const previousButton = document.getElementById("previous");
	const nextButton = document.getElementById("next");
	const slides = document.querySelectorAll(".slide");
	let currentSlide = 0;
  
	showSlide(0);
  
	// submit lähettää vastaukset
	submitButton.addEventListener("click", showResults);
	previousButton.addEventListener("click", showPreviousSlide);
	nextButton.addEventListener("click", showNextSlide);
  })();
  
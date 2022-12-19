(function() {
	const Questions = [
	  {
		question: "Paljon on 3 + 3?",
		answers: {
		  a: "33",
		  b: "9",
		  c: "6"
		},
		correctAnswer: "c"
	  },
	  {
		question: "Paljon on 12 - 4?",
		answers: {
		  a: "8",
		  b: "10",
		  c: "7"
		},
		correctAnswer: "a"
	  },
	  {
		question: "Monta kulmaa on kolmiolla?",
		answers: {
		  a: "Yksi",
		  b: "Viisi",
		  c: "Kolme",
		  d: "Neljä"
		},
		correctAnswer: "c"
	  },
      {
		question: "Matilla on kaksi omenaa ja saa vielä kuusi lisää. Kuinka monta omenaa Matilla on?",
		answers: {
		  a: "6",
		  b: "3",
		  c: "8",
		  d: "7"
		},
		correctAnswer: "c"
	  },
      {
		question: "Paljon on 24 ÷ 6? ",
		answers: {
		  a: "4",
		  b: "6",
		  c: "10",
		  d: "18"
		},
		correctAnswer: "a"
	  },
      
	];
  
	function buildQuiz() {
	  const output = [];
  
	  // jokaiselle kysymykselle
	  Questions.forEach((Question, questionNumber) => {
		//
		const answers = [];
		// lataa vastaukset
		for (letter in Question.answers) {
		  answers.push(
			`<label>
			   <input type="radio" name="question${questionNumber}" value="${letter}">
				${letter} :
				${Question.answers[letter]}
			 </label>`
		  );
		}
  
		output.push(
		  `<div class="">
			 <div class="question"> ${Question.question} </div>
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
	  Questions.forEach((Question, questionNumber) => {
		//valittu vastaus
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
		// jos oikein
		if (userAnswer === Question.correctAnswer) {
		  // lisää oikeiden määrää
		  numCorrect++;
		  // vastaukset vihreäks
		  answerContainers[questionNumber].style.color = "blue";
		  // vastaukset vihreäks
		} else {
		  // jos väärin tai tyhjä, punainen
		  answerContainers[questionNumber].style.color = "red";
		}
	  });
	  // oikeiden määrä kaikista
	  resultsContainer.innerHTML = `${numCorrect} out of ${Questions.length}`;
	}
  
	const quizContainer = document.getElementById("quiz");
	const resultsContainer = document.getElementById("results");
	const submitButton = document.getElementById("submit");
  
	// lataa kysymykset
	buildQuiz();
  
	// submit lähettää vastaukset
	submitButton.onclick = function(){
        showResults(Questions, quizContainer, resultsContainer);
    }
  })();
  
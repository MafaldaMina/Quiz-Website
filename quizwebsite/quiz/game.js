// An array with questions and answers
// The answers are shuffled before showing
// The answer is saved in the answered button after clicking 'Enviar'
let questions = [
	{
		question: 'What was the name of the first king of Portugal?',
		answers: [
			{ answer: 'Dom Afonso Henriques', correct: true },
			{ answer: 'Dom Dinis', correct: false },
			{ answer: 'Dom Henrique', correct: false },
			{ answer: 'Dom Afonso', correct: false }
		],
		answered: false
	}, {
		question: 'What is the approximate value of π (pi)?',
		answers: [
			{ answer: '6,28', correct: false },
			{ answer: '2,14', correct: false },
			{ answer: '1,57', correct: false },
			{ answer: '3,14', correct: true }
		],
		answered: false
	}, {
		question: 'What is the chemical formula of carbon dioxide?',
		answers: [
			{ answer: 'O2', correct: false },
			{ answer: 'H2O', correct: false },
			{ answer: 'CO2', correct: true },
			{ answer: 'C2O', correct: false }
		],
		answered: false
	}, {
		question: 'Where does the Tejo (Tagus) River born?',
		answers: [
			{ answer: 'Serra da Estrela', correct: false },
			{ answer: 'Serra de Albarracín', correct: true },
			{ answer: 'Serras de Aire e Candeeiros', correct: false },
			{ answer: 'Serra de Mariola', correct: false }
		],
		answered: false
	}, {
		question: 'Who wrote the famous novel "Os Lusíadas"?',
		answers: [
			{ answer: 'Eça de Queirós', correct: false },
			{ answer: 'Gil Vicente', correct: false },
			{ answer: 'José Saramago', correct: false },
			{ answer: 'Luís de Camões', correct: true }
		],
		answered: false
	}, {
		question: 'What is the capital of Slovakia?',
		answers: [
			{ answer: 'Stockholm', correct: false },
			{ answer: 'Ljubljana', correct: false },
			{ answer: 'Bratislava', correct: true },
			{ answer: 'Copenhagen', correct: false }
		],
		answered: false
	}, {
		question: 'How many sides has an hexagon?',
		answers: [
			{ answer: 'Four', correct: false },
			{ answer: 'Six', correct: true },
			{ answer: 'Five', correct: false },
			{ answer: 'Seven', correct: false }
		],
		answered: false
	}, {
		question: 'In which year did Portugal win the Euro?',
		answers: [
			{ answer: '2016', correct: true },
			{ answer: '2007', correct: false },
			{ answer: '2004', correct: false },
			{ answer: '2012', correct: false }
		],
		answered: false
	}, {
		question: 'In which World War did Portugal participate?',
		answers: [
			{ answer: 'None', correct: false },
			{ answer: 'Second', correct: false },
			{ answer: 'First', correct: true },
			{ answer: 'Both', correct: false }
		],
		answered: false

	}, {
		question: 'What is the name of the pigment that gives plants their green color?',
		answers: [
			{ answer: 'chlorophyte', correct: false },
			{ answer: 'leaf pigments', correct: false },
			{ answer: 'green pigments', correct: false },
			{ answer: 'chlorophyll', correct: true }
		],
		answered: false
	}, {
		question: 'x+√(16)+4^2=42, What is the value of x/2?',
		answers: [
			{ answer: '22', correct: false },
			{ answer: '62', correct: false },
			{ answer: '15', correct: false },
			{ answer: '11', correct: true }
		],
		answered: false
	}, {
		question: 'What did Shakespeare not write?',
		answers: [
			{ answer: 'Hamlet', correct: false },
			{ answer: 'Romeo and Juliet', correct: false },
			{ answer: 'Pride and Prejudice', correct: true },
			{ answer: 'Macbeth', correct: false }
		],
		answered: false
	}, {
		question: 'How many islands has Azores archipelago?',
		answers: [
			{ answer: 'Nine', correct: true },
			{ answer: 'Seven', correct: false },
			{ answer: 'Eight', correct: false },
			{ answer: 'Ten', correct: false }
		],
		answered: false
	}, {

		question: 'Which of these animals is not a mammal?',
		answers: [
			{ answer: 'Shark', correct: true },
			{ answer: 'Whale', correct: false },
			{ answer: 'Dolphin', correct: false },
			{ answer: 'Orca', correct: false }
		],
		answered: false
	}, {
		question: 'Which fruit is typical from Madeira?',
		answers: [
			{ answer: 'Peach', correct: false },
			{ answer: 'Banana', correct: true },
			{ answer: 'Coconut', correct: false },
			{ answer: 'Watermelon', correct: false }
		],
		answered: false
	}, {
		question: 'When did the famous earthquake occur, in Lisbon?',
		answers: [
			{ answer: '1715', correct: false },
			{ answer: '1855', correct: false },
			{ answer: '1747', correct: false },
			{ answer: '1755', correct: true }
		],
		answered: false
	}, {
		question: 'Which of these is typical in portuguese pastry?',
		answers: [
			{ answer: 'Brigadeiro', correct: false },
			{ answer: 'Macarons', correct: false },
			{ answer: 'Pastel de nata', correct: true },
			{ answer: 'Éclair', correct: false }
		],
		answered: false
	}, {
		question: 'Which of these brands is portuguese?',
		answers: [
			{ answer: 'Zara', correct: false },
			{ answer: 'Mike Davis', correct: true },
			{ answer: 'Levis', correct: false },
			{ answer: 'Hurley', correct: false }
		],
		answered: false
	}, {
		question: 'Which of these is a non-fossil fuel?',
		answers: [
			{ answer: 'Hydrogen', correct: true },
			{ answer: 'Natural gas', correct: false },
			{ answer: 'Petroleum', correct: false },
			{ answer: 'Coal', correct: false }
		],
		answered: false
	}, {
		question: 'Which of these animals can change the color of its skin?',
		answers: [
			{ answer: 'Iguana', correct: false },
			{ answer: 'Snake', correct: false },
			{ answer: 'Chameleon', correct: true },
			{ answer: 'Salamander', correct: false }
		],
		answered: false
	}];

let current_question = -1; // Start before questions

// Fisher-Yates (Knuth) Shuffle
// This shuffles an array and returns it
let shuffle = function (array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

// Calculates the score by checking if the answered is correct
let calculateScore = function () {
	let correct = 0;
	for (let i = 0; i < questions.length; i++) {
		if (questions[i].answers[questions[i].answered].correct) {
			correct++;
		}
	}
	return { correct: correct, total: questions.length };
}

// Start the questions, so hide the start screen
let startQuestions = function () {
	console.log('startQuestions')
	$('.startScreen').hide()
	current_question = -1;
	nextQuestion()
}

// No more questions, show the score
let endQuestions = function () {
	console.log('endQuestions')
	let score = calculateScore()
	$('#score').text(score.correct + '/' + score.total)
	$('.endQuestions').removeClass('hide')
}

// Prepare next question and display it
let nextQuestion = function () {
	console.log('nextQuestion')
	$('.answer').removeClass('wrong').removeClass('correct').addClass('hide');
	$('#nextButton').hide();
	$('.question').removeClass('hide');
	current_question++;
	if (current_question >= questions.length) {
		$('.question').addClass('hide')
		endQuestions()
		return
	}

	// Shuffle the answers of the current question
	questions[current_question].answers = shuffle(questions[current_question].answers)
	let question = '<h1 style="margin-bottom: 50px;">' + questions[current_question].question + '</h1 >';
	for (let i = 0; i < questions[current_question].answers.length; i++) {
		question += '<input id="a' + i + '" type="radio" name="question" order="' + i + '">';
		question += '<label id="a' + i + 'Label" for="a' + i + '">' + questions[current_question].answers[i].answer + '</label><br>';
	}

	$('.questionArea').empty().append(question)
	$('#answerButton').show()
	}

// Get the response from the buttons
let findResponse = function (buttons) {
	for (let i = 0; i < buttons.length; i++) {
		if (buttons[i].checked) {
			return buttons[i].getAttribute('order')
		}
	}
	return -1;
}

// Check the answer
let answerQuestion = function () {
	console.log('answerQuestion')
	let radioButtons = $('input:radio');
	let answered = findResponse(radioButtons)

	if (answered < 0) {
		$('#no_answer').removeClass('hide');
		return;
	}
	$('#no_answer').addClass('hide');
	$('#answerButton').hide();

	// Store the answer in answered
	questions[current_question].answered = answered;
	let correct = questions[current_question].answers[answered].correct;
	answer = "certo!"
	if (correct) {
		document.getElementById("container").style.backgroundColor = "#3eda38a8";
	} else {
		document.getElementById("container").style.backgroundColor = "#f91717a8";
	}

	$(':radio:not(:checked)').attr('disabled', true);
	$('#nextButton').show();
}

// Shuffle the questions around
let init = function () {
	questions = shuffle(questions);
}

let backWhite = function () {
	document.getElementById("container").style.backgroundColor = "white";
}
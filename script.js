const quizData = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correctAnswer: "Brasília"
    },
    {
        question: "Quantos planetas fazem parte do sistema solar?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "8"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Machado de Assis", "Cervantes", "Shakespeare", "Dante"],
        correctAnswer: "Cervantes"
    }
];

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const resultText = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    optionsContainer.style.display = 'none';
    submitBtn.style.display = 'none';
    resultText.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
}

loadQuestion();
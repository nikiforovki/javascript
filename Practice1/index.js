const quizQuestions = [
    {
        id: 1,
        question: "Какая столица Франции?",
        options: [
            {id: 1, text: "Берлин", isCorrect: false},
            {id: 2, text: "Мадрид", isCorrect: false},
            {id: 3, text: "Париж", isCorrect: true},
            {id: 4, text: "Рим", isCorrect: false}
        ]
    },
    {
        id: 2,
        question: "Какой газ преобладает в атмосфере Земли?",
        options: [
            {id: 1, text: "Кислород", isCorrect: false},
            {id: 2, text: "Азот", isCorrect: true},
            {id: 3, text: "Углекислый газ", isCorrect: false},
            {id: 4, text: "Водород", isCorrect: false}
        ]
    },
    {
        id: 3,
        question: "Кто написал роман 'Война и мир'?",
        options: [
            {id: 1, text: "Фёдор Достоевский", isCorrect: false},
            {id: 2, text: "Лев Толстой", isCorrect: true},
            {id: 3, text: "Антон Чехов", isCorrect: false},
            {id: 4, text: "Иван Тургенев", isCorrect: false}
        ]
    },
    {
        id: 4,
        question: "Какое самое глубокое озеро в мире?",
        options: [
            {id: 1, text: "Каспийское море", isCorrect: false},
            {id: 2, text: "Танганьика", isCorrect: false},
            {id: 3, text: "Байкал", isCorrect: true},
            {id: 4, text: "Виктория", isCorrect: false}
        ]
    },
    {
        id: 5,
        question: "Какой химический элемент обозначается символом 'Au'?",
        options: [
            {id: 1, text: "Серебро", isCorrect: false},
            {id: 2, text: "Алюминий", isCorrect: false},
            {id: 3, text: "Золото", isCorrect: true},
            {id: 4, text: "Аргон", isCorrect: false}
        ]
    }
];

let currentQuestionId = 0;
let score = 0;
let selectedOptionId = null;

// Элементы DOM
const startContainer = document.querySelector('.quiz-container-start');
const quizContainer = document.querySelector('.quiz-container');
const quizArea = document.getElementById('quiz-area');
const resultArea = document.getElementById('result-area');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreText = document.getElementById('score-text');


startBtn.addEventListener('click', startQuiz);


restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    currentQuestionId = 0;
    score = 0;

    startContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultArea.classList.add('hidden');

    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionId >= quizQuestions.length) {
        showResult();
        return;
    }

    const questionObj = quizQuestions[currentQuestionId];
    quizArea.innerHTML = `
        <div class="question">${questionObj.question}</div>
        <div class="options-container">
            ${questionObj.options.map(option => `
                <div class="option" data-option-id="${option.id}" data-is-correct="${option.isCorrect}">
                    ${option.text}
                </div>
            `).join('')}
        </div>
    `;

    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            selectedOptionId = Number(option.dataset.optionId);
            checkAnswer();
        });
    });
}

function checkAnswer() {
    const questionObj = quizQuestions[currentQuestionId];
    const selectedOption = document.querySelector(`.option[data-option-id="${selectedOptionId}"]`);
    const isCorrect = selectedOption.dataset.isCorrect === 'true';

    if (isCorrect) {
        score++;
        selectedOption.classList.add('correct');
    } else {
        selectedOption.classList.add('incorrect');
        document.querySelector(`.option[data-is-correct="true"]`).classList.add('correct');
    }

    document.querySelectorAll('.option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });

    setTimeout(() => {
        currentQuestionId++;
        displayQuestion();
    }, 1000);
}
function showResult() {
    quizArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
    scoreText.textContent = `Вы ответили правильно на ${score} из ${quizQuestions.length} вопросов!`;
}
function restartQuiz() {
    resultArea.classList.add('hidden');
    quizArea.classList.remove('hidden');
    startQuiz();
}

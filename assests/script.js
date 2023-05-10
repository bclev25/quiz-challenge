const questions = [
    {
        question: "Who is the G.O.A.T of basketball",
        answers: [
            "Micheal Jordan",
            "Lebron James",
            "Larry Bird",
            "Kobe Bryant"
        ],
        correctIndex: 2
    },
    {
        question: "Who won the 2016 NBA Finals",
        answers: [
            "Golden State Warriors",
            "San Antonio Spurs",
            "Miami Heat",
            "Orlando Magic"
        ],
        correctIndex: 1
    },
    {
        question: "Who scored the most points in NBA history",
        answers: [
            "Karl Malone",
            "Kareem Abdul-Jabbar",
            "Lebron James",
            "Kobe Bryant"
        ],
        correctIndex: 3
    },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestion];
    const answersHtml = question.answers.map((answer,index) => `
    <button class="answer-btn" data-index="${index}">${answer}</button>`
    ).join('');
    document.getElementById("question").textContent = question.question;
    document.getElementById("answers").innerHTML = answersHtml;
}

function checkAnswer(answerIndex) {
    const question = questions[currentQuestion];
    if (answerIndex === question.correctIndex) {
        score++;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion === questions.length) {
        endGame();
    } else {
        displayQuestion();
    }
}

function endGame() {
    document.getElementById("question").textContent = "Your final score is ${score}/${questions.length}.";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("submit-btn").style.display = "none";
}

document.getElementById("submit-btn").addEventListener("click", () => {
    const answersBtns = document.querySelectorAll(".answers-btn");
    answersBtns.forEach((btn) => {
        btn.disabled = true;
    });
   
})
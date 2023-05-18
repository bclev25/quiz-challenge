var startBtn = document.getElementById("startBtn");
var time = 60;
var time_remaining = true;
var time_start = false;
var countdownTimer = document.getElementById("countdownTimer");
var homeContainer = document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionHeading = document.getElementById("questionHeading");
var answerChoiceA = document.getElementById("answerChoiceA");
var answerChoiceB = document.getElementById("answerChoiceB");
var answerChoiceC = document.getElementById("answerChoiceC");
var answerChoiceD = document.getElementById("answerChoiceD");
var correctAnswer = document.getElementById("correctAnswer");
var high_scores = [];
var output = "";
var score = 0;
let i = 0;


var questionsArray = [
    {
        question: "How many championships do the Golden State Warriors Have",
        imageSrc: "",
        answerChoice: ["A) 11", "B) 4", "C) 7", "D) 1"],
        correctAnswer: 2
    },
    {
        question: "Who is the best basketball player of all time",
        imageSrc: "",
        answerChoice: ["A) Larry Bird", "B) Micheal Jordan", "C) Lebron James", "D) Kobe Bryant"],
        correctAnswer: 1
    },
    {
        question: "Who invented the NBA",
        imageSrc: "",
        answerChoice: ["A) James Naismith", "B) George Washington", "C) Jackie Robinson", "D) Larry Bird"],
        correctAnswer: 0
    },
];


var countdownTimerInterval = setInterval(setCountDownTimer, 1000);

function setCountDownTimer() {
    if(time_start)
    time--;
    if(time<= 0) {
        end_quiz();
        time = 0;
    }
    document.getElementById("timer").innerHTML = time;
}

startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display = "none";
    countdownTimer.style.display = "block";
    document.getElementById("score_keeper").style.display = "block";
    document.getElementById("score").innerHTML = score;
    setCountDownTimer();
    setQuizQuestions();
    time_start = true;
});

function setQuizQuestions() {
    questionHeading.textContent = questionsArray[i].question;
    answerChoiceA.textContent = questionsArray[i].answerChoice[0];
    answerChoiceB.textContent = questionsArray[i].answerChoice[1];
    answerChoiceC.textContent = questionsArray[i].answerChoice[2];
    answerChoiceD.textContent = questionsArray[i].answerChoice[3];
};

answerChoiceA.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log("correctAnswer" + "correctAnswer");
    if (0 === correctAnswer) {
        document.getElementById("AnswerResponse").innerHTML = "Correct!!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        )
    score++;
document.getElementById("score").innerHTML = score;
} else {
    time_remaining -= 5;
    document.getElementById("AnswerResponse").innerHTML = "Incorrect!!";
    setTimeout(function() {
        document.getElementById("AnswerResponse").innerHTML = "";
    },
    1000
    );
}
if (i>= questionsArray.length -1) {
    end_quiz();
} else {
    i++
    setQuizQuestions();
};
});

answerChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log("correctAnswer" + "correctAnswer");
    if (1 === correctAnswer) {
        document.getElementById("AnswerResponse").innerHTML = "Correct!!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        )
    score++;
document.getElementById("score").innerHTML = score;
} else {
    time_remaining -= 5;
    document.getElementById("AnswerResponse").innerHTML = "Incorrect!!";
    setTimeout(function() {
        document.getElementById("AnswerResponse").innerHTML = "";
    },
    1000
    );
}
if (i>= questionsArray.length -1) {
    end_quiz();
} else {
    i++
    setQuizQuestions();
};
});

answerChoiceA.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log("correctAnswer" + "correctAnswer");
    if (2 === correctAnswer) {
        document.getElementById("AnswerResponse").innerHTML = "Correct!!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        )
    score++;
document.getElementById("score").innerHTML = score;
} else {
    time_remaining -= 5;
    document.getElementById("AnswerResponse").innerHTML = "Incorrect!!";
    setTimeout(function() {
        document.getElementById("AnswerResponse").innerHTML = "";
    },
    1000
    );
}
if (i>= questionsArray.length -1) {
    end_quiz();
} else {
    i++
    setQuizQuestions();
};
});

answerChoiceA.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log("correctAnswer" + "correctAnswer");
    if (3 === correctAnswer) {
        document.getElementById("AnswerResponse").innerHTML = "Correct!!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
        },
        1000
        )
    score++;
document.getElementById("score").innerHTML = score;
} else {
    time_remaining -= 5;
    document.getElementById("AnswerResponse").innerHTML = "Incorrect!!";
    setTimeout(function() {
        document.getElementById("AnswerResponse").innerHTML = "";
    },
    1000
    );
}
if (i>= questionsArray.length -1) {
    end_quiz();
} else {
    i++
    setQuizQuestions();
};
});

function end_quiz() {
    document.getElementById("game_over").style.display = "block";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("countDownTimer").style.display = "none";
    document.getElementById("score_keeper").style.display = "none";
    document.getElementById("AnswerResponse").innerHTML= "";
    document.getElementById("end_score").innerHTML= score;
}

function submit_score () {
    high_scores.push(document.getElementById("initials").value + "" + score);
    view_high_scores();
}

localStorage.setItem("score", JSON.stringify(AnswersResponse));
localStorage.setItem("initials", JSON.stringify(initials));

function view_high_scores() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("game_over").style.display = "none";
    document.getElementById("high_scores_pages").style.display = "block";

    output = "";
    for(let k=0; k<high_scores.length; k++) {
        output = output + " " + high_scores[k];
    }
    document.getElementById("high_scores").innerHTML = output;
    clear_up();
}

function go_home() {
    document.getElementById("high_scores_page").style.display = "none";
    document.getElementById("homeContainer").style.display = "block";
    clear_up();
}

function clear_hs() {
    high_scores = [];
}

function clear_up() {
    time = 60;
    time_remaining = true;
    time_start = false;
    i=0;
    score=0;
}
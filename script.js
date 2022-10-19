const quizData = [
    {question: "Which is the first global Big Tech Company to join the Open Network for Digital Commerce (ONDC)?",
     a: "Google",
     b: "Microsoft",
     c: "Meta",
     d: "Apple",
     correct: "b"
    },
    
    {question: "Which Union Ministry launched the ‘SMILE-75 Initiative’?",
     a: "Ministry of Labour and Employment",
     b: "Ministry of Social Justice and Empowerment",
     c: "Ministry of Home Affairs",
     d: "Ministry of Health and Family Welfare",
     correct: "b"
    },

    {question: "What is ‘Garba’, which was nominated by India to be inscribed on UNESCO’s intangible cultural heritage list?",
     a: "Festival",
     b: "Dance Form",
     c: "Art Form",
     d: "Monument",
     correct: "b"
    },

    {question: " India’s first indigenously developed Hydrogen Fuel Cell Bus has been inaugurated in which city?",
     a: "Mysuru",
     b: "Hyderabad",
     c: "Pune",
     d: "Ahmedabad",
     correct: "c"
    },

    {question: "Which is the venue of the ‘SCO Defence Ministers’ Meeting’ held in 2022?",
     a: "Beijing",
     b: "Tashkent",
     c: "Shanghai",
     d: "Nursultan",
     correct: "b"
    },

    {question: "Which is the first country to approve a vaccine for Covid Omicron variant?",
     a: "India",
     b: "USA",
     c: "UK",
     d: "Italy",
     correct: "c"
    },
];

const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
console.log();
    
loadQuiz()

console.log(document.querySelectorAll("body"));
function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerE1s.forEach((answerE1) => {
        if(answerE1.checked){
            answer = answerE1.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerE1s.forEach((answerE1) => {
        answerE1.checkes = false;
    })
}
submitbtn.addEventListener("click", () => {
    const answer = getSelected ();
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
    
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h1>You Answered CORRECTLY at ${score}/${quizData.length}questions.</h1>

                <button onclick = "location.reload()" > reload</button>
            `;
        }
    }
})


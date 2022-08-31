const quizData = [
    {
        question: "Which of the following is not a real eCommerce platform?",
        a: "Shopify",
        b: "WooCommerce",
        c: "ShopCommerce",
        d: "BigCommerce",
        correct: "c",
    },
    {
        question: "If Shopify is so good, why are Shopify developers necessary?",
        a: "To save time on things like store setups and migrations",
        b: "To extend the limited design options and functionalities of themes with custom code",
        c: "To provide support with a deep understanding of how the platform works and what its limitations are",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of the following is true about Shopify developers?",
        a: "They are paid extremely well",
        b: "There is a high demand for them",
        c: "They need to know web development, the platform itself, and the liquid template language",
        d: "All of the above",
        correct: "d",
    },
    


];

const quiz = document.getElementById('quiz')
const answersElements = document.querySelectorAll('.answer')
const questionElement = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionElement.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answersElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answersElements.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
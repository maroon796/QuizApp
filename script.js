'use strict';

const quizInfo = [
  {
    question: 'Which one among the following radiations carries maximum energy?',
    a: 'Ultraviolet rays',
    b: 'Gamma rays',
    c: 'X- rays',
    d: 'Infra-red rays',
    correct: 'b',
  },

  {
    question: 'Katerina Sakellaropoulou was elected the first woman President of',
    a: 'Greece',
    b: 'Spain',
    c: 'Finland',
    d: 'Netherland',
    correct: 'a',
  },

  {
    question: 'The head quarters of world trade organization is in',
    a: 'Montreal',
    b: 'Seattle',
    c: 'Geneva',
    d: 'the Hague',
    correct: 'c',
  },

  {
    question: 'Which country hosted the football World Cup in 2014?',
    a: 'China',
    b: 'China',
    c: 'Japan',
    d: 'Brazil',
    correct: 'd',
  },

  {
    question: 'Nobel prize is awarded for which of the following disciplines:',
    a: 'Literature, peace and economics',
    b: 'Medicine or Physiology',
    c: 'Chemistry and Physics',
    d: 'All the above',
    correct: 'd',
  },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizInfo[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

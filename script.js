const welcomeContainer = document.getElementById("welcome-container");
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");

let currentQuestion = 0;
let score = 0;
let quizStarted = false;


const quizData = [
   // 1
   { "question": "How can we describe an array in the best possible way?",
     "options": ["The Array shows a hierarchical structure", "Arrays are immutable", "Container that stores the elements of similar types", "The Array is not a data structure"],
     "answer": "Container that stores the elements of similar types"
   },
   // 2
   {
       "question": "Which one of the following is the process of inserting an element in the stack?",
       "options": ["Insert", "Add", "Push", "None of the above"],
       "answer": "Push"
   },
   // 3
   {
       "question": "Which data structure is mainly used for implementing the recursive algorithm?",
       "options": ["Queue", "Stack", "Binary tree", "Linked list"],
       "answer": "Stack"
   },
   // 4
   {
       "question": "Which of the following principle does Queue use?",
       "options": ["LIFO principle", "FIFO principle", "Linear tree" , "Ordered array"],
       "answer": "FIFO principle"
      
   },
   // 5
   {
     "question": "Which of the following is a linear data structure?",
     "options": ["Array", "AVL Tree", "Binary Tress" , "Graphs"],
     "answer": "Array"
    
  },
  // 6
  { "question": "What is an AVL tree?",
    "options": ["a tree which is unbalanced and is a height balanced tree","a tree which is balanced and is a height balanced tree","a tree with at most 3 children", "a tree with three children" ],
    "answer" : "a tree which is balanced and is a height balanced tree"
  },
  // 7
  {
  "question": "Which is the most appropriate data structure for reversing a word?" ,
  "options":["stack","queue","graph","tree"],
  "answer" : "stack"
  },
  // 8
  {
  "question":"What is the advantage of a hash table as a data structure?" ,
  "options":["easy to implement","faster access of data","exhibit good locality of reference","very efficient for fewer number of entries"],
  "answer" :"faster access of data"
  },
  // 9
  {
  "question": "What is a dequeue?" ,
  "options":["A queue implemented with both singly and doubly linked lists","A queue with insert/delete defined for the front side of the queue","A queue with insert/delete defined for both front and rear ends of the queue","A queue implemented with a doubly linked list"],
  "answer" : "A queue with insert/delete defined for both front and rear ends of the queue"
  },
  // 10
  {
    "question": "In simple chaining, what data structure is appropriate?",
    "options":["Singly linked list", "Doubly linked list", "Binary trees", "Hash table"],
    "answer": "Doubly linked list"
  }
];

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionText.innerText = currentQuizData.question;
  optionsContainer.innerHTML = "";

  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.createElement("button");
    optionElement.innerText = option;
    optionElement.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(optionElement);
  });

  if (currentQuestion === quizData.length - 1) {
    nextButton.innerText = "Finish";
  }
}

function checkAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.answer) {
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
  resultContainer.innerText = `You scored ${score} out of ${quizData.length}`;
  optionsContainer.innerHTML = "";
  questionText.innerText = "";
  nextButton.style.display = "none";
}

startButton.addEventListener("click", () => {
  welcomeContainer.style.display = "none";
  quizContainer.style.display = "block";
  quizStarted = true;
  loadQuestion();
});

nextButton.addEventListener("click", () => {
  if (quizStarted) {
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

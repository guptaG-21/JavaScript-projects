const que = [
  {
    que: "Which is correct within the following?",
    a: "You are great",
    b: "just like other people",
    c: "i have something special",
    d: "no need to ask",
    correct: "c",
  },

  {
    que: "Which is famous language?",
    a: "HTML",
    b: "JAVA",
    c: "PYTHON",
    d: "RUBY",

    correct: "b",
  },

  {
    que: "What is important for carrer?",
    a: "Engineering",
    b: "Medical",
    c: "Politics",
    d: "Teaching",

    correct: "a",
  },

  {
    que: "What is language?",
    a: "Hindi",
    b: "English",
    c: "Urdu",
    d: "Bhojpuri",

    correct: "a",
  },
];

let total = que.length;
console.log(total);
let right = 0,
  wrong = 0;

const queBox = document.getElementById("quesBox");
const queOpt = document.querySelectorAll(".option");

// submitting the question
const submitQuiz = () => {
  //   console.log(ans);
  const data = que[indx];
  const ans = getAns();
  //   console.log(data.correct);
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  indx++;
  loadQue();
  return;
};

// checking whether answer
const getAns = () => {
  let answer;
  queOpt.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
console.log(getAns());

// resetting the options
const reset = () => {
  queOpt.forEach((input) => {
    input.checked = false;
  });
};

// loading the data
let indx = 0;
const loadQue = () => {
  if (indx === total) {
    return quizEnd();
  }
  reset();
  const data = que[indx];
  queBox.innerText = `Que-${indx + 1}. ${data.que}`;
  queOpt[0].nextElementSibling.innerText = data.a;
  queOpt[1].nextElementSibling.innerText = data.b;
  queOpt[2].nextElementSibling.innerText = data.c;
  queOpt[3].nextElementSibling.innerText = data.d;
  queOpt.innerText = data.b;
};

const quizEnd = () => {
    // document.getElementById('main').innerHTML = `<h1> Quiz is Successfully Completed </h1>`
    document.getElementById("box").innerHTML = `<h3>done</h3>
  
  <h3> ${right} / ${total} are correct</h3>`;
};

const restart = ()=>{
    indx = 0;
    loadQue();
    return;
}

loadQue();

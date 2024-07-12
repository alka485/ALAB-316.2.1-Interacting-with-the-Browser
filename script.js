console.log("hello");

let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"
        ]
      },
        {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet"
        ]
      },
        {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor"
        ]
      },
        {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language"
        ]
      },
        {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language"
        ]
      }
]

//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
//console.log(start_btn);
const info_box = document.querySelector(".info_box");
//console.log(info_box);
const exit_btn = info_box.querySelector(".buttons .quit");
//console.log(exit_btn);
const continue_btn = document.querySelector(".buttons .restart");
//console.log(continue_btn);
const quiz_box = document.querySelector(".quiz_box");

//if startQuiz button clicked
start_btn.onclick = () =>{
    console.log("start button");
    info_box.classList.add("activeInfo");
}

//if exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

//if continue button is clicked
continue_btn.onclick =() =>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");

}
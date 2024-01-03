const quizdata=[
  {
      question:"Are You Satisfied with our service",
      a:"Yes",
      b:"No",
  },
  {
      question:"Do You Find our website Friendly",
      a:"Yes",
      b:"No",
  },
  {
      question:"would you recommend us to others",
      a:"Yes",
      b:"No",
 
  },
]

const quiz=document.querySelector('.lol');
const answerEls =document.querySelectorAll('.Choose');
const questionEl=document.querySelector('.Question1');
const question2=document.querySelector('.Question2');
const question3=document.querySelector('.Question3');
const Yes=document.querySelector('.Yes');
const No=document.querySelector('.No');

const submitbtn =document.getElementById('submit');


let score=0;
let curretquize=0;

onloadquiz();


function onloadquiz(){

  deletecheck(); 

  let curretquizedata=quizdata[curretquize];
  questionEl.innerHTML=curretquizedata.question;
  Yes.innerHTML=curretquizedata.a;
  No.innerHTML=curretquizedata.b;

}
function deletecheck(){
  answerEls.forEach(x =>x.checked=false)
}

function getselect(){
  let answer ;
  answerEls.forEach(x=>{
      if(x.checked){
          answer=x.id;
      }
  })
  return answer
}
function count(){
  var score = 0 ;
  if(getselect() == true)
  score++
}

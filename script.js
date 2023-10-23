const questions=[{
    'que':'Which of the following is a markup laguage?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    'correct':'a'
    
},
{
    'que':'Which year JavaScript was launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'
    
},
{
    'que':'What does CSS stand for?',
    'a':'Hypertext Markup Language',
    'b':'Cascading Style Sheets',
    'c':'Jason Object Notation',
    'd':'none of the above',
    'correct':'b'
    
}
]
let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quesbox=document.getElementById('quesbox');
const optionInput=document.querySelectorAll('.options');
const loadQuestion=() => {
    if(index===total){
        return endQuiz();
    }
    const data=questions[index];
    reset();
    quesbox.innerHTML = `${index+1} ${data.que}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;    
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;    
}    
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer();
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
    let answer;
    optionInput.forEach(
        (input) =>{
            if(input.checked){
                answer=input.value;

            }
        }
    )
    return answer;
}
const reset=() =>{
    optionInput.forEach(
        (input) =>{
            input.checked=false;


        }
    )
    }
    const endQuiz=() =>{
        document.getElementById("box").innerHTML = `
        <h3> Thankyou For Playing The Quiz</h3>
        <h2> ${right}/${total} are correct </h2>
        `
    }



loadQuestion();

let question = document.getElementById("question_box")
let option1 = document.getElementById("answerbutton1");
let option2 = document.getElementById("answerbutton2");
let option3 = document.getElementById("answerbutton3");
let option4 = document.getElementById("answerbutton4");
let timeh = document.getElementById("timeh");
let Ans;
let time=30;
let interval;
let resulth2=document.getElementById("result-h2");
var i=0;
let opt=[option1,option2,option3,option4];
let data;
let prize = 0;
let question_list =["what is your name?","Hello","what's up"]


fetch('script.json')
.then(data=>{
   return data.json();
})
.then(data=>{
      addevent(opt);
        interval=setInterval(()=>{
         time--;
         getquestion(data,i);
         },1000);

     
});
function getquestion(data,i){
    question.innerText= data[i].q;
    option1.innerText=data[i].optionA;
    option2.innerText=data[i].optionB;
    option3.innerText=data[i].optionC;
    option4.innerText=data[i].optionD;
    Ans=data[i].Ans;
    if(time<0){
         clearInterval(interval);
         container.style.display="none";
         resulth2.innerText="good bye  Your prize Amount is INR "+prize;
        
        }
    else{
          timeh.innerText=time;
        }
    }
  
  function addevent(a){
     a.forEach(element => {
        element.addEventListener('click',(e)=>{
           if(e.target.innerText==Ans && i<5){
              prize=prize+1000;
              i++;
              time=30;
              getquestion(data,i);
           }
           else if(e.target.innerText==Ans && i==5){
              container.style.display="none";
              resulth2.innerText="Congratulations You are the Winner! Your prize Amount is INR 6000";
              
             
           }
           else if(e.target.innerText!=Ans){
              container.style.display="none";
              resulth2.innerText="bahut badiya khele aap  Your prize Amount is INR "+prize;
            
              
           }
        });
        
     });
  }
    
  
        

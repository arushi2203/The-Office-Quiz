const Quiz = [
    {
      question: "Q1:What is Pam's favourite flavor of yogurt ?",
        a:"Vanilla" ,
        b:"Strawberry",
        c:"Mixed berry",
        d:"Mango",
        ans:"ans3"
      },
    {
      question: "Q2:How much did Michael's beloved plasma TV cost ?",
        a:"$200",
        b:"$100",
        c:"$300",
        d:"$500",
        ans:"ans1"
      },
    {
      question: "Q3:Who shaves their head in episode LICE ?",
        a:"Creed",
        b:"Pete",
        c:"Pam",
        d:"Meredith",
        ans:"ans4"
      },
     {
      question: "Q4:Who dates Pam's mother ?",
        a:"Dwight",
        b:"Michael",
        c:"Kevin",
        d:"Andy",
        ans:"ans2"
      },
      {
      question: "Q5:What is Dwight's middle name ?",
        a:"Kurt",
        b:"Kurk",
        c:"Karl",
        d:"Keith",
        ans:"ans1"
      },

    
  ];
  const question = document.querySelector('.question');
  const option1 = document.querySelector('#option1');
  const option2 = document.querySelector('#option2');
  const option3 = document.querySelector('#option3');
  const option4 = document.querySelector('#option4');
  const Submit = document.querySelector('#Submit');
  const answers= document.querySelectorAll('.answer');
  const showScore=document.querySelector('#showScore');
  let questionCount=0;
  let score=0;

  const loadQuestion =  () => {

    const questionlist = Quiz[questionCount];
    question.innerText = questionlist.question;
  
  option1.innerText = questionlist.a;
  option2.innerText = questionlist.b;
  option3.innerText = questionlist.c;
  option4.innerText = questionlist.d;
  

       
  }
  loadQuestion();

  const getCheckAnswer = ( ) => {
      let answer;

      answers.forEach((curAnsElem) => {
          if(curAnsElem.checked){
            answer=curAnsElem.id;  
          }
          
      });

      return answer;

  };

    const deselectAll=( ) => {
        answers.forEach((curAnsElem)=> curAnsElem.checked = false );
    }

  Submit.addEventListener('click',( ) =>{
      const checkedAnswer=getCheckAnswer();
      console.log(checkedAnswer);

      if(checkedAnswer=== Quiz[questionCount].ans){
          score++;
      };
      questionCount++;
      deselectAll();

      if(questionCount<Quiz.length){
          loadQuestion();

      }else{
        showScore.innerHTML=`
        <h3> You scored ${score}/${Quiz.length}</h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>

        `;
        showScore.classList.remove('scoreArea');

      }
  });

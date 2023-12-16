document.addEventListener("DOMContentLoaded", function () {
    const questions = [
      {
        
        question: "HOW OFTEN DO YOU TRAIN?",
        answer: "We offer x2 weekly Basic Trainings and x3 Advanced Trainings"
      },
      {
       
        question: "WHAT EQUIPMENT DO I NEED TO PLAY?",
        answer: "You must wear quad roller skates, wear knee pads, elbow pads, wristguards, a helmet and a mouthguard",
      },
      {
        
        question: "I'M NERVOUS! I'D LIKE TO PRACTICE SKATING BEFORE THE INTAKE. WHERE SHOULD I SKATE?",
        answer: "It's okay to be nervous! Many Roller Derby skaters had never skated before starting Roller Derby, so we get it. We recommend you try skating indoors or outdoors on very smooth, flat surfaces. Indoor: you can go to Ørestad Streehal on Amager - it's open to the public from 08:00 - 22:00. Sometimes the court is booked, but the rest of the hall is open to all. Outdoor: Amager Strandpark or Mimersparken.",
      },
      {
        question:"HOW MUCH DOES IT COST TO JOIN?",
        answer:" The current price is DKK 125 per month.You skate some trainings before you register as a member, so you get to try before you buy!"
      },
      {
        question:"IS THERE ANYTHING ELSE I NEED TO KNOW BEFORE JOINING?",
        answer:"We have a safer space policy at Copenhagen Roller Derby - this means it's important that we all encourage an inclusive and accepting space for everyone to feel welcome. We speak English at all of our trainings and Facebook correspondence and we ask all of our members to use gender neutral language on track. If this is all new to you, no problem! We all make mistakes and we help each other to make the club an empowering space for all :) "

      },
      {
        question: " HOW DO I TRANSITION FROM BASIC TO ADVANCED?",
        answer:"There's no rule that says when you have to be ready to train with the Advanced Teams. We know that people learn at different paces, and it is possible to continue on our basic skating level until you're ready to make the leap to join the Advanced Teams"
      },
      {
        question:"I MISSED THE LAST INTAKE & IT'S THE MIDDLE OF THE SEASON. CAN I STILL JOIN?",
        answer:"Well that depends! If you already have some very basic skating skills, then maybe you can join up to around 6 weeks in. You should drop us an email and we can help to gauge if you should come along or wait for the next one :) "
      },
      {
        question:"I PLAYED IN ANOTHER LEAGUE, BUT I ONLY FINISHED THEIR BASIC INTAKE, AND THAT WAS <INSERT NUMBER OF YEARS AGO>! WHAT SHOULD I DO?",
        answer:"You should come along to our basic trainings and we can help to assess and see if you are safe/ready to join the Advanced Trainings , or if you should continue to the end of the current Basic Intake. Drop us an email!"
    }
    ];
  
    let currentQuestionIndex = 0;
    const questionContainer = document.querySelector(".question-container");
    const h3Element = questionContainer.querySelector("h3");
    const pElement = questionContainer.querySelector("p");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
  
    function showQuestion(index) {
      const currentQuestion = questions[index];
      h3Element.textContent = currentQuestion.question;
      pElement.textContent = currentQuestion.answer;
    }
  
    function navigateLeft() {
      currentQuestionIndex = (currentQuestionIndex - 1 + questions.length) % questions.length;
      showQuestion(currentQuestionIndex);
    }
  
    function navigateRight() {
      currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
      showQuestion(currentQuestionIndex);
    }
  
    leftArrow.addEventListener("click", navigateLeft);
    rightArrow.addEventListener("click", navigateRight);
  

    showQuestion(currentQuestionIndex);
  });
  

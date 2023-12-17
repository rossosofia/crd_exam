document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container img");
  const popup = document.querySelector(".popup");
  const popupTitle = document.querySelector(".popup h3");
  const popupContent = document.querySelector(".popup p");
  const closeBtn = document.querySelector(".popup-close-btn");
  const overlay = document.querySelector(".overlay");
  const mainContent = document.querySelector("main");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      if (image.classList.contains("nso")) {
        popupTitle.textContent = "NSO";
        popupContent.textContent = "Behind the Scenes: NSOs play a crucial role in tracking scores, penalties, and timing during matches. They're volunteers and a vital part of the game day experience.";
      } else if (image.classList.contains("skaters")) {
        popupTitle.textContent = "SKATERS";
        popupContent.textContent = "Did you know? Our skaters train relentlessly to improve their skills. We have practice sessions three times a week to perfect our strategy and teamwork.";
      } else if (image.classList.contains("ref")) {
        popupTitle.textContent = "REFS";
        popupContent.textContent = "Fun Fact: A game requires a minimum of 10 referees to ensure fair play. Our referees come from various clubs, bringing diverse expertise to the game.";
      }
      else if (image.classList.contains("commentators-2")) {
        popupTitle.textContent = "COMMENTATORS";
        popupContent.textContent = "Meet Our Voices: Commentators add excitement and context to the game, explaining the action to the audience. They're passionate volunteers who amplify the energy of the game.";
      } else if (image.classList.contains("merch-bw")) {
        popupTitle.textContent = "MERCH STAND";
        popupContent.textContent = "Support Our Club: Run by dedicated volunteers, our merch stand offers a variety of items. Purchasing merch supports our club and helps fundraise for our activities.";
      }
      else if (image.classList.contains("penalty")) {
        popupTitle.textContent = "PENALTY BOX";
        popupContent.textContent = "Understanding Penalties: This is where skaters serve time for rule infractions. Penalties vary in severity and impact gameplay strategy.";
      } 

     
      popup.classList.add("active");
      overlay.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
   
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });
});
  


  function changeText(helmetType, description, activeImgSrc, clickedImg) {
  
    document.getElementById('helmet-heading').innerText = helmetType;
    document.getElementById('helmet-paragraph').innerText = description;
  
  
    document.querySelectorAll('.helmets img').forEach(img => {
      img.src = img.src.replace('-active', '-regular');
      img.style.opacity = '0.5';
    });
  

    clickedImg.src = activeImgSrc;
    clickedImg.style.opacity = '1'; 
  }
  




  document.addEventListener("DOMContentLoaded", function () {


    const questions = [
      {
        
        question: "Where is the ball?",
        answer: "Actually, roller derby doesn't have a ball. The whole game revolves around skaters racing around a track. Players earn points by skillfully passing opponents during the action-packed bouts.",
      },
      {
       
        question: "So, do you throw some elbows?",
        answer: "No elbow-throwing here! Roller derby's all about controlled hits using shoulders and hips for blocking opponents. It's more about strategy and skill than throwing elbows around.",
      },
      {
        
        question: "Is it as painful as it looks?",
        answer: "Roller derby can be intense and physical, so bumps and falls do happen. However, with proper training, gear, and techniques, skaters aim to minimize injuries.It's a mix of adrenaline and occasional bruises, but the thrill outweighs the pain for many!",
      },
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
  

  function swapClasses(clickedCard) {
   
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');


    card1.classList.remove('card-clicked');
    card2.classList.remove('card-clicked');
    card3.classList.remove('card-clicked');


    clickedCard.classList.add('card-clicked');


    const class1 = card1.className;
    const class2 = card2.className;
    const class3 = card3.className;

   
    setTimeout(() => {
      card1.className = class3;
      card2.className = class1;
      card3.className = class2;
    }, 400); 
  }
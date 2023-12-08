document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-container img");
    const popup = document.querySelector(".popup");
    const popupTitle = document.querySelector(".popup h3");
    const popupContent = document.querySelector(".popup p");
    const closeBtn = document.querySelector(".popup-close-btn");
    const overlay = document.querySelector(".overlay");
    const mainContent = document.querySelector("main"); /* Update with your main content selector */
  
    images.forEach((image) => {
      image.addEventListener("click", () => {
        if (image.classList.contains("nso")) {
          popupTitle.textContent = "NSO";
          popupContent.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste voluptatem ut, vitae illum delectus magni pariatur architecto veniam quaerat et magnam nulla, harum quasi quos, iure deserunt hic officia dolorem?";
        } else if (image.classList.contains("skaters")) {
          popupTitle.textContent = "Skaters";
          popupContent.textContent = "Content related to skaters.";
        } else if (image.classList.contains("ref")) {
          popupTitle.textContent = "Referee";
          popupContent.textContent = "Content related to referee.";
        }
  
        // Show the popup and overlay
        popup.classList.add("active");
        overlay.classList.add("active");
      });
    });
  
    closeBtn.addEventListener("click", () => {
      // Close the popup and overlay
      popup.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
  

  function swapClasses(clickedCard) {
    // Get references to all three cards
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

    // Remove the clicked class from all cards
    card1.classList.remove('card-clicked');
    card2.classList.remove('card-clicked');
    card3.classList.remove('card-clicked');

    // Add the clicked class to the clicked card
    clickedCard.classList.add('card-clicked');

    // Get the current classes of each card
    const class1 = card1.className;
    const class2 = card2.className;
    const class3 = card3.className;

    // Swap the classes after a short delay to allow the animation to play
    setTimeout(() => {
      card1.className = class3;
      card2.className = class1;
      card3.className = class2;
    }, 500); // 500 milliseconds is the duration of the animation
  }
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
  


  document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector(".cards-container");
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;
  
    // Set initial visibility
    cards.forEach((card, index) => {
      if (index === currentIndex) {
        card.style.opacity = 1;
      } else {
        card.style.opacity = 0;
      }
    });
  
    cards.forEach((card, index) => {
      card.addEventListener("click", function () {
        cards[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].style.opacity = 1;
      });
    });
  });
  
  
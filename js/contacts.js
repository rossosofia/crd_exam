document.addEventListener("DOMContentLoaded", function () {
    const cardsData = [
      { title: "JOIN ROLLER DERBY", content: "Want to join us & learn how to play roller derby? Join our 12 week Basics program where we teach you how to skate and play roller derby. Find out more:", email: "basic@copenhagenrollerderby.com" },
      { title: "INTERLEAGUE", content: "Want to play us? Everything game related to A Team, B Team & Juniors (nationally & internationally)", email: "bout@copenhagenrollerderby.com" },
      { title: "TEAM CONTACT", content: "Want to join us & have skated in roller derby before? Transfer skaters, training info and sign up for the A Team/B Team", email: "allstars@copenhagenrollerderby.com" },
      { title: "PR/SPONS", content: "Want to get involved in our games & events? Sponsorship, social media, photographery, PR & press enquiries", email: "pr@copenhagenrollerderby.com" },
      { title: "OFFICIALS", content: "Refs and Non Skating Officials for games and scrims", email: "officials@copenhagenrollerderby.com" },
      { title: "WFTDA", content: "WFTDA membership", email: "wftda@copenhagenrollerderby.com" },
      { title: "MONEYPERSON", content: "Payment & Copenhagen Roller Derby membership", email: "moneyperson@copenhagenrollerderby.com" },
      { title: "BOARD", content: "Club management", email: "board@copenhagenrollerderby.com" },
    
    ];
  
    const cardContainer = document.getElementById("cardContainer");
  
    // Add cards
    cardsData.forEach((cardData) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${cardData.title}</h2>
        <p>${cardData.content}</p>
        <p> <a href="mailto:${cardData.email}">${cardData.email}</a></p>
      `;
      cardContainer.appendChild(card);
    });
  });
  

window.addEventListener("load", setup);
// const endpoint = "https://www.kamarini.dk/wp22e/wp-json/wp/v2/product";
// const endpoint = data.json;
console.log ("kama is here ");

function setup() {
  getGames(); 
}


function getGames() {
  fetch(`games.json`)
    .then(res => res.json())
    .then(data => {
      setupGames(data);
    })
}

function setupGames(catArray) {
    console.log(catArray);
    const template = document.querySelector("template#games-template");
    const parentElement = document.querySelector("div.games");
  
    catArray.forEach(game => {
      const copy = document.importNode(template.content, true);
  
      copy.querySelector("img").src = game.img || ""; 
      copy.querySelector(".gameType").textContent = game.gameType || "";
      copy.querySelector("h2").textContent = game.title || "";
      copy.querySelector(".date").textContent = game.date || "";
      copy.querySelector(".location").textContent = game.location || "";
      copy.querySelector(".teams").textContent = game.teams || "";
  
      parentElement.appendChild(copy);
    });
  }
  


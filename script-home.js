
window.addEventListener("load", setup);

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

    // Update button links
    copy.querySelector('.buttons a.button:nth-of-type(1)').href = game.button1.link || "";
    copy.querySelector('.buttons a.button:nth-of-type(2)').href = game.button2.link || "";

    parentElement.appendChild(copy);
  });
}

  


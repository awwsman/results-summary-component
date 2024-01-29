const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const score = document.querySelector(".score-card");
let add = "";
data.forEach((dat) => {
  add += `<div class="score-details ${dat.category.toLocaleLowerCase()}">
      <div class="areas">
        <img
          src=${dat.icon}
          alt="${dat.category} icon"
        />
        <p>${dat.category}</p>
      </div>
      <div class="score">${dat.score}<span class="divide"> / 100</span></div>
    </div>`;
});

score.innerHTML = add;

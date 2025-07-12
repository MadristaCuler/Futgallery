const playerDetails = {
  "Pele": {
    bio: "Pele was a legendary Brazilian forward, considered one of the greatest footballers ever. He won three FIFA World Cups (1958, 1962, 1970).",
    stats: "Games: 1363, Goals: 1281"
  },
  "Iker Casillas": {
    bio: "Iker Casillas is a legendary Spanish goalkeeper, known for his quick reflexes. He won the World Cup in 2010 with Spain.",
    stats: "Games: 1049, Clean Sheets: 439"
  },
  "Paolo Maldini": {
    bio: "Paolo Maldini is an Italian defender, known for his defensive intelligence and longevity, playing over 25 seasons with AC Milan.",
    stats: "Games: 1028, Goals: 40"
  },
  "Javier Zanetti": {
    bio: "Javier Zanetti is an Argentine fullback/midfielder, known for his leadership and consistency, captaining Inter Milan for many years.",
    stats: "Games: 1114, Goals: 21"
  },
  "Lionel Messi": {
    bio: "Lionel Messi, an Argentine forward, is widely regarded as one of the greatest footballers of all time, winning 8 Ballon d'Or awards.",
    stats: "Games: 1087, Goals: 857"
  },
  "Cristiano Ronaldo": {
    bio: "Cristiano Ronaldo is a Portuguese forward known for his athleticism, goal scoring, and longevity, winning 5 Ballon d'Or awards.",
    stats: "Games: 1200+, Goals: 890+"
  },
  "Kylian Mbappé": {
    bio: "Kylian Mbappé is a French forward, known for his speed and finishing, winning the FIFA World Cup in 2018.",
    stats: "Games: 350+, Goals: 230+"
  },
  "Neymar Jr.": {
    bio: "Neymar Jr. is a Brazilian forward known for his dribbling and flair, winning numerous domestic titles with Barcelona and PSG.",
    stats: "Games: 500+, Goals: 300+"
  },
  "Robert Lewandowski": {
    bio: "Robert Lewandowski is a Polish striker known for his consistent goal scoring and positioning, winning numerous Bundesliga titles.",
    stats: "Games: 700+, Goals: 500+"
  },
  "Florian Wirtz": {
    bio: "Florian Wirtz is a young German attacking midfielder, known for his creativity and vision at Bayer Leverkusen.",
    stats: "Games: 100+, Goals: 30+"
  },
  "Lamine Yamal": {
    bio: "Lamine Yamal is a promising young Spanish winger playing for FC Barcelona, known for his dribbling and pace.",
    stats: "Games: 30+, Goals: 5+"
  },
  "Jude Bellingham": {
    bio: "Jude Bellingham is an English midfielder known for his composure and intelligence, playing for Real Madrid.",
    stats: "Games: 150+, Goals: 25+"
  },
  "Pedri": {
    bio: "Pedri is a Spanish midfielder known for his technical ability and vision, playing for FC Barcelona and Spain.",
    stats: "Games: 120+, Goals: 15+"
  },
  "Gavi": {
    bio: "Gavi is a Spanish midfielder, known for his aggressiveness and passing, playing for FC Barcelona and Spain.",
    stats: "Games: 80+, Goals: 10+"
  },
  "Pau Cubarsí": {
    bio: "Pau Cubarsí is a young Spanish defender playing for FC Barcelona, known for his calmness on the ball and defensive abilities.",
    stats: "Games: 15+, Goals: 1+"
  }
};

const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get('name');
const container = document.getElementById('player-details');

// Get player image from the globally exposed playersData
let playerImage = "";
if (window.playersData) {
  const playerFromList = window.playersData.find(p => p.name === playerName);
  if (playerFromList) {
    playerImage = playerFromList.img;
  }
}

if (playerName && playerDetails[playerName]) {
  const player = playerDetails[playerName];
  container.innerHTML = `
    ${playerImage ? `<img src="${playerImage}" alt="${playerName}">` : ""}
    <h1>${playerName}</h1>
    <p>${player.bio}</p>
    <p>${player.stats}</p>
  `;
} else {
  container.innerHTML = "<p>Player details not found.</p>";
}

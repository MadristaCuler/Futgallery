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
    bio: "Lionel Andrés Messi (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi]; born 24 June 1987) is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. Widely regarded as one of the greatest players in history, Messi set numerous records for individual accolades won throughout his professional footballing career, including eight Ballon d'Ors, six European Golden Shoes, and eight times being named the world's best player by FIFA.He is the most decorated player in the history of professional football having won 45 team trophies.Messi's records include most goals in a calendar year (91), most goal contributions (21) in the FIFA World Cup, and most goal contributions (32) in the Copa América. A prolific goalscorer and creative playmaker, Messi has scored over 850 senior career goals and has provided over 380 assists for club and country.",
    stats: "Games: 1087, Goals: 857"
  },
  "Cristiano Ronaldo": {
    bio: "Cristiano Ronaldo dos Santos Aveiro (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaldu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al-Nassr and the Portugal national team. Nicknamed CR7, he is widely regarded as one of the greatest players in history, and has won numerous individual accolades throughout his professional footballing career, including five Ballon d'Or awards, a record three UEFA Men's Player of the Year Awards, four European Golden Shoes, and was named five times the world's best player by FIFA.He has won 34 trophies in his career and holds numerous records, including most goals (140) in the UEFA Champions League, most goals (14) in the UEFA European Championship, and most international goals (138). He has made over 1,200 professional career appearances, the most by an outfield player, and has scored over 900 official senior career goals for club and country, making him the top goalscorer of all time."  },
    stats: "Games: 1200+, Goals: 890+"
  },
  "Kylian Mbappé": {
    bio: "Kylian Mbappé Lottin (born 20 December 1998)[2] is a French professional footballer who plays as a forward for La Liga club Real Madrid and captains the France national team. Widely regarded as one of the best players of his generation, he is known for his dribbling, finishing, and speed.",
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

if (playerName && playerDetails[playerName]) {
  container.innerHTML = `
    <h1>${playerName}</h1>
    <p>${playerDetails[playerName].bio}</p>
    <p>${playerDetails[playerName].stats}</p>
  `;
} else {
  container.innerHTML = "<p>Player details not found.</p>";
}

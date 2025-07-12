const players = [
  // Retired
  { name: "Pele", category: "Retired", img: "https://boutique.so/cdn/shop/files/Pelejoie_2_97a65290-603b-4e22-a06a-916a67f69c18_1200x1200.jpg?v=1703859200" },
  { name: "Iker Casillas", category: "Retired", img: "https://static.toiimg.com/thumb/msid-77385750,imgsize-262133,width-400,resizemode-4/77385750.jpg" },
  { name: "Paolo Maldini", category: "Retired", img: "https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_s0PvuPfNQ5yebwXHCmcMSMoo_qKpOiL3f7SGQ2ramnK5oWlg1KdKuBWaPmoOTgo92S4ZiM_KfGl3d2SfOZMumlrdzGu-gkTSSxkAIIW4rsIZPz47WRyDbrsnl1Cis2azIdXZUiEsQ=w1200-h630-p-k-no-nu" },
  { name: "Javier Zanetti", category: "Retired", img: "https://intermilan.bynder.com/m/33181148360718cb/webimage-MADRID-22-05-10-FOTO-GIORGIO-RAVEZZANI-BAYERN-INTER.png" },
  { name: "Dieogo Maradona", category: "Retired", img: "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2017/03/maradona86.jpg?fit=1600%2C1053&ssl=1" },

  // Current
  { name: "Lionel Messi", category: "Current", img: "https://www.reuters.com/resizer/v2/3LZW7M3FIJKYZH3YAMNWPBEAJU.jpg?auth=fc1685dd4f76b3449bb25138612dc2a499427dd7ae88b47c820dc6fea99f6297&width=4645&quality=80" },
  { name: "Cristiano Ronaldo", category: "Current", img: "https://mastmedia.plu.edu/wp-content/uploads/2024/05/IMG_0881.webp" },
  { name: "Kylian Mbappé", category: "Current", img: "https://www.planetsport.com/image-library/land/1200/k/kylian-mbappe-psg-france-3-april-2022.webp" },
  { name: "Neymar Jr.", category: "Current", img: "https://asset-2.tstatic.net/gorontalo/foto/bank/images/NEYMAR-DI-BARCELONA-Tampaknya-Barcelona.jpg" },
  { name: "Robert Lewandowski", category: "Current", img: "https://preview.redd.it/happy-36th-birthday-to-robert-lewandowski-wish-him-as-many-v0-p3r33ly96wjd1.jpeg?auto=webp&s=d5759da24d6589817ba8bdf9f59d09032a32c6d3" },

  // Youngsters
  { name: "Florian Wirtz", category: "Youngster", img: "https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2025-06/florian-wirtz-statement-20062025_11d8da2feeb654b651902d7c54426044.jpg?itok=x3a01yY1" },
  { name: "Lamine Yamal", category: "Youngster", img: "https://vcdn1-english.vnecdn.net/2025/04/28/491439547183823969811377834708-5988-2608-1745831267.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=fbK9qSHE5i7MgxNQeOOM6w" },
  { name: "Jude Bellingham", category: "Youngster", img: "https://thehoya.com/wp-content/uploads/2024/02/bellingham.png" },
  { name: "Pedri", category: "Youngster", img: "https://www.fcbarcelona.com/fcbarcelona/photo/2024/10/29/fd08e95a-68f1-484d-b37e-45ed417b8d4a/2024-10-20_FCBvsSEVILLA_82.jpg" },
  { name: "Gavi", category: "Youngster", img: "https://imageio.forbes.com/specials-images/imageserve/67c069d82ff9cc98b47db2a8/FC-Barcelona-could-lose-Gavi-this-summer-/960x0.jpg?format=jpg&width=960" },
  { name: "Pau Cubarsí", category: "Youngster", img: "https://cdn.resfu.com/media/img_news/el-defensa-del-fc-barcelona-pau-cubarsi-celebra-su-gol--segundo-del-equipo-blaugrana--durante-el-partido-de-ida-de-las-semifinales-de-la-copa-del-rey-que-fc-barcelona-y-atletico-de-madrid-disputan-este-martes-en-el-estadio-olimpico-lluis-companys--efe.jpg" }
];

const gallery = document.getElementById('gallery');

function displayPlayers(list) {
  gallery.innerHTML = '';
  list.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `
      <a href="player.html?name=${encodeURIComponent(player.name)}">
        <img src="${player.img}" alt="${player.name}">
      </a>
      <h3>${player.name}</h3>
    `;
    gallery.appendChild(card);
  });
}

function filterPlayers(category) {
  if (category === 'All') {
    displayPlayers(players);
  } else {
    const filtered = players.filter(player => player.category === category);
    displayPlayers(filtered);
  }
}

displayPlayers(players);
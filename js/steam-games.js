document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('steam-game-list');

    const mockData = [
        {
            name: "Hades",
            img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
            playtime: 7200,
            lastPlayed: "2024-12-03"
        },
        {
            name: "Portal 2",
            img: "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg",
            playtime: 1200,
            lastPlayed: "2024-11-15"
        }
    ];

    mockData.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
      <img src="${game.img}" alt="${game.name}" />
      <div class="game-info">
        <h3>${game.name}</h3>
        <p>已游玩时间：${Math.round(game.playtime / 60)} 小时</p>
        <p>最近游玩：${game.lastPlayed}</p>
      </div>
    `;
        container.appendChild(gameCard);
    });
});

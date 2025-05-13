const STEAM_API_PROXY = "https://quiet-frog-4a34.lsaacfriedrich.workers.dev/?steamid=76561198360304695";
async function fetchSteamGames() {
    try {
        const res = await fetch(STEAM_API_PROXY);
        const data = await res.json();

        // 输出数据调试，检查数据结构
        console.log('获取到的数据:', data);

        if (!data.games) {
            console.error("数据格式不正确，未找到 'games' 字段");
            return;
        }

        const container = document.getElementById("steam-game-list");
        data.games
            .sort((a, b) => b.playtime_forever - a.playtime_forever)
            .forEach(game => {
                const gameElement = document.createElement("div");
                gameElement.className = "steam-game-item";
                const playHours = (game.playtime_forever / 60).toFixed(1);h
                // 处理最近游玩的时间，检查 rtime_last_played 字段是否存在
                const lastPlayed = game.lastPlayed || "未知";

                gameElement.innerHTML = `
          <img class="steam-game-cover" src="https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg" alt="${game.name}">
          <div class="steam-game-info">
            <div class="steam-game-title">${game.name}</div>
            <div class="steam-game-meta">
              <span>总时长：${playHours} 小时</span><br>
              <span>最近游玩：${lastPlayed}</span>
            </div>
          </div>
        `;
                container.appendChild(gameElement);
            });
    } catch (error) {
        console.error("无法加载 Steam 游戏数据：", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchSteamGames);



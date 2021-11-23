const clientId = `JLBr5npPhV`;

const mechanicsApi = `https://api.boardgameatlas.com/api/game/mechanics?client_id=${clientId}`;

export async function getMechanics() {
    try {
        const res = await fetch(mechanicsApi);
        const objRes = await res.json();
        return objRes.mechanics || [];
    } catch (e) {
        return [];
    }
}

export async function getGameSearch(gameName) {
    const gameSearchApi = `https://api.boardgameatlas.com/api/search?name=${gameName}&client_id=${clientId}`;
    try {
        const res = await fetch(gameSearchApi);
        const objRes = await res.json();
        return objRes.games || [];
    } catch (e) {
        return [];
    }
}

import app from 'gatsby-plugin-firebase-v9.0';
import {
    getFirestore,
    doc,
    getDocs,
    collection,
    addDoc,
} from 'firebase/firestore';

const db = getFirestore(app);

export async function getGames() {
    try {
        const gamesRef = await getDocs(
            collection(doc(db, 'apps', 'my-games'), 'games')
        );
        const allGames = [];

        if (!gamesRef.empty) {
            gamesRef.docs.forEach(gameDoc => {
                allGames.push({
                    id: gameDoc.id,
                    ...gameDoc.data(),
                });
            });
        }
        return allGames;
    } catch (e) {
        console.warn(`Failed to get games: ${e}`);
        return [];
    }
}

export async function addGame(gameData) {
    try {
        await addDoc(
            collection(doc(db, 'apps', 'my-games'), 'games'),
            gameData
        );
        return true;
    } catch (e) {
        console.warn(`Failed to add new game: ${e}`);
        return false;
    }
}

import app from 'gatsby-plugin-firebase-v9.0';
import {
    getFirestore,
    doc,
    getDocs,
    collection,
    addDoc,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const db = getFirestore(app);
const storage = getStorage(app);

const mainC = 'apps';
// const mainC = 'test-apps';
const mainD = 'my-games';

export async function getGames(callback) {
    try {
        const gamesRef = await getDocs(
            collection(doc(db, mainC, mainD), 'games')
        );
        const allGames = [];

        if (!gamesRef.empty) {
            gamesRef.docs.forEach(gameDoc => {
                allGames.push({
                    id: gameDoc.id,
                    ...gameDoc.data(),
                });
            });
        } else allGames.push({ id: 0 });

        for (let i = 0; i < allGames.length; i++) {
            const game = allGames[i];
            if (!game.picName) continue;
            game.picUrl = await getDownloadURL(ref(storage, game.picName));
        }

        callback(allGames);
    } catch (e) {
        console.warn(`Failed to get games: ${e}`);
        callback([{ id: 0 }]);
    }
}

export async function addGame(gameData, pic) {
    try {
        await addDoc(collection(doc(db, mainC, mainD), 'games'), {
            ...gameData,
            picName: `my-games/${pic.name}`,
        });
        const gamesRef = ref(storage, `my-games/${pic.name}`);
        await uploadBytes(gamesRef, pic.file);
        return true;
    } catch (e) {
        console.warn(`Failed to add new game: ${e}`);
        return false;
    }
}

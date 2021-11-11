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

export async function getGames(callback) {
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
        } else allGames.push({});

        for (let i = 0; i < allGames.length; i++) {
            const game = allGames[i];
            if (!game.picName) continue;
            game.picUrl = await getDownloadURL(ref(storage, game.picName));
        }

        callback(allGames);
    } catch (e) {
        console.warn(`Failed to get games: ${e}`);
        callback([{}]);
    }
}

export async function addGame(gameData, pic) {
    try {
        await addDoc(collection(doc(db, 'apps', 'my-games'), 'games'), {
            ...gameData,
            picName: pic.name,
        });
        const gamesRef = ref(storage, pic.name);
        await uploadBytes(gamesRef, pic.file);
        return true;
    } catch (e) {
        console.warn(`Failed to add new game: ${e}`);
        return false;
    }
}

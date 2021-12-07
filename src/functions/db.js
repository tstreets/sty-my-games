import app from 'gatsby-plugin-firebase-v9.0';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDocs,
    getDoc,
    query,
    where,
} from 'firebase/firestore';
import {} from 'firebase/storage';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export async function loginUser() {
    try {
        const { user } = await signInWithPopup(auth, googleProvider);
        return user;
    } catch (e) {
        return null;
    }
}

const db = getFirestore(app);
const appsCollection = 'test';
const appName = 'my-games';
const appRef = doc(db, appsCollection, appName);

export async function addGame({ gameData = {}, user = {} }) {
    try {
        const gamesRef = collection(appRef, 'games');
        const newGameRef = await addDoc(gamesRef, {
            addedBy: user.email,
            dateAdded: Date.now(),
            ...gameData,
        });
        return newGameRef.id;
    } catch {
        return null;
    }
}

export async function getAllGames() {
    try {
        const gamesRef = collection(appRef, 'games');
        const allGamesRef = await getDocs(gamesRef);
        const allGames = [];
        for (let gameRef of allGamesRef.docs) {
            const gameData = gameRef.data();
            allGames.push({
                ...gameData,
                id: gameRef.id,
            });
        }
        return allGames;
    } catch {
        return [];
    }
}

export async function getGame(gameId) {
    try {
        const gameRef = await getDoc(doc(appRef, 'games', gameId));
        if (!gameRef.id) return {};
        const gameData = gameRef.data();
        return {
            ...gameData,
            id: gameRef.id,
        };
    } catch {
        return {};
    }
}

export async function checkAdmin(user) {
    try {
        const adminRef = collection(appRef, 'admin');
        const adminQuery = query(adminRef, where('email', '==', user.email));
        const adminSnap = await getDocs(adminQuery);
        return !adminSnap.empty;
    } catch {
        return false;
    }
}

import firebase from 'gatsby-plugin-firebase-app';

const db = firebase.firestore();

export async function getGames() {
    const gamesRef = await db
        .collection('app')
        .doc('my-games')
        .collection('games')
        .get();
    return gamesRef;
}

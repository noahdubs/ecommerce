import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyAAI8-d7TI0fpl9LyvBaVWpAE0lEiv89Fs",
    authDomain: "crwn-db-ba6be.firebaseapp.com",
    projectId: "crwn-db-ba6be",
    storageBucket: "crwn-db-ba6be.appspot.com",
    messagingSenderId: "698635300808",
    appId: "1:698635300808:web:834513accd22da69395afd",
    measurementId: "G-5NZ172H2CQ"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating data', error.message)
        }
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase 

// Firebase Configuration for Ecocycle Innovations Blog
// This file connects your website to Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDXqoE-IsZIWgtaAVVLoVol8mBFC392rTY",
    authDomain: "ecocycle-innovations.firebaseapp.com",
    databaseURL: "https://ecocycle-innovations-default-rtdb.firebaseio.com",
    projectId: "ecocycle-innovations",
    storageBucket: "ecocycle-innovations.firebasestorage.app",
    messagingSenderId: "105086320761",
    appId: "1:105086320761:web:26392a16c68514590454a8",
    measurementId: "G-61CJXZGNPP"
};

// Initialize Firebase (will be done in individual pages)
let app, database;

function initializeFirebase() {
    try {
        // Check if Firebase is already initialized
        if (!firebase.apps || firebase.apps.length === 0) {
            app = firebase.initializeApp(firebaseConfig);
            database = firebase.database();
            console.log('Firebase initialized successfully');
            return database;
        } else {
            database = firebase.database();
            return database;
        }
    } catch (error) {
        console.error('Error initializing Firebase:', error);
        return null;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { firebaseConfig, initializeFirebase };
}


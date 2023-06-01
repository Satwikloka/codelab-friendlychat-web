/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCAPhopFNtreOb5EckSQdAcfUFCqGfjIGg",
  authDomain: "friendlychat-455cd.firebaseapp.com",
  projectId: "friendlychat-455cd",
  storageBucket: "friendlychat-455cd.appspot.com",
  messagingSenderId: "254641148187",
  appId: "1:254641148187:web:e814d26f25975d76f843be"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
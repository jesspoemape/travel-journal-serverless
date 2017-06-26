import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAFg7IIlR70hNMsGZdM-piKxpfHMsDhnWI",
    authDomain: "travel-journal-serverless.firebaseapp.com",
    databaseURL: "https://travel-journal-serverless.firebaseio.com",
    projectId: "travel-journal-serverless",
    storageBucket: "travel-journal-serverless.appspot.com",
    messagingSenderId: "167210065023"
  };
  firebase.initializeApp(config);
  const database = firebase.database();

  export default database;
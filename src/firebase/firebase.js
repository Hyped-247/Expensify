import * as firebase from 'firebase';

const firebaseConfig = {
apiKey: "AIzaSyADG8mX6XYNEpFYvexry4EACiWj9OBHPO8",
authDomain: "expensify-5259c.firebaseapp.com",
databaseURL: "https://expensify-5259c.firebaseio.com",
projectId: "expensify-5259c",
storageBucket: "expensify-5259c.appspot.com",
messagingSenderId: "761750829658",
appId: "1:761750829658:web:4d99e758f30b50ac"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default };


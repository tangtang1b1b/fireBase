require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// db.ref('/chat').set({
//   message: '3078'
// })

// db.ref('/chat').once('value',(snapshot) => {
//   console.log(snapshot.val().message);
// })

db.ref('chat').once('value',(snapshot) => {
  let ms = snapshot.val();
  Object.keys(ms).forEach((key) => {
    message = ms[key].messages;
    console.log(message);
  })
})
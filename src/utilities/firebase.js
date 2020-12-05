import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBHZzq7lU5yA4kWu0MKayfTMhaiHGjPsXo",
    authDomain: "my-vue3-project.firebaseapp.com",
    databaseURL: "https://my-vue3-project.firebaseio.com",
    projectId: "my-vue3-project",
    storageBucket: "my-vue3-project.appspot.com",
    messagingSenderId: "970600762759",
    appId: "1:970600762759:web:1e1a835aafbc31bd329722",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database()
      export const chatsRef = db.ref('chats')


export default firebase;
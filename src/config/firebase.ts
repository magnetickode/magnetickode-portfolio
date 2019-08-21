import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCfNNA02t7mPM7ukf0oTI6MBxsp5mHIbH0",
  authDomain: "magnetickode.firebaseapp.com",
  databaseURL: "https://magnetickode.firebaseio.com",
  projectId: "magnetickode",
  storageBucket: "",
  messagingSenderId: "391054160813",
  appId: "1:391054160813:web:70555cc7859f3ed8"
};

export const initFirebase = () => {
  firebase.initializeApp(config);
};

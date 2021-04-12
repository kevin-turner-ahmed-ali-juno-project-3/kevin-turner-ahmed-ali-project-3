import firebase from 'firebase/app';
import 'firebase/database';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDF9Vs4uTew46ftkGrhnM-RRW3kzfVcSXY",
    authDomain: "simple-blog-juno.firebaseapp.com",
    projectId: "simple-blog-juno",
    storageBucket: "simple-blog-juno.appspot.com",
    messagingSenderId: "627022332505",
    appId: "1:627022332505:web:19d7221e236b815ba02748"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;

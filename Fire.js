import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD7d1tv6HsMiecEoSTphyuW-HSPpxo5OYQ",
    authDomain: "authentication-3e326.firebaseapp.com",
    projectId: "authentication-3e326",
    storageBucket: "authentication-3e326.appspot.com",
    messagingSenderId: "64589128926",
    appId: "1:64589128926:web:dc6203e6cc5e47b7254e4f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase;
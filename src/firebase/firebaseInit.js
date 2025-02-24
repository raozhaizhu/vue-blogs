import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBH7Y75zlmgd3tsb-Jvljxxmxkedm2Mudg',
    authDomain: 'rzzblog-64b72.firebaseapp.com',
    projectId: 'rzzblog-64b72',
    storageBucket: 'rzzblog-64b72.firebasestorage.app',
    messagingSenderId: '1016878707704',
    appId: '1:1016878707704:web:77017236e6fa8368681c0d',
    measurementId: 'G-KQES88KEXY',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();


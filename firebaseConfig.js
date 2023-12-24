
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth'; 
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app'



const firebaseConfig = {
  apiKey: "AIzaSyAuxcu6RjDYxfEb8GCM0_gajGz9Tvz7v-0",
  authDomain: "storeapp-d7e0e.firebaseapp.com",
  databaseURL: "https://storeapp-d7e0e-default-rtdb.firebaseio.com",
  projectId: "storeapp-d7e0e",
  storageBucket: "storeapp-d7e0e.appspot.com",
  messagingSenderId: "1073559918124",
  appId: "1:1073559918124:web:c8159c7babb4374eeb2389",
  measurementId: "G-VGFQKQ4RE9"
};


const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

const db = getDatabase();

export {auth, db}
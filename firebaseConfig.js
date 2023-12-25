
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth'; 
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app'
import {APIKEY, AUTHDOMAIN, DATABASEURL, PROJECTID , STROAGEBUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID} from '@env'



const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STROAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
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
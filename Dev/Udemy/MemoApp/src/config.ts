import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import  ReactNativeAsyncStorage  from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyCLtjrhgKu9wR9JXCCMPkqDzGGsw7andII",
    authDomain: "memoapp-92701.firebaseapp.com",
    projectId: "memoapp-92701",
    storageBucket: "memoapp-92701.appspot.com",
    messagingSenderId: "418966958747",
    appId: "1:418966958747:web:3874f5d8eefdd95b468c3e"
  };

  const app = initializeApp(firebaseConfig)
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  } )
const db = getFirestore(app)

export { app, auth, db }




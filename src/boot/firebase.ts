import { boot } from 'quasar/wrappers';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: 'AIzaSyBlgamCb65mTDLa7Z53m33cSiu9lpSrubo',
  authDomain: 'crew-manager-e370a.firebaseapp.com',
  databaseURL:
    'https://crew-manager-e370a-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'crew-manager-e370a',
  storageBucket: 'crew-manager-e370a.appspot.com',
  messagingSenderId: '121632428862',
  appId: '1:121632428862:web:14fd3e791be23d12a1526f',
};
firebase.initializeApp(firebaseConfig);
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  firebase;
});

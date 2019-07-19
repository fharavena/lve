import { Llaves } from './config';


export const environment = {
  production: false,
  firestore: {
    apiKey: Llaves.apiKey,
    authDomain: Llaves.authDomain,
    databaseURL: Llaves.databaseURL,
    projectId: Llaves.projectId,
    storageBucket: Llaves.storageBucket,
    messagingSenderId: Llaves.messagingSenderId,
    appId: Llaves.appId
  }
};



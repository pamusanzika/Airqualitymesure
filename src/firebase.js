import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD26PwAmJ_HLxP76pz62qa7Dws6xpzpKbU",
  authDomain: "air-quality-monitoring-5ad17.firebaseapp.com",
  databaseURL: "https://air-quality-monitoring-5ad17-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "air-quality-monitoring-5ad17",
  storageBucket: "air-quality-monitoring-5ad17.appspot.com",
  messagingSenderId: "663488882232",
  appId: "1:663488882232:web:f8b9fbc479f3b57d7628cd",
  measurementId: "G-7E1TNCLD2V"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

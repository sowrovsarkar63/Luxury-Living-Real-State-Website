import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.conf";
const FireBaseInit = () => {
    initializeApp(firebaseConfig);
};

export default FireBaseInit;

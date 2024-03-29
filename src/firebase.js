import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD9Z2025wzpEayxmkaM09CYrP1ZZaT8d7k",
    authDomain: "brain-fxxx-note.firebaseapp.com",
    databaseURL: "https://brain-fxxx-note.firebaseio.com",
    projectId: "brain-fxxx-note",
    storageBucket: "brain-fxxx-note.appspot.com",
    messagingSenderId: "179092367072",
    appId: "1:179092367072:web:34d43800f3292af5651285",
    measurementId: "G-GW7XFL522P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject)
    });
}

firebase.bindChildList = (path, list, childType) => {
    firebase
        .database()
        .ref(path)
        .on("value", (snapshot) => {
            list.length = 0;
            let childlen = snapshot.val();
            console.log(childlen)
            childlen.forEach(id => {
                firebase
                    .database()
                    .ref(childType + "/" + id)
                    .once("value")
                    .then((snapshot) => list.push(snapshot.val()));
            });
        });
}
export default firebase;
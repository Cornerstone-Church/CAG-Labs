// Initialize Firebase

var config = {
    apiKey: "AIzaSyBaZkCdGVXm7Ar6zHCrKIkQfJh50F0oVvc",
    authDomain: "cag-zalem-32e6e.firebaseapp.com",
    databaseURL: "https://cag-zalem-32e6e.firebaseio.com",
    projectId: "cag-zalem-32e6e",
    storageBucket: "cag-zalem-32e6e.appspot.com",
    messagingSenderId: "829120399131"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

const docRef = firestore.doc("samples/sandwichData");
const outputHeader = document.querySelector("#outputHeader");
const inputTextField = document.querySelector("#latestStatus");
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");

// Save button stores the text to the document in docRef
saveButton.addEventListener("click", function () {
    const textToSave = inputTextField.value;
    console.log("I am going to save " + textToSave + " to Firestore");
    docRef.set({
        hotDogStatus: textToSave
    }).then(function () {
        console.log("Saved to Firebase");
    }).catch(function (error) {
        console.error("Falled to save data to Firebase: " + error);
    });
});

loadButton.addEventListener("click", function () {
    docRef.get().then(function (doc) {
        const myData = doc.data();
        outputHeader.innerHTML = "Hot Dog Status: " + myData.hotDogStatus;
        console.log("It worked!");
    }).catch(function (error) {
        console.log("Unable to fetch the firebase: " + error);
    });
});

getRealtimeUpdates();

function getRealtimeUpdates() {
    docRef.onSnapshot(function (doc) {
        const myData = doc.data();
        outputHeader.innerHTML = "Hot Dog Status: " + myData.hotDogStatus;
        console.log("It worked!");
    })
}
firebase.initializeApp(config);

const collection = "todo";
let db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

function addTask(task, callback) {
    db.collection(collection)
        .add(task)
        .then(function (docRef) {
            console.log("Success - Task Id", docRef.id);
            callback(docRef.id);
        }).catch(function (error) {
            console.log("Error: ", error);
            callback(false, error);
        })
}

function dataWasUpdated(callback) {
    db.collection(collection).onSnapshot(callback);
}
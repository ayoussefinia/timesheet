console.log("connected");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8h2LtNcYxgRabGCZgAunkFMBU7MNGhis",
    authDomain: "june-project-f5e77.firebaseapp.com",
    databaseURL: "https://june-project-f5e77.firebaseio.com",
    projectId: "june-project-f5e77",
    storageBucket: "june-project-f5e77.appspot.com",
    messagingSenderId: "602603736335",
    appId: "1:602603736335:web:8f4ecef29152dbd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var employeeName = $("#employee-name").val();
var empRole = $("#role").val();
var startDate = $("#start-date").val();
var empRate = $("#rate").val();
$("#submit").on("click", function(event) {
    event.preventDefault();
    // Grabbed values from text boxes
    var employeeName = $("#employee-name").val();
    var empRole = $("#role").val();
    var startDate = $("#start-date").val();
    var empRate = $("#rate").val();
    // Code for handling the push
    database.ref().push({
        name: employeeName,
        role: empRole,
        date: startDate,
        rate: empRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    console.log(employeeName);
    console.log(empRole);
    console.log(startDate);
    console.log(empRate);
});
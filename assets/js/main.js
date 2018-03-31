// On Document Load
$(document).ready(function(){
    console.log('Ready');

    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyDOYpHtFpO_zc0j07ieVWpUT4CjceeEJ1g",
    authDomain: "project1-e5380.firebaseapp.com",
    databaseURL: "https://project1-e5380.firebaseio.com",
    projectId: "project1-e5380",
    storageBucket: "project1-e5380.appspot.com",
    messagingSenderId: "891558406446"
    };
    firebase.initializeApp(config);

    var database = firebase.database()

    $('.dropdown-trigger').dropdown();
    
    $('.modal').modal();

    $("#submit").on("click", function(event) {
        event.preventDefault();
    })

    
})
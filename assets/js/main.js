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


// On Document Load
$(document).ready(function(){
    console.log('Ready');


    // ======= FIREBASE AUTHENTICATION ONCHANGE LISTENER ======= //
    // Listen for authentication state changes 
    firebase.auth().onAuthStateChanged(function(user) {
        // when user signs in
        if (user) {
            // User is signed in.
            console.log(user);
            // make visual changes to nav links
            $('.logout').removeClass('hidden')
            $('.profile').removeClass('hidden')
            $('.login').addClass('hidden')
            $('.signUp').addClass('hidden')


        // when user signs out
        } else {
            // User is signed out.
            // make visual changes to nav links
            $('header .logout').addClass('hidden')
            $('header .profile').addClass('hidden')
            $('header .login').removeClass('hidden')
            $('header .signUp').removeClass('hidden')
        // ...
        }
    });


    // Database no in use yet
    //var database = firebase.database()

    // triggers dropdown menu
    $('.dropdown-trigger').dropdown();

    // modal popups
    $('.modal').modal();

    // when user submits
    $("#submit").on("click", function(event) {
        event.preventDefault();
    })

    // carousel functionality
    $('.carousel').carousel();

    //profile page tabs functionality
    $('.tabs').tabs();

    
})





// =======  USER SIGN UP FUNCTION ======= //
// When user submits the sign up form
$('#sign_up_form').on('click', '#sign_up_submit', (e) => {
    // prevent default submit
    e.preventDefault()

    // grab the email value
    var email = $('#sign_up_email_input').val().trim()
    // grab the password value
    var password = $('#sign_up_password').val().trim()
    // grab the password confirm value
    var passwordConfirm = $('#sign_up_password_confirm').val().trim()


    // run simple validation against the inputs
    if(email.length < 1){
        console.log('Enter a valid email address');
        
        if (password !== passwordConfirm) {
            console.log('Check Passwords');
            
        }

    }
    else if (password !== passwordConfirm)  {
        console.log('Check passwords');
        
    }
    else {
        // once validtions pass
        console.log('Passed Validation Created new User');
        // run createUserWithEmailAndPassword
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            console.log(error.code);
            console.log(error.message);
            
        })
        
    }

    // Empty out the input values
    $('#sign_up_email_input').val('')
    $('#sign_up_password').val('')
    $('#sign_up_password_confirm').val('')
    
})

// =======  USER SIGN IN FUNCTION ======= //
// When user submits the Login form
$('#login_form').on('click', '#login_submit', (e) => {
    // prevent default submit
    e.preventDefault()

    // grab the email value
    var email = $('#login_email_input').val().trim()
    // grab the password value
    var password = $('#login_password_input').val().trim()


    // run simple validation against the inputs
    if(email.length < 1){
        console.log('Enter a valid email address');
        
        if (password.length < 1) {
            console.log('Enter Password');
            
        }

    }
    else if (password.length < 1)  {
        console.log('Check passwords');
        
    }
    else {
        // once validtions pass
        console.log('Passed Validation Logging User In');
        // run signInWithEmailAndPassword
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            // redirect_to index
            window.location.replace('index.html');
        }).catch((error) => {
            console.log(error.code);
            console.log(error.message);
            
        })
        
    }

    // Empty out the input values
    $('#login_email_input').val('')
    $('#login_password_input').val('')
    
})

// =======  USER LOGOUT FUNCTION ======= //
// When user clicks the logout button
$('header').on('click', '.logout', () => {
    // User signed out
    console.log('User signed out');
    // redirect back to login
    firebase.auth().signOut().then(() => {
        // run auth signOut method
        window.location.replace('login.html');
    })
})

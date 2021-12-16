firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    document.getElementById("logIn-div").style.display="block";
    document.getElementById("user-div").style.display="none";

    var user = firebase.auth().currentUser;

    if(user != null){
      var email_id = user.email;
      document.getElementById("user_p").innerHTML = "Welcome User:" + email;
    }

    // ...
  } else {
    // User is signed out
    document.getElementById("logIn-div").style.display="none";
    document.getElementById("user-div").style.display="block";
  }
});
function login() {
  var UserEmail = document.getElementById("email").value;
  var UserPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
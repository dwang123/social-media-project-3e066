var provider = new firebase.auth.GoogleAuthProvider();
var user;
var selectedFile;


function signIn() {
  	  console.log("sign in");
	firebase.auth().getRedirectResult().then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.

	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  user = result.user;
	  showWelcomeContainer();
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});

}
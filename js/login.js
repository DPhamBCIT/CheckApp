// Initialize Firebase
var config = {
  apiKey: "AIzaSyBvI9C9xDjGb5c8exGw5OiNduMWQFf-0dY",
  authDomain: "checkapp-data.firebaseapp.com",
  databaseURL: "https://checkapp-data.firebaseio.com",
  projectId: "checkapp-data",
  storageBucket: "checkapp-data.appspot.com",
  messagingSenderId: "385146664281"
};
firebase.initializeApp(config);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var email = user.email;
    if (document.referrer.indexOf(window.location.host) !== -1) {
      history.go(-1);
    } else {
      window.location.href = 'main.html';
    }
  } else {
    // User is signed out.
    ui.start('#content', uiConfig);
  }
});
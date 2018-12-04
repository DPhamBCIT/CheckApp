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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var email = user.email;
    $("#user").html(email);
    $("#login").hide();
    $("#logout").show();
    $("#bar").show();
    $("#logout > a").click(function (event) {
      event.preventDefault();
      console.log("login");
      firebase.auth().signOut();
    });
  } else {
    $("#login").show();
    $("#logout").hide();
    $("#bar").hide();
    $("#user").hide();
  }
});

$("#search_button").click(function (event) {
  if ($("#search_box").val() != "") {
    window.location.href = "overview.html";
  }
});

$("#search_box").on("keypress", function (event) {
  if (event.keyCode == 13 && $("#search_box").val() != "") {
    window.location.href = "overview.html";
  }
});
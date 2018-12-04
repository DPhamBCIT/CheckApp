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

var list = [];

firebase.database().ref("recGame").on("value", function(snapshot) {
  var data = snapshot.val();
  var keys = Object.keys(data);
  console.log(keys);
  
  var display = [];
  for (var i = 0; i < keys.length; i++) {
    if (i != 0 && i % 4 == 0) {
      list.push(display);
      display = [];
    }
    
    display.push(data[keys[i]]);
  }
  
  list.push(display);
  
  $("#free_app1_image").attr("src", list[0][0].image);
  $("#free_app2_image").attr("src", list[0][1].image);
  $("#free_app3_image").attr("src", list[0][2].image);
  $("#free_app4_image").attr("src", list[0][3].image);
  
  $("#free_app1_first").html(list[0][0].name);
  $("#free_app2_first").html(list[0][1].name);
  $("#free_app3_first").html(list[0][2].name);
  $("#free_app4_first").html(list[0][3].name);
  
  $("#free_app1_second").html(list[0][0].tag);
  $("#free_app2_second").html(list[0][1].tag);
  $("#free_app3_second").html(list[0][2].tag);
  $("#free_app4_second").html(list[0][3].tag);
  
  $("#free_app1_third").html(list[0][0].score);
  $("#free_app2_third").html(list[0][1].score);
  $("#free_app3_third").html(list[0][2].score);
  $("#free_app4_third").html(list[0][3].score);
  
  $("#paid_app1_image").attr("src", list[1][0].image);
  $("#paid_app2_image").attr("src", list[1][1].image);
  $("#paid_app3_image").attr("src", list[1][2].image);
  $("#paid_app4_image").attr("src", list[1][3].image);
  
  $("#paid_app1_first").html(list[1][0].name);
  $("#paid_app2_first").html(list[1][1].name);
  $("#paid_app3_first").html(list[1][2].name);
  $("#paid_app4_first").html(list[1][3].name);
  
  $("#paid_app1_second").html(list[1][0].tag);
  $("#paid_app2_second").html(list[1][1].tag);
  $("#paid_app3_second").html(list[1][2].tag);
  $("#paid_app4_second").html(list[1][3].tag);
  
  $("#paid_app1_third").html(list[1][0].score);
  $("#paid_app2_third").html(list[1][1].score);
  $("#paid_app3_third").html(list[1][2].score);
  $("#paid_app4_third").html(list[1][3].score);
  
  $("#free_left").css("visibility", "hidden");
  $("#paid_left").css("visibility", "hidden");
});

$("#free_right").click(function (event) {
  event.preventDefault();
  
  $("#free_app1_image").attr("src", list[2][0].image);
  $("#free_app2_image").attr("src", list[2][1].image);
  $("#free_app3_image").attr("src", list[2][2].image);
  $("#free_app4_image").attr("src", list[2][3].image);
  
  $("#free_app1_first").html(list[2][0].name);
  $("#free_app2_first").html(list[2][1].name);
  $("#free_app3_first").html(list[2][2].name);
  $("#free_app4_first").html(list[2][3].name);
  
  $("#free_app1_second").html(list[2][0].tag);
  $("#free_app2_second").html(list[2][1].tag);
  $("#free_app3_second").html(list[2][2].tag);
  $("#free_app4_second").html(list[2][3].tag);
  
  $("#free_app1_third").html(list[2][0].score);
  $("#free_app2_third").html(list[2][1].score);
  $("#free_app3_third").html(list[2][2].score);
  $("#free_app4_third").html(list[2][3].score);
  
  $("#free_left").css("visibility", "visible");
  $("#free_right").css("visibility", "hidden");
});

$("#free_left").click(function (event) {
  event.preventDefault();
  
  $("#free_app1_image").attr("src", list[0][0].image);
  $("#free_app2_image").attr("src", list[0][1].image);
  $("#free_app3_image").attr("src", list[0][2].image);
  $("#free_app4_image").attr("src", list[0][3].image);
  
  $("#free_app1_first").html(list[0][0].name);
  $("#free_app2_first").html(list[0][1].name);
  $("#free_app3_first").html(list[0][2].name);
  $("#free_app4_first").html(list[0][3].name);
  
  $("#free_app1_second").html(list[0][0].tag);
  $("#free_app2_second").html(list[0][1].tag);
  $("#free_app3_second").html(list[0][2].tag);
  $("#free_app4_second").html(list[0][3].tag);
  
  $("#free_app1_third").html(list[0][0].score);
  $("#free_app2_third").html(list[0][1].score);
  $("#free_app3_third").html(list[0][2].score);
  $("#free_app4_third").html(list[0][3].score);
  
  $("#free_left").css("visibility", "hidden");
  $("#free_right").css("visibility", "visible");
});
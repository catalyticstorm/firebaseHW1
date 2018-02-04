// JavaScript Document

//Initalize Firebrand
config = {
    apiKey: "AIzaSyDvTvoaHBTq1aLfgQYwywu78EfAS5ZtcM8",
    authDomain: "ilikeplanes-40604.firebaseapp.com",
    databaseURL: "https://ilikeplanes-40604.firebaseio.com",
    projectId: "ilikeplanes-40604",
    storageBucket: "",
    messagingSenderId: "180742341421"
  };
    firebase.initializeApp(config);
    var database = firebase.database();
    var dest = "";
    var flightNo = "";
    var origin = "";
    var gate = "";
	var theTime = "";
	var now = moment();
	
    $("#addFlight").on("click", function() {
      event.preventDefault();
      dest = $("#destInput").val().trim();
      flightNo = $("#flightNoInput").val().trim();
      origin = $("#originInput").val().trim();
      gate = $("#gateInput").val().trim();
	  theTime = $("#timeInput").val().trim();
	  

      database.ref().push({
        dest: dest,
        flightNo: flightNo,
        origin: origin,
		gate: gate,
        theTime: theTime
      });
    });
    database.ref().on("child_added", function(snapshot) {
      console.log(now.diff(theTime));
      console.log(snapshot.val().dest);
      console.log(snapshot.val().flightNo);
      console.log(snapshot.val().origin);
      console.log(snapshot.val().gate);
	  console.log(snapshot.val().theTime);
  $("tbody").after("<tr>");
  $("tbody").after("<td>" + now.diff(snapshot.val().theTime) + "</td>");
  $("tbody").after("<td>" + snapshot.val().theTime + "</td>");
  $("tbody").after("<td>" + snapshot.val().gate + "</td>");
  $("tbody").after("<td>" + snapshot.val().origin + "</td>");
  $("tbody").after("<td>" + snapshot.val().flightNo + "</td>");
  $("tbody").after("<td>" + snapshot.val().dest + "</td>");
  $("tbody").after("<tr>");




    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

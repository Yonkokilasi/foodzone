//login js
$(document).ready(function () {
  $("#landing").slideDown(4);
  var Anita = "A3220";
  $("form#blanks").submit(function (event) {
    event.preventDefault();
    var userInput = $("input#foodID").val();
    $("input#foodID").val("");
    if (userInput === Anita) {
      alert("Welcome to Anita's Kitchen");
    }
    else {
      alert("Sorry wrong ID try again");
    };
  });
});
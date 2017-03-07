//nav bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
//end 
//login js
$(document).ready(function () {
  $("#landing").slideDown(4000);
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
  jQuery(".pull_feedback").toggle(function () {
    jQuery("#feedback").animate({
      left: "0px"
    });
    return false;
  }, function () {
    jQuery("#feedback").animate({
      left: "-362px"
    });
    return false;
  }); //toggle
});
//end
//Feedback html
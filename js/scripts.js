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
});
//end

//feedback form
$(document).ready(function(){
jQuery(".pull_feedback").toggle(function(){
jQuery("#feedback").animate({left:"0px"});
return false;
},
function(){
jQuery("#feedback").animate({left:"-362px"});
return false;
}
); //toggle
}); //document.ready

//end


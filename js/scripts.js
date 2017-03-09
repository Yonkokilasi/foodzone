//nav bar
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";

}
<<<<<<< HEAD
//end 


=======
//end
>>>>>>> e6924e4ef62b60883e8864822fea344b241513b7
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
        } else {
            alert("Sorry wrong ID try again");
        };
    });

});
//end
//Feedback html

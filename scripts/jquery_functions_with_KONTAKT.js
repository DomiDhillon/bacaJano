// closed or open state of the navigation bar
let state = 'closed';
let contactState ='closed';

// // variables to exclude from closing menu trigger list
// let navigation = document.getElementById("navigation");
// let menu2hide = document.getElementById ("menu2hide");
// let contactButton = document.getElementById ("contactButton");
// // let menuButton = document.getElementById("menuButton");


$(document).ready(function(){ //This is to prevent any jQuery code from running before the document is finished loading (is ready).
    $(".menuButton").click(function(){
        if (state=='closed') {
            $("nav").show();
            state = 'open';
        } else{
            $("nav").hide();
            state = 'closed';
        }
    });

    $("#contactButton").click(function(){
        if (contactState == 'closed'){
            $("#contactEmail").slideDown();
            contactState = 'open';
        }else{
            $("#contactEmail").slideUp();
            contactState = 'closed';
        }
    });

});

document.onclick = function(e){
    // console.log(e.target.className)
    // if(e.target.id == "contactButton" || e.target.parentNode.id =="contactButton"){
    
    //     $('nav').hide();
    //     state = 'closed';
    // }
    if(e.target.id !== 'contactButton' && e.target.id !== 'navigation' && e.target.id !== 'menu2hide' && e.target.className !== 'brick' && e.target.id !== "contactButton" && e.target.parentNode.id !=="contactButton" ){
        
        if (contactState == 'open'){
            $("#contactEmail").hide();
            contactState = 'closed';
        }

        $('nav').hide();
        state = 'closed';
    }
};
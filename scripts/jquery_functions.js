let n = 0;

$(document).ready(function(){ //This is to prevent any jQuery code from running before the document is finished loading (is ready).
    $(".menuButton").click(function(){
        if (n%2==0) {
            $("nav").show();
            n= n+1;
        } else{
            $("nav").hide();
            n= n+1;
        }
    });
});

// $(document).ready(function(){ //close nav by clicking anywhere
//     $("body").click(function(){
//         if (n%2==1) {
//             $("nav").hide();
//             n= n+1;
//         }
//     });
// });

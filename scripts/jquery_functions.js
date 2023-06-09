// closed or open state of the navigation bar
let state = 'closed';

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
});

document.onclick = function(e){
    // console.log(e.target);
    if(e.target.id !== 'navigation' && e.target.id !== 'menu2hide' && e.target.className !== 'brick'){
        
        $('nav').hide();
        state = 'closed';
    }
    if(e.target.id == 'sheep' || e.target.parentNode.id == "sheep"){
        window.open('./visite.html');
    }
    if(e.target.className == 'closeButton' || e.target.parentNode.className == "closeButton"){
        window.close();
    }
};


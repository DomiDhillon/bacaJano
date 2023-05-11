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
    if(e.target.id !== 'navigation' && e.target.id !== 'menu2hide' && e.target.className !== 'brick'){
        
        $('nav').hide();
        state = 'closed';
    }
};

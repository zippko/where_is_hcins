$(document).ready(function() {
	$('#dialog').hide();
	
	$('#img-map').click(function(e) {
	    var offset = $(this).offset();
		$("#dialog").show();
	    $("#dialog").offset({left:e.pageX,top:e.pageY});	    
        imgX = (e.pageX - offset.left);
	    imgY = (e.pageY - offset.top);	    
    });

    $('button').click(function(){
        $('#dialog').hide(500);        
        whatGotClicked(this.id);
    })                   
});

function whatGotClicked(what){
	var selected = {};
	what === "btn-hcins" ? selected = hcins :
	selected = cancel;
    
	if (selected.name === "No") {
		$('#dialog').hide();
	} else {        
        if (imgX >= selected.x1 & imgX <= selected.x2 & imgY >= selected.y1 & imgY <= selected.y2) {
		    alert('You found ' + selected.name + '! Click OK and sign-up for HCINS hunt raffle.');	           
            window.location.replace("https://forms.office.com/r/XptmZSrMwx");      
		} else {
			alert('That is not ' + selected.name + ', Try Again!')
		}
	}
}
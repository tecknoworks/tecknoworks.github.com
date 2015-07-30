// Formular Log in + Inregistrare + Cos
    
    
        // Formular Log in
    var $overlay = $("#overlay");
    
    $("#buttonLoginFirst").click(function(event){
        event.preventDefault();
        
        $overlay.show("slow");   
    });
    
    
    $('#ics').click(function(){
        
        $overlay.hide("slow");
    });
    
    
        // Formular pentru client nou 
    var $overlayNewClient = $("#overlayNewClient");
    
    $("#clickNewClient").click(function(){
        $overlay.hide();
        $overlayNewClient.show();
    });
    
    $('#ics2').click(function(){
        
        $overlayNewClient.hide("slow");
    });
    
    $("#inreg").click(function(){
    
        $("#overlayNewClient").show("slow");
    });




        //COS
var $cos = $('#cos1');
var $overlayCos = $('#overlayCart');
//var arataCos=false;

$cos.click(function(){
    //var arataCos=true;
   $overlayCos.show("slow");
});


$('#ics3').click(function(){
       //var arataCos=false; 
    $overlayCos.hide("slow");
});
    





    
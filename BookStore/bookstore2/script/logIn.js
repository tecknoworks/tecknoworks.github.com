    // Formular Log in + Inregistrare
    
    
        // Formular Log in
    var $overlay = $("#overlay");
    
    /*var $bkg= $("<div id='fundalOverlay'></div>");
    var $formdiv = $("<div id='formdiv' ></div>");
    var $form = $("<form class='form-horizontal' id='formLogin' action='index.php' method='post'></form>");
    var $fTitle = $('<h2>Log in</h2>');
    var $ics = $("<img src='cross.png' id='ics'/>");
    var $username = $('<input type="email" name="inputMail" class="form-control" id="username" style="width: 72%; margin:0px auto; margin-top:40px;" placeholder="Adresa de mail" required/></br>');
    var $parola = $('<input type="password" name="inputParola" class="form-control" id="parola" style="width: 72%; margin:0px auto; margin-top:10px;" placeholder="Password" required/>');
    var $submit = $('<input type = "submit" id="loginButton" class="form-control" style="margin-top:12px; margin:0px auto; width:30%;"/></br>');*/
          
   /* $formdiv.append($fTitle); 
    $formdiv.append($ics); 
    $formdiv.append($form);   
    $form.append($username);
    $form.append($parola);
    $form.append("<p id='pswForgotp'>If you forgot your password</br>sent us an email, please!</p>")
    $form.append($submit);
    $form.append("<span>New clent?</span> <a id = 'clickNewClient' style='text-decoration: none; color: #C4E3FF;'> Click here!</a>")
    $overlay.append($bkg);
    $overlay.append($formdiv);
    $("body").append($overlay);*/
    
    
    $("#btn-login").click(function(event){
        event.preventDefault();
        
        $overlay.show("slow");
       // $(this).hide();
        
    });
    
    
    $('#ics').click(function(){
        
        $overlay.hide("slow");
        $("#btn-login").show();
    });
    
    
    
        // Formular pentru client nou 
    var $overlayNewClient = $("#overlayNewClient");
    
    /*var $bkgNclient=$("<div id='fundalOverlayNewClient'></div>");
    var $formdivNclient = $("<div id='formdivN' ></div>");
    var $formNclient = $("<form class='form-horizontal' id='formLogin' action='index.php' method='post'></form>");
    var $fTitleNclient = $('<h2>Sing Up</h2>');
    var $ics2 = $("<img src='cross.png' id='ics'/>");
    var $nume = $('<input type="text" name="newNume" class="form-control" style="width: 72%; margin:0px auto; margin-top:40px;" placeholder="Nume si prenume" required/></br>');
    var $mail = $('<input type="email" name="newMail" class="form-control" style="width: 72%; margin:0px auto; margin-top:40px;" placeholder="mail@yahoo.com" required/></br>');
    var $parolaN = $('<input type="password" name="newParola" class="form-control" style="width: 72%; margin:0px auto; margin-top:10px;" placeholder="Password" required/></br>');
    var $adresa = $('<input type="textarea" name="newAdresa" class="form-control" style="width: 72%; margin:0px auto; margin-top:10px;margin-bottom:25px;" placeholder="Introduceti adresa: strada, numarul"/>');
    var $submitN = $('<input type = "submit" class="form-control" style="margin-top:26px;margin-bottom:10px;width:60%;margin:0px auto;"/></br>');*/
    
    /*$formdivNclient.append($fTitleNclient); 
    $formdivNclient.append($ics2); 
    $formdivNclient.append($formNclient);   
    $formNclient.append($nume);
    $formNclient.append($mail);
    $formNclient.append($parolaN);
    $formNclient.append($adresa);
    $formNclient.append($submitN);
    $overlayNewClient.append($formdivNclient);
    $overlayNewClient.append($bkgNclient);
    $("body").append($overlayNewClient);*/
    
    $("#clickNewClient").click(function(){
        $overlay.hide();
        $overlayNewClient.show();
    });
    
    $('#ics2').click(function(){
        
        $overlayNewClient.hide("slow");
        //$("#btn-login").show();
    });
    
    $("#inreg").click(function(){
    
        $("#overlayNewClient").show("slow");
    });

    
    
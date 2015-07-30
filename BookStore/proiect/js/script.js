var loginData;
var registerData;
var cookieName = "DoriaBookStoreUser";

$(document).ready(function () {
  jNorthPole.BASE_URL = 'https://json.northpole.ro/';
  var existingCookie = getCookie(cookieName);
  //debugger;
  if (existingCookie != "") {
    loginData = JSON.parse(existingCookie);
    $("#btn-login").hide();
    $("#btn-logout").show();
  }
  
  userDisplayName
  $("#btn-login").click(function (){
    doLogin();
  });
  
  $("#btn-logout").click(function (){
    expireCookie(cookieName);    
    });
});

successHandler = function (data) {
    var userDetails = data[0];
    setCookie(cookieName, JSON.stringify(loginData), 1);
    //debugger;
};

$("#btn-inreg").click(function register() {
    registerData = {api_key:"", secret:""};
    registerData.api_key = $("#newUser").val();
    registerData.secret = $("#newpassword").val();  
    jNorthPole.createUser(registerData.api_key, registerData.secret, function (data) {
            if (data != undefined && data.length > 0){
                jNorthPole.createStorage(registerData, function (data) {
                     if (data == undefined){
                         debugger;
                          };
                });
                }
        });
});
function doLogin(){
    loginData = {api_key:"",secret:""};
    loginData.api_key = $("#username").val();
    loginData.secret = $("#password").val();   
    jNorthPole.getStorage(loginData, successHandler);
    //$("#pag").hide();
    //$("#userProfile").show();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60  *60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0)   return c.substring(name.length,c.length);
    }
    return "";
}

function expireCookie(cname) {
     setCookie(cname, "", -1);
}

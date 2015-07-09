var app = angular.module('firstPageModule',[]);
app.controller('firstPageController', function ($scope){
    $scope.username = "";
    $scope.password = "";
    $scope.repassword = "";
    
    $scope.init = function (){
        var currentUser = setCookie(gamersCurrentUserCookie);
        if( document.cookie.indexOf('gamersCurrentUserCookie=') > 0) {
    alert("Cookie not found, redirecting you.");
    location.href = 'index.html';};
    }
    $scope.registerUser = function () {
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        responseHandler = function (data) {console.log(data);};
        jNorthPole.createUser($scope.username, $scope.password, responseHandler);
    }
    
    $scope.usernameLogin = "";
    $scope.passwordLogin = "";
    $scope.loginUser = function () {
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        jsonObj = {
            "api_key": $scope.usernameLogin,    
            "secret": $scope.passwordLogin
        }
        jNorthPole.getStorage(jsonObj, responseHandler); 
    }
    
var validPeriod = 24 * 60 * 60 * 1000;
var gamersCurrentUserCookie = gamersCurrentUserCookie;

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + validPeriod);
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
    
function eraseCookie(gamersCurrentUserCookie) {
    setCookie(cname, cvalue, -1);
}
    
responseHandler = function (data){
    if(data[0].id != undefined)
    {
        setCookie(gamersCurrentUserCookie, data[0].id)
    }

};
    });



/*
function validarenume() {
    var x = document.forms["form"]["email"].value;
    if (x == null || x == "") {                                        //verifica daca este un email scris
        alert("Please enter your email.");
        return false;
    }
	var y = document.forms['form']['pass'].value;
    if (y == null || y == "") {
        alert("Please enter your password.");                               // verifica daca este un nume scris
        return false;
    }
	var z = document.forms['form']['prenume'].value;
    if (z === null || z == "") {
        alert("Nu ati scris un prenume.");                            // verifica daca este un prenume scris - not yet used
        return false;
    }
	var q = document.forms['form']['mail'].value;
    if (q == null || q == "") {
        alert("Nu ati scris un email.");                           // verifica daca este un email scris - not used yet
        return false;
    }
}
*/
//cookie pt login
/*
var myApp = angular.module('myApp', ['ngCookies']);

myApp.controller('MyController', ['$scope','$cookies','$cookieStore','$window', function($scope,$cookies,$cookieStore,$window) {
  $cookies.usernameLogin = '';
  $scope.platformCookie = $cookies.usernameLogin;
  $cookie.put($scope.usernameLogin,'');
  $cookieStore.put('M','');
  $scope.myCookie= $cookieStore.get('');
}]);
*/

/*
    $scope.setCookie = function () {
    var lastVal = $cookies.get('lastValue');
    if
        
        $cookies.userName = $scope.usernameLogin;
        var now = new Date()
        var time = now.getTime();
        time += 24*60*60*1000*7;
        now.setTime(time);
         cookieLength = (rawDocument.cookie = escape(name) + '=' + escape(value) +
                 ';path=' + cookiePath+";expires="+now.toGMTString()).length + 1
        $cookies.put('Username','api_key', {'expires': time})
        $cookies.put('Password','secret')
        
*/
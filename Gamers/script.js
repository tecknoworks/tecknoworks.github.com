var userId = "userID";

var app = angular.module('firstPageModule',[]);

app.controller('firstPageController', function ($scope){
    $scope.username = "";
    $scope.password = "";
    $scope.repassword = "";
    $scope.registerUser = function () {
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        responseHandler = function (data) {console.log(data);};
        jNorthPole.createUser($scope.username, $scope.password, responseHandler);
    }
    
    $scope.init = function(){
        var isUserIn = localStorage.getItem(userId); 
        if(isUserIn && isUserIn.length > 0)
        {
            location.href = 'main.html';
        };
    };

function logOut()
{localStorage.clear(userId);};
    
    $scope.usernameLogin = "";
    $scope.passwordLogin = "";
    $scope.loginUser = function () {
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        jsonObj = {
            "api_key": $scope.usernameLogin,    
            "secret": $scope.passwordLogin
        };
        jNorthPole.getStorage(jsonObj, responseHandler); 
    }
      
responseHandler = function (data){
    if(data[0].id != undefined)
    {
        localStorage.setItem(userId,data[0].id);
        location.href = 'main.html';
    }
}
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
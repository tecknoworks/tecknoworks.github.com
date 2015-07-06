var app = angular.module('firstPageModule', []);
app.controller('firstPageController', ['$scope', function ($scope) {
    $scope.email = " ";
    $scope.password = " ";
    $scope.repassword = " ";
    $scope.registerUser = function () {
        debugger;
        alert("");
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        jsonObject = {
            "api_key": $scope.email,
            "secret": $scope.password
        }
        jNorthPole.getStorage(jsonObject, registerResponseHandler);}
    
    
}]);
                                       
registerResponseHandler = function (data) {
            alert("Success");
                                       };
		
		
		
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
        alert("Nu ati scris un prenume.");                           // verifica daca este un prenume scris - not yet used
        return false;
    }
	var q = document.forms['form']['mail'].value;
    if (q == null || q == "") {
        alert("Nu ati scris un email.");                           // verifica daca este un email scris - not used yet
        return false;
    }
}

//cookie pt login


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}
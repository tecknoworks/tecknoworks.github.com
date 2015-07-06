var app = angular.module('firstPageModule', []);

app.controller('firstPageController', ['$scope', function ($scope) {
    $scope.email = " ";
    $scope.password = " ";
    $scope.repassword = " ";
    $scope.registerUser = function () {
        alert(".");
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        jsonObject = {
            "api_key": $scope.email,
            "secret": $scope.password
        }
        responseHandler = function (data) {console.log(data);
                                          };
        jNorthPole.postUser(jsonObject, responseHandler);
    }
}]);

responseHandler = function (data) { alert("Success");
        };    

var app = angular.module('firstPageModule', []);

app.controller('firstLoginController', ['$scope', function ($scope) {
    $scope.email = " ";
    $scope.password = " ";
    $scope.loginUser = function () {
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        jsonObject = {
            "api_key": $scope.email,
            "secret": $scope.password
        }
        responseHandler = function (data) {console.log(data);
        };
        jNorthPole.getStorage(jsonObject, responseHandler);}
}]);

responseHandler = function (data) {
            alert("Success");
                                       };			
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
        alert("Nu ati scris un prenume.");                           // verifica daca este un prenume scris - not yet used
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

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

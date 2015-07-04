
var app = angular.module('firstPageModule', []);
app.controller('firstPageController', function($scope) {
    $scope.email = "",
    $scope.password = ""
    $scope.repassword = "";
    $scope.registerUser = function(){
     			debugger;
     			alert("");
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        jsonObject = {
            "api_key": $scope.email,
            "secret": $scope.password
        }
        jNorthPole.getStorage(jsonObject, registerResponseHandler);
	}
    
    
});
registerResponseHandler = function (data) {
            alert("success");
        };
		
		
		
function validarenume() {
    var x = document.forms["form"]["email"].value;
    if (x == null || x == "") {                                        //verifica daca este un email scris
        alert("Please enter your email.");
        return false;
    }
	var y = document.forms["form"]["pass"].value;
    if (y == null || y == "") {
        alert("Please enter your password.");                               // verifica daca este un nume scris
        return false;
    }
	var z = document.forms["form"]["prenume"].value;
    if (z == null || z == "") {
        alert("Nu ati scris un prenume.");                           // verifica daca este un prenume scris - not yet used
        return false;
    }
	var q = document.forms["form"]["mail"].value;
    if (q == null || q == "") {
        alert("Nu ati scris un email.");                           // verifica daca este un email scris - not used yet
        return false;
    }
}
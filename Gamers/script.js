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
    
    });

responseHandler = function (data){
    if(data[0].id != undefined)
    {
        localStorage.setItem(userId,data[0].id);
        location.href = 'main.html';
    };
}

app.controller('secondPageController',function ($scope){
    $scope.logOut=function(){
        var isUserIn= localStorage.getItem(userId);
        if (isUserIn && isUserIn.length > 0) {
        localStorage.removeItem(userId);
        };
    }

});


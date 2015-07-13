var userId = "userID";

var app = angular.module('firstPageModule', []);

app.controller('firstPageController', function ($scope) {
    $scope.init = function () {
        var isUserIn = localStorage.getItem(userId);
        if (isUserIn && isUserIn.length > 0) 
        {
            location.href = 'main.html';
            window.alert("Welcome back!");
        }
    };
});

app.controller('registerController', function ($scope) {
    $scope.username = "";    
    $scope.password = "";
    $scope.repassword = "";
    $scope.registerUser = function () {
        jNorthPole.BASE_URL = 'https://json.northpole.ro/'; 
        jNorthPole.createUser($scope.username, $scope.password, function (data) {
            if (data = undefined){
                debugger
            };
        });
        jsonObj = {
            'api_key': $scope.username,
            'secret': $scope.password
        };
        jNorthPole.createStorage(jsonObj,function (data) {
            if (data = undefined){
                debugger
            };
        });
        jNorthPole.putStorage(jsonObj, function (data) {
            if (data = undefined){
                debugger
            };
        }); 
    };
});

app.controller('loginController', function ($scope) {
    $scope.usernameLogin = "";
    $scope.passwordLogin = "";
    $scope.loginUser = function () {
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        jsonObj = {
            'api_key': $scope.usernameLogin,
            'secret': $scope.passwordLogin
        };
        jNorthPole.getStorage(jsonObj, function (data) {
        if (data[0].id != undefined)
        {
        localStorage.setItem(userId,data[0].id);
        location.href = 'main.html';
        } 
    });
    };
});

app.controller('secondPageController', function ($scope) {
    $scope.logOut = function () {
        var isUserIn = localStorage.getItem(userId);
        if (isUserIn && isUserIn.length > 0) {
            localStorage.removeItem(userId);
        }
    };
});
    
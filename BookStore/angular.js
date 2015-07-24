(function () {    
    var app = angular.module('storeApp', []);
    
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
    
    
})();
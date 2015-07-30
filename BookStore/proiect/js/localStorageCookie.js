   //check for IE8 or less
    if(($.browser.msie) && parseFloat($.browser.version)&lt8)
    {
        $("html").addClass('oldIE');
    }

    else
    {
        //localstorage
         $("html").addClass('newBrowser');
    }
                     

    //daca e browser vechi se foloseste COOKIE
if(($('html')).hasClass('oldIE')){
    var app = angular.module('storeApp', ['ngCookies']);
    var cookieName = "DoriaBookStoreUser"; 
    var showName;
    
app.controller('pageController', ['$scope','$cookies', function($scope,$cookies) {
    var existingCookie = $cookies.get(cookieName);
    //debugger;
        
    if (existingCookie !== "") {
        $scope.model.loginData = JSON.parse(existingCookie);
        $("#btn-login").hide();
        $("#btn-logout").show();
    }     // daca exista cookie, atunci se iau datele din el
      
                                          
    else // daca nu exista 
    {
    
    $scope.model = {loginData: {api_key:"",secret:""}, 
                    registerData: {api_key:"", secret:""},
                    userProfile: {arata: 'false'}
                    };
    
               //REGISTER
    $scope.registerUser = function () {
    jNorthPole.BASE_URL = 'https://json.northpole.ro/'; 
    $scope.model.registerData.api_key = $scope.newUser;
    $scope.model.registerData.secret = $scope.newpassword;  
    jNorthPole.createUser($scope.model.registerData.api_key, $scope.model.registerData.secret, function (data) {
            if (data != undefined && data.length > 0){
                jNorthPole.createStorage($scope.model.registerData.api_key,function (data) {
                    if (data.length > 0 && data != undefined  && data.api_key!=""){
                        
                    };//end if
                }); //end create storage
            }; //end if
        }); //end create user
    }; // end register user

        //LOGIN

    $scope.loginUser = function () {
        jNorthPole.BASE_URL = 'https://json.northpole.ro/';
        $scope.model.loginData.api_key = $scope.username ;
        $scope.model.loginData.secret = $scope.password;   
        jNorthPole.getStorage($scope.model.loginData, function(data){
            if (data.length > 0 && data[0].id != undefined && $scope.model.loginData.api_key != '' && $scope.model.loginData.secret != '')
            {
                $('#btn-login').hide();
                $('#btn-logout').show();
                $scope.model.userProfile.arata = true;
                
                $cookies.put(cookieName, JSON.stringify($scope.model.loginData));
            } 
        }); //end getStorage
     }; //end loginUser
    }; //end else
   
    $scope.logout = function() {
            remove(cookieName, []);
            $('#btn-logout').hide();
            $('#btn-login').show();
            $('#userProfile').hide();
            document.getElementById("loginform").reset();
        };

        
}]);
} //end if

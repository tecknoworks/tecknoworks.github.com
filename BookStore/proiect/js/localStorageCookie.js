   
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
    
     //$scope.model.loginData.api_key="andi";
     //$scope.model.loginData.secret="andisecret";
    
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
                //localStorage.setItem('user',JSON.stringify(data));
                $('#btn-login').hide();
                $('#btn-logout').show();
                $scope.model.userProfile.arata = true;
                //$scope.showName =  JSON.parse(localStorage.getItem('user'))[0];
                
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

    /*
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60  *60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    };

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0)   return c.substring(name.length,c.length);
        }
        return "";
    };

    function expireCookie(cname) {
        setCookie(cname, "", -1);
    };
    */
} //end if

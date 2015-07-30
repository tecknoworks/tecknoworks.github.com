'use strict';
jNorthPole.BASE_URL = 'https://json.northpole.ro/'; 
    
    //define the angular application
var app = angular.module('storeApp', []);

var user; // definim o variabila in care sa va stoca apoi prin localStorage   
var showName;
var idUser="";
var storageData = {api_key: "", secret: "", id: "", basket:[]}
var idStorage;
var basket=[];
var hereIstheUser = 'false';
    
app.controller('userIn', function ($scope,$rootScope) {
    window.$rootScope = $rootScope;
    $scope.init = function () {
        var userData = getFromStorage('user');
        if (userData != null && userData.length > 0)
        {
            storageData = JSON.parse(getFromStorage('user'));
            var basketStorageData = JSON.parse(getFromStorage('prodCos'));
            for(var idx = 0; idx <= basketStorageData.length; idx++)
            {
                basket.push({productId: basketStorageData[idx].productId, productName: basketStorageData[idx].productName, productPrice: basketStorageData[idx].productPrice});
            }
            /*$scope.$on('idPutStorage', function(event, args){
                basket = args;
               debugger;
            });*/
            var key = JSON.parse(userData).api_key;
            if (key && key.length > 0)
            {
                $scope.hereIstheUser = true;
                $scope.showName =  JSON.parse(userData);
                $('#buttonLoginFirst').hide();
                $('#btn-logout').show();
                $('#inreg').hide();
            }
            //else {$scope.hereIstheUser = true}
        }
    };
});
    
app.controller('itemsController', function($scope, $rootScope){
    window.$rootScope = $rootScope;
    $scope.testName = "testName";
    $scope.basketShow = basket;
    debugger;
    var $overlayCos = $('#overlayCart').show();

    $scope.products = [
            {
               id: 1,
               title: 'Amintiri si povestiri mai deocheate',
               author: 'Neagu Djuvara',
                imgPath: "poze/cb1.jpg",
               price: 53.13,
                category: 'biografii',
            },
            {
               id: 2,
               title: 'Coco Chanel',
               author: 'Edmonde Charles Roux',
                imgPath: "poze/cb2.jpg",
               price: 10.50,
                category: 'biografii',
            },
            {
               id: 3,
               title: 'Eu sint Malala',
               author: 'Autor',
                imgPath: "poze/cb3.jpg",
               price: 24.37,
                category: 'biografii',
            },
            {
               id: 4,
               title: 'Grace de Monaco',
               author: 'Jean des Cars',
                imgPath: "poze/cb4.jpg",
               price: 31.50,
                category: 'biografii',
            },
            {
                id: 5,
                title: 'Pas cu pas',
                author: 'Klaus Iohannis',
                imgPath: "poze/cb5.jpg",
                price: 13.20,
                category: 'biografii',
            },
            {
                id: 6,
                title: 'Jurnalul Annei Frank',
                author: 'Autor1',
                imgPath: "poze/cb6.jpg",
                price: 27.96,
                category: 'biografii',
            },
            {
                id: 7,
                title: 'Jurnalul fericirii',
                author: 'N. Steinhardt',
                imgPath: "poze/cb7.jpg",
                price: 4.98,
                category: 'biografii',
            },
            {
                id: 8,
                title: 'Si am spus da',
                author: 'Elizabeth Gilbert',
                imgPath: "poze/cb8.jpg",
                price: 18.55,
                category: 'biografii',
            },
            {
               id: 9,
               title: 'Cartea gesturilor',
               author: 'Joseph si Caroline Messinger',
                imgPath: "poze/cs1.jpg",
               price: 45.43,
                category: 'specialitate',
            },
            {
               id: 10,
               title: 'Sigmund Freud',
               author: 'Edmonde Charles Roux',
                imgPath: "poze/cs2.jpg",
               price: 21.96,
                category: 'specialitate',
            },
            {
               id: 11,
               title: 'Scurta istore a pamantului',
               author: 'Stephen W. Hawking',
                imgPath: "poze/cs3.jpg",
               price: 25.90,
                category: 'specialitate',
            },
            {
               id: 12,
               title: 'Focus',
               author: 'Daniel Goleman',
                imgPath: "poze/cs4.jpg",
               price: 21.75,
                category: 'specialitate',
            },
            {
                id: 13,
                title: 'Fizica povestita',
                author: 'Cristian Presura',
                imgPath: "poze/cs5.jpg",
                price: 19.25,
                category: 'specialitate',
            },
            {
                id: 14,
                title: 'Socrul si profanul',
                author: 'Mircea Eliade',
                imgPath: "poze/cs6.jpg",
                price: 76.23,
                category: 'specialitate',
            },
            {
                id: 15,
                title: 'In pielea unei jihadiste',
                author: 'Anna Erelle',
                imgPath: "poze/cs7.jpg",
                price: 12.73,
                category: 'specialitate',
            },
            {
                id: 16,
                title: 'Dialogvi Socreati',
                author: 'Platon',
                imgPath: "poze/cs8.jpg",
                price: 18.55,
                category: 'specialitate',
            },
        {
               id: 17,
               title: 'Sub aceeasi stea',
               author: 'John Green',
                imgPath: "poze/cf1.jpg",
               price: 21.11,
                category: 'fictiune',
            },
            {
               id: 18,
               title: 'Hunger Games',
               author: 'Suzanne Collins',
                imgPath: "poze/cf2.jpg",
               price: 17.04,
                category: 'fictiune',
            },
            {
               id: 19,
               title: 'Hunger Games - revolta',
               author: 'Suzanne Collins',
                imgPath: "poze/cf3.jpg",
               price: 17.04,
                category: 'fictiune',
            },
            {
               id: 20,
               title: 'Hunger Games - sfidarea',
               author: 'Suzanne Collins',
                imgPath: "poze/cf4.jpg",
               price: 17.04,
                category: 'fictiune',
            },
            {
                id: 21,
                title: 'Ce ne spunem cand nu ne vorbim',
                author: 'Chris Simon',
                imgPath: "poze/cf5.jpg",
                price: 19.43,
                category: 'fictiune',
            },
            {
                id: 22,
                title: 'Orase de hartie',
                author: 'John Green',
                imgPath: "poze/cf6.jpg",
                price: 26.13,
                category: 'fictiune',
            },
            {
                id: 23,
                title: 'Elixirul Dragostei ',
                author: 'Schmitt',
                imgPath: "poze/cf7.jpg",
                price: 17.50,
                category: 'fictiune',
            },
            {
                id: 24,
                title: 'Oscar si tanti roz',
                author: 'Schmitt',
                imgPath: "poze/cf8.jpg",
                price: 18.55,
                category: 'fictiune',
            },
        {
               id: 25,
               title: 'Micul Print',
               author: 'Antoine de Saint-Exupery',
                imgPath: "poze/cc1.jpg",
               price: 6.35,
                category: 'copii',
            },
            {
               id: 26,
               title: 'Regatul de Gheata',
               author: 'Disney',
                imgPath: "poze/cc2.jpg",
               price: 23.94,
                category: 'copii',
            },
            {
               id: 27,
               title: 'Proverbe si expresii comentate',
               author: 'Autor ',
                imgPath: "poze/cc3.jpg",
               price: 7.96,
                category: 'copii',
            },
            {
               id: 28,
               title: 'Catelusul Schiop',
               author: 'Elena Farago',
                imgPath: "poze/cc4.jpg",
               price: 7.96,
                category: 'copii',
            },
            {
                id: 29,
                title: '365 de povesti de seara',
                author: 'Disney',
                imgPath: "poze/cc5.jpg",
                price: 59.94,
                category: 'copii',
            },
            {
                id: 30,
                title: 'Pisicile Razboinice',
                author: 'Erin Hunter',
                imgPath: "poze/cc6.jpg",
                price: 14.98,
                category: 'copii',
            },
            {
                id: 31,
                title: 'A-Nelorit o Papadie',
                author: 'Otilia Cazimir',
                imgPath: "poze/cc7.jpg",
                price: 7.96,
                category: 'copii',
            },
            {
                id: 32,
                title: 'Amintiri din copilarie',
                author: 'Ion Creanga',
                imgPath: "poze/cc8.jpg",
                price: 5.25,
                category: 'copii',
            },
            {
               id: 33,
               title: 'Enciclopedia lumii pentru copii',
               author: 'Corint',
                imgPath: "poze/ce1.jpg",
               price: 26.45,
                category: 'dictionare',
            },
            {
               id: 34,
               title: 'Corpul Omenesc',
               author: 'Prima mea enciclopedie',
                imgPath: "poze/ce2.jpg",
               price: 13.25,
                category: 'dictionare',
            },
            {
               id: 35,
               title: 'Dictionar de expresii si locutiuni',
               author: 'Autor ',
                imgPath: "poze/ce3.jpg",
               price: 14.29,
                category: 'dictionare',
            },
            {
               id: 36,
               title: 'Animale',
               author: ' ',
                imgPath: "poze/ce4.jpg",
               price: 70.23,
                category: 'dictionare',
            },
            {
                id: 37,
                title: 'Marea carte despre razboinici',
                author: ' ',
                imgPath: "poze/ce5.jpg",
                price: 22.93,
                category: 'dictionare',
            },
            {
                id: 38,
                title: 'Mayasii, o civilizatie pierduta',
                author: 'Claude Baudez si Sydney Picasso',
                imgPath: "poze/ce6.jpg",
                price: 6.63,
                category: 'dictionare',
            },
            {
                id: 39,
                title: 'Dex',
                author: 'dex',
                imgPath: "poze/ce7.jpg",
                price: 77.06,
                category: 'dictionare',
            },
            {
                id: 40,
                title: 'DOOM',
                author: 'Academia Romana',
                imgPath: "poze/ce8.jpg",
                price: 43.55,
                category: 'dictionare',
            }
        ];
        

      /* $scope.invoice = {
            items: [{
                qty: 10,
                description: 'item',
                cost: 9.95}]
        };
    
        $scope.addItem = function() {
            $scope.invoice.items.push({
                qty: 1,
                description: '',
                cost: 0
            });
        },

        $scope.removeItem = function(index) {
            $scope.invoice.items.splice(index, 1);
        }, */

        $scope.total = function() {
            var total = 0;
            angular.forEach($scope.basketShow, function(item) {
                total += item.productPrice;
            })
            return total;
        }
        
        $scope.insertItemDB = function(productId, productName, productPrice) {
            var productDetails = {productId, productName, productPrice};
            basket.push(productDetails);
            saveToStorage('prodCos',JSON.stringify(basket));
            var dataForLogin = {api_key:storageData.api_key, secret:storageData.secret};
            if(storageData.api_key != "", storageData.secret != "", storageData.id != ""){
                var jObj = {id: storageData.id, api_key: storageData.api_key, secret: storageData.secret, basket: basket};
                jNorthPole.putStorage(jObj, function(data){
                        debugger;
                    //$scope.$emit('idPutStorage', basket);
                    });
              
                /*jNorthPole.getStorage(dataForLogin, function(data){
                  //  debugger;
                    var toateProd = JSON.parse(getFromStorage('prodCos'))
                });*/
        }}
        
        $scope.deleteItemDB = function(productId, productName, productPrice){
        
            jNorthPole.deleteStorage(dataForLogin, function(data){
                $scope.basket = [];
            });
        
        }
}); //end controller*/
        
    


app.controller('pageController', function($scope,$rootScope){
    window.$rootScope = $rootScope;
    $scope.model = {loginData: {api_key: "",secret: ""}, 
                    registerData: {api_key: "", secret: "", basket:[{name:"", price:"", qty:""}]},
                    
                    userProfile: {isLoggedIn: false}
                    };
    
    
     //$scope.model.loginData.api_key="andi";
     //$scope.model.loginData.secret="andisecret";
    
               //REGISTER
    $scope.registerUser = function () {
    $scope.model.registerData.api_key = $scope.newUser;
    $scope.model.registerData.secret = $scope.newpassword;  
    jNorthPole.createUser($scope.model.registerData.api_key, $scope.model.registerData.secret, function (data) {
            if (data != undefined && data != null && data.api_key!=""){
                jNorthPole.createStorage($scope.model.registerData, function (data) {
                    if (data != undefined){
                       // storageData.api_key = $scope.username;
                       // storageData.secret = $scope.password;
                        
                        
                        $('#overlayNewClient').hide();
                        $("#overlay").show();
                        $('#inreus').show();
                    };//end if
                }); //end create storage
            }; //end if
        }); //end create user
    }; // end register user

        //LOGIN

    $scope.loginUser = function () {
        $scope.model.loginData.api_key = $scope.username ;
        $scope.model.loginData.secret = $scope.password;
        $scope.model.userProfile.isLoggedIn = true;
        jNorthPole.getStorage($scope.model.loginData, function(data){
            if (data.length > 0 && data[0].id != undefined && $scope.model.loginData.api_key != '' && $scope.model.loginData.secret != '')
            {
                debugger;
                
                for(var i=0; i<data.length; i++){
                    if(typeof(data[i].basket) !== 'undefined')
                    {
                        storageData.api_key = $scope.username;
                        storageData.secret = $scope.password;
                        storageData.id = data[i].id;
                        storageData.basket = data[i].basket;
                    }
                }
                
                saveToStorage('user',JSON.stringify(storageData));
                $('#inreg').hide();
                $('#btn-logout').show();
                $('#buttonLoginFirst').hide();
                $overlay.hide("slow");
                $scope.model.userProfile.isLoggedIn = true;
                $scope.showName =  JSON.parse(getFromStorage('user')); 
                //$('#userIsLoggedIn').show();
            } 
           // else{$scope.model.userProfile.isLoggedIn = 'false';};
        }); //end getStorage
     }; //end loginUser
    
   
    $scope.logout = function() {
            removeFromStorage('user');
            $('#btn-logout').hide();
            $('#buttonLoginFirst').show();
            $('#inreg').show();
            //document.getElementById("loginform").reset();
            $('#hereIstheUser').hide();
            $scope.model.userProfile.isLoggedIn = false;
        };
    
}); //end controller








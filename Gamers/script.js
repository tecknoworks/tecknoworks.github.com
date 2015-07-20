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
            if (data == undefined){
                debugger
            };
        });
        jsonObj = {
            'api_key': $scope.username,
            'secret': $scope.password
        };
        jNorthPole.createStorage(jsonObj,function (data) {
            if (data == undefined){
                debugger
            };
        });
        jNorthPole.putStorage(jsonObj, function (data) {
            if (data == undefined){
                debugger
            };
        }); 
        if (data != undefined ) {
            location.href = 'index.html'
        };
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
    

/*

angular.module('app').controller('Shell', Shell);

function Shell() {

  var vm = this;

  vm.messages = [
    {
      'username': 'username1',
      'content': 'Hi!'
    },
    {
      'username': 'username2',
      'content': 'Hello!'
    },
    {
      'username': 'username2',
      'content': 'Hello!'
    },
    {
      'username': 'username2',
      'content': 'Hello!'
    },
    {
      'username': 'username2',
      'content': 'Hello!'
    },
    {
      'username': 'username2',
      'content': 'Hello!'
    }
  ];

  vm.username = 'username1';

  vm.sendMessage = function(message, username) {
    if(message && message !== '' && username) {
      vm.messages.push({
        'username': username,
        'content': message
      });
    }
  };

}
*/





// Do not edit below pls //


// design 'scripts' //

function showHideDiv(id){
  var obj = document.getElementById(id);
    if (obj.style.display=="none"){
      obj.style.display='block';
    } else if(obj.style.display=="block"){
      obj.style.display='none';
    }
}





// *** TO BE CUSTOMISED ***

var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// http://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // http://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
    // http://www.thesitewizard.com/javascripts/cookies.shtml
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}



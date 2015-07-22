(function() {
  if (!window.jQuery) {
    throw 'jQuery library missing';
  }

  window.jNorthPole = {
    BASE_URL: '/',
    help: function() {
      return console.log("NorthPole js library - requires jQuery\n\nExample usage:\n\nVanilla JS:\n\n  responseHandler = function (data) {\n    console.log(data);\n  };\n\n  jNorthPole.BASE_URL = '/';\n  jNorthPole.getStorage(json, responseHandler);\n\nCoffeeScript:\n\n  responseHandler = (data) ->\n    console.log data\n\n  jNorthPole.BASE_URL = '/'\n  jNorthPole.getStorage(json, responseHandler)");
    },
    genericRequest: function(jsonObj, method, endPoint, responseHandler, errorHandler) {
      if (errorHandler == null) {
        errorHandler = responseHandler;
      }
      if (responseHandler == null) {
        throw 'responseHandler function missing';
      }
      return $.ajax({
        type: method,
        url: "" + this.BASE_URL + endPoint + ".json",
        data: JSON.stringify(jsonObj),
        success: function(data, textStatus, jqXHR) {
          return responseHandler(data);
        },
        error: function(jqXHR, textstatus, errorthrown) {
          console.log(jqXHR.responseText);
          return errorHandler(JSON.parse(jqXHR.responseText));
        }
      });
    },
    createUser: function(api_key, secret, success, failure) {
      var jsonObj;
      jsonObj = {
        'api_key': api_key,
        'secret': secret
      };
      return this.genericRequest(jsonObj, 'POST', 'user', success, failure);
    },
    createStorage: function(jsonObj, responseHandler, errorHandler) {
      if (errorHandler == null) {
        errorHandler = responseHandler;
      }
      return this.genericRequest(jsonObj, 'POST', 'storage', responseHandler, errorHandler);
    },
    putStorage: function(jsonObj, responseHandler, errorHandler) {
      return this.genericRequest(jsonObj, 'PUT', 'storage', responseHandler, errorHandler);
    },
    getStorage: function(jsonObj, responseHandler, errorHandler) {
      return this.genericRequest(jsonObj, 'SEARCH', 'storage', responseHandler, errorHandler);
    },
    deleteStorage: function(jsonObj, responseHandler, errorHandler) {
      return this.genericRequest(jsonObj, 'DELETE', 'storage', responseHandler, errorHandler);
    }
  };

}).call(this);
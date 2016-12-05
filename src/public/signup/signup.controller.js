

(function () {
"use strict";

angular.module('public')
.controller('SignupController', [ '$scope','$location','Order','MenuService',SignupController]);

function SignupController( $scope, $location,Order,MenuService) {
  var reg = this;
  reg.invalidItem = false;
  console.log('SignupController is here');
  console.log("Order: "+Order);

  reg.submit = function(){

    var promise = MenuService.getMenuItem(reg.menuNumber);
    promise.then(function(response){
      Order.setItem(response, reg);

      console.log(response);
      $location.path('/successPage');
    },function(data){
      reg.invalidItem = true;
      console.log("error retrieving data");
    });
  }
}

})();

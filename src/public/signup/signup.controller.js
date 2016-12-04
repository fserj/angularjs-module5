

(function () {
"use strict";

angular.module('public')
.controller('SignupController', [ '$scope','$location','Order',SignupController]);

function SignupController( $scope, $location,Order) {
  var reg = this;

  console.log('SignupController is here');
  console.log("Order: "+Order);

  reg.submit = function(){
    console.log(reg.firstName);
    console.log(reg.lastName);
    console.log(reg.email);
    console.log(reg.phone);
    console.log(reg.menuNumber);
    Order.setItem(reg.menuNumber);

    console.log("form submited");

    //$location.path("SuccessPage");
    $location.path('/successPage');

  }
}

})();

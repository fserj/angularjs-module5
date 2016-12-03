

(function () {
"use strict";

angular.module('public')
.controller('SignupController', [ '$scope','$location',SignupController]);

function SignupController( $scope, $location) {
  var reg = this;

  console.log('SignupController is here');

  reg.submit = function(){
    console.log(reg.firstName);
    console.log(reg.lastName);
    console.log(reg.email);
    console.log(reg.phone);
    console.log(reg.menuNumber);

    console.log("form submited");

    //$location.path("SuccessPage");
    $location.path('/successPage');
  }
}

})();

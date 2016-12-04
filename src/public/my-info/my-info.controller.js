

(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', ['selectedItem','remoteItem',MyInfoController]);

//MyInfoController.$inject = ['selectedItem'];
function MyInfoController(selectedItem,remoteItem) {
    var $ctrl = this;

    console.log(selectedItem);
    if(selectedItem) {
      $ctrl.selectedItem = selectedItem;
      $ctrl.remoteItem = remoteItem;
    }



  }


})();

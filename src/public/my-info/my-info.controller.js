

(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', ['Order','ApiPath',MyInfoController]);

function MyInfoController(Order,ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
    $ctrl.remoteItem = Order.getItem();
    $ctrl.userInfo = Order.getUserInfo();

    }



})();

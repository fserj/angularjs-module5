(function() {
"use strict";

/**
 * Restaurant module that includes the public module as a dependency
 */
angular.module('restaurant', ['public'])
.service('Order',function(){
  console.log("----OrderServicecreated --- ");
  this.setItem = function(itemResponse,registrationInfo) {
      this.itemResponse = itemResponse;
      this.registrationInfo = registrationInfo;
      console.log("----firstName: "+registrationInfo.firstName);
  };

  this.getItem = function(){
    return this.itemResponse;
  };
  this.getUserInfo = function(){
    return this.registrationInfo;
  }
})
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
}


})();

(function() {
"use strict";

/**
 * Restaurant module that includes the public module as a dependency
 */
angular.module('restaurant', ['public'])
.service('Order',function(){
  console.log("----OrderServicecreated --- ");
  this.setItem = function(item) {
      this.item = item;
      console.log("----item: "+item);
  };

  this.getItem = function(){
    return this.item;
  };
})
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
}


})();

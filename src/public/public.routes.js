(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('myInfo',{
      url : '/myInfo',
      templateUrl : 'src/public/my-info/my-info.html',
      controller : 'MyInfoController',
      controllerAs: 'infoController'
    })
    .state('signup',{
      url : '/signup',
      templateUrl : 'src/public/signup/signup.html',
      controller : 'SignupController',
      controllerAs: 'reg'
    })
    .state('SuccessPage',{
      url : '/successPage',
      templateUrl : 'src/public/signup/successPage.html'
    })
    ;
}
})();

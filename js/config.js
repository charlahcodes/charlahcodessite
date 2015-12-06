let config = function ($stateProvider, $urlRouterProvider) {

  // If routes don't match, go back to homepage
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      templateUrl: 'templates/layout.tpl.html',
      // tells ui-router this is an abstract state (no url)
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      // tells ui-router this is an abstract state (no url)
    })
    .state('root.about', {
      url: '/about',
      // controller: 'HomeController',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.coding', {
      url: '/coding',
      // controller: 'HomeController',
      templateUrl: 'templates/coding.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
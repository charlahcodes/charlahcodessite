let config = function ($stateProvider, $urlRouterProvider) {

  // If routes don't match, go back to homepage
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      // controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root', {
      templateUrl: 'templates/layout.tpl.html',
      controller: 'RootController',
    })
    // .state('root.home', {
    //   url: '/',
    //   templateUrl: 'templates/home.tpl.html',
    //   // tells ui-router this is an abstract state (no url)
    // })
    .state('root.resume', {
      url: '/resume',
      controller: 'ResumeController',
      templateUrl: 'templates/resume.tpl.html'
    })
    .state('root.work', {
      url: '/work',
      // controller: 'HomeController',
      templateUrl: 'templates/work.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      // controller: 'HomeController',
      templateUrl: 'templates/contact.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
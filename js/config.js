
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
      controller: 'WorkController',
      templateUrl: 'templates/work.tpl.html'
    })
    .state('root.connect', {
      url: '/connect',
      // controller: 'HomeController',
      templateUrl: 'templates/connect.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;


// let config = function ($stateProvider, $urlRouterProvider) {

//   // If routes don't match, go back to homepage
//   $urlRouterProvider.otherwise('/');

//   $stateProvider
//     .state('home', {
//       url: '/',
//       // controller: 'HomeController',
//       views: {
//         'homePage': {
//           templateUrl: 'templates/home.tpl.html',
//         },
//         'layout': {
//           templateUrl: 'templates/layout.tpl.html',
//           controller: 'RootController',
//         },
//         'workView@home': {
//           templateUrl: 'templates/work.tpl.html',
//           controller: 'WorkController',
//         },
//       }
//     })


//     .state('root', {
//       templateUrl: 'templates/layout.tpl.html',
//       controller: 'RootController',
//     })
//     // .state('root.home', {
//     //   url: '/',
//     //   templateUrl: 'templates/home.tpl.html',
//     //   // tells ui-router this is an abstract state (no url)
//     // })
//     .state('root.resume', {
//       url: '/resume',
//       controller: 'ResumeController',
//       templateUrl: 'templates/resume.tpl.html'
//     })
//     .state('root.work', {
//       url: '/work',
//       controller: 'WorkController',
//       templateUrl: 'templates/work.tpl.html'
//     })
//     .state('root.connect', {
//       url: '/connect',
//       // controller: 'HomeController',
//       templateUrl: 'templates/connect.tpl.html'
//     });
// };

// config.$inject = ['$stateProvider', '$urlRouterProvider'];

// export default config;
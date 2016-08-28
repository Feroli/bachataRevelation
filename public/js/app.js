'use strict';

angular
  .module('bachataRevelationApp', [
      'ngResource',
      'ngRoute',
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMdIcons',
      'ngMessages',
      'uiGmapgoogle-maps'
  ])
  .controller('MainMenuCtrl', 'ClassesCtrl')
  .config(routing, gmap);

function routing($routeProvider,
     $locationProvider,
     $mdDateLocaleProvider,
     $mdThemingProvider,
     $mdIconProvider) {
    // routing
    $routeProvider
        .when('/', {
            templateUrl: 'templates/intro.html',
            controller: 'IntroCtrl',
            controllerAs: 'vm'
        })
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'vm'
        })
        .when('/classes', {
            templateUrl: 'templates/classes.html',
            controller: 'ClassesCtrl',
            controllerAs: 'vm'
        })
        .when('/blog', {
            templateUrl: 'templates/blog.html',
            controller: 'BlogCtrl',
            controllerAs: 'vm'
        })
        .when('/contactUs', {
            templateUrl: 'templates/contactUs.html',
            controller: 'ContactUsCtrl',
            controllerAs: 'vm'
        })
        .when('/events', {
            templateUrl: 'templates/eventList.html',
            controller: 'EventListCtrl',
            controllerAs: 'vm'
        })
        .when('/event/:eventId', {
            templateUrl: 'templates/eventDetails.html',
            controller: 'EventDetailsCtrl',
            controllerAs: 'vm',
            resolve: {
                event: function($route, eventData) {
                    return eventData.getEvent($route.current.pathParams.eventId)
                     .$promise;
                }
            }
        })
        .when('/test', {
            templateUrl: 'templates/directives/testDirective.html',
            controller: 'MainMenuCtrl',
            controllerAs: 'vm'
        })
    .otherwise({redirectTo: '/'});

    // html5Mode
    $locationProvider.html5Mode(true);

    // locale date picker
    $mdDateLocaleProvider.formatDate = function(date) {
        return moment(date).format('DD-MM-YYYY');
    };

    $mdDateLocaleProvider.parseDate = function(dateString) {
        var m = moment(dateString, 'DD/MM/YYYY', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };

// incons
    $mdIconProvider
                .defaultIconSet('./assets/svg/avatars.svg', 128)
                .icon('menu', './assets/svg/menu.svg', 24)
                .icon('chevron-up', './assets/svg/chevron-up.svg', 24)
                .icon('chevron-down', './assets/svg/chevron-down.svg', 24)
                .icon('up', './assets/svg/keyboard_up_48.svg', 48)
                .icon('down', './assets/svg/keyboard_down_48.svg', 48)
                .icon('google_plus', './assets/svg/google_plus.svg', 512)
                .icon('hangouts', './assets/svg/hangouts.svg', 512)
                .icon('twitter', './assets/svg/twitter.svg', 512)
                .icon('phone', './assets/svg/phone.svg', 512);

    // theme configuring
    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
            'default': '600',
            'hue-1': '100',
            'hue-2': '600',
            'hue-3': 'A100'
        })
        .accentPalette('pink', {
            'default': '600',
            'hue-1': '100',
            'hue-2': '600',
            'hue-3': 'A100'
        });
}

function gmap(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyASIhX9J20Lpat7OJ_D7UoffYAXX5O6qvM',
        v: '3.20', // defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
}

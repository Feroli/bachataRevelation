
'use strict';

angular
  .module('bachataRevelationApp')
  .controller('MainMenuCtrl', MainMenuCtrl);

MainMenuCtrl.$inject = ['$scope', '$location', '$log', '$mdSidenav'];

/* @ngInject */
function MainMenuCtrl($scope, $location, $log, $mdSidenav) {
    let vm = this;

    vm.intro = intro;
    vm.createEvent = createEvent;
    vm.editProfile = editProfile;
    vm.goToEvents = goToEvents;
    vm.goToContactUs = goToContactUs;
    vm.goToAbout = goToAbout;
    vm.goToClasses = goToClasses;
    vm.goToBlog = goToBlog;
    vm.toggleSideNav = toggleSideNav;
    vm.getLocationInfo = getLocationInfo;

    function intro() {
        $location.url('/');
    }

    function createEvent() {
        $location.replace();
        $location.url('/newEvent');
        $mdSidenav('right').close();
    }

    function editProfile() {
        $location.url('/profile');
        $mdSidenav('right').close();
    }

    function goToEvents() {
        $location.url('/events');
        $mdSidenav('right').close();
    }
    function goToContactUs() {
        $location.url('/contactUs');
        $mdSidenav('right').close();
    }
    function goToAbout() {
        $location.url('/about');
        $mdSidenav('right').close();
    }
    function goToClasses() {
        $location.url('/classes');
        $mdSidenav('right').close();
    }
    function goToBlog() {
        $location.url('/blog');
        $mdSidenav('right').close();
    }

    function toggleSideNav() {
        $mdSidenav('right').toggle();
    }

    function getLocationInfo() {
        $log.info('absUrl: ', $location.absUrl());
        $log.info('protocol: ', $location.protocol());
        $log.info('port: ', $location.port());
        $log.info('host: ', $location.host());
        $log.info('path: ', $location.path());
        $log.info('search: ', $location.search());
        $log.info('hash: ', $location.hash());
        $log.info('url: ', $location.url());
    }
}

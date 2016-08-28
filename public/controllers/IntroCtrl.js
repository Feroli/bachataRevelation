'use strict';

angular
.module('bachataRevelationApp')
.controller('IntroCtrl', IntroCtrl);

IntroCtrl.$inject = ['$location'];

function IntroCtrl($location) {
    let vm = this;

    vm.test = test;
    vm.goToAbout = goToAbout;

    function test() {
    }

    function goToAbout() {
        $location.replace();
        $location.url('/about');
        console.log('df');
    }
}

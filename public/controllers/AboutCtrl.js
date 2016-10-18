'use strict';

angular
.module('bachataRevelationApp')
.controller('AboutCtrl', AboutCtrl);

AboutCtrl.$inject = [];

function AboutCtrl() {
    let vm = this;
    vm.test = test;

    vm.currNavItem = 'about';
    vm.goto = function(page) {
        vm.currNavItem = page;
    };

    function test() {

    }
}

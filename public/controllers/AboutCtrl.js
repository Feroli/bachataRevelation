'use strict';

angular
.module('bachataRevelationApp')
.controller('AboutCtrl', AboutCtrl);

AboutCtrl.$inject = [];

function AboutCtrl() {
    let vm = this;
    vm.test = test;

    function test() {

    }
}

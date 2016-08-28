'use strict';

angular
.module('bachataRevelationApp')
.controller('BlogCtrl', BlogCtrl);

BlogCtrl.$inject = [];

function BlogCtrl() {
    let vm = this;
    vm.test = test;

    function test() {

    }
}

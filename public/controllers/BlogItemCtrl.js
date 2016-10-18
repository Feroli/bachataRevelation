'use strict';

angular
.module('bachataRevelationApp')
.controller('BlogItemCtrl', BlogItemCtrl);

BlogItemCtrl.$inject = [];

function BlogItemCtrl() {
    let vm = this;
    vm.test = test;

    function test() {

    }
}

'use strict';

angular
.module('bachataRevelationApp')
.controller('EventListCtrl', EventListCtrl);

EventListCtrl.$inject = [];

function EventListCtrl() {
    let vm = this;
    vm.test = test;

    function test() {

    }
}

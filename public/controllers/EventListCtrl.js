'use strict';

angular
.module('bachataRevelationApp')
.controller('EventListCtrl', EventListCtrl);

EventListCtrl.$inject = ['$location', '$log', 'eventData'];

function EventListCtrl($location, $log, eventData) {
    let vm = this;
    vm.test = test;

    vm.events = eventData.getAllEvents();
    vm.eventInfo = eventInfo;

    function eventInfo(id) {
        $location.url('/event/' + id);
    }

    function test() {

    }
}

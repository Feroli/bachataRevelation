'use strict';

angular
.module('bachataRevelationApp')
.controller('EventDetailsCtrl', EventDetailsCtrl);

EventDetailsCtrl.$inject = ['$routeParams', '$route', '$log', '$location', '$anchorScroll'];

function EventDetailsCtrl($routeParams, $route, $log, $location, $anchorScroll) {
    let vm = this;
    vm.test = test;

    vm.sortorder = 'name';
    vm.event = $route.current.locals.event;
    vm.reload = reload;
    vm.upVoteSession = upVoteSession;
    vm.downVoteSession = downVoteSession;
    vm.scrollToSession = scrollToSession;
    vm.eventList = eventList;


    function reload() {
      $route.reload();
    }

    function upVoteSession(session) {
      session.upVoteCount++;
    }

    function downVoteSession(session) {
      session.upVoteCount--;
    }

    function scrollToSession() {
      $anchorScroll();
    }
    function eventList() {
      $location.url('/event');
    }

    function test() {

    }
}

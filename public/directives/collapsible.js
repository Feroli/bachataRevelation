
'use strict';

angular
  .module('bachataRevelationApp')
  .directive('collapsible', directive);

/* @ngInject */
function directive() {
    let directive = {
        restrict: 'EA',
        replace: true,
        template: "<div><h1 class='md-headline lnk' ng-click='vm.toggleVisibility()' style='text-align:center;outline:none;'>{{title}}</h1><div ng-show='vm.visible' ng-transclude></div></div>",
        transclude: true,
        scope: {
            session: '=',
            title: '@'
        },
        link: linkFunc,
        controller: Controller,
        controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
}

Controller.$inject = [];

/* @ngInject */
function Controller() {
    let vm = this;
    vm.visible = true;
    vm.toggleVisibility = toggleVisibility;

    activate();

    function toggleVisibility() {
        vm.visible = !vm.visible;
    }

    function activate() {

    }
}

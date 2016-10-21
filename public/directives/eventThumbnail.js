'use strict';
angular
    .module('bachataRevelationApp')
    .directive('eventsThumbnail', directive);

/* @ngInject */
function directive() {
    let directive = {
        restrict: 'EA',
        templateUrl: 'templates/directives/eventThumbnail.html',
        replace: true,
        scope: {
            event: '='
        },
        link: linkFunc,
        controller: 'EventListCtrl',
        controllerAs: 'vm'

    };
    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
}

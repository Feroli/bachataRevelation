'use strict';
angular
    .module('bachataRevelationApp')
    .directive('articlesThumbnail', directive);

/* @ngInject */
function directive() {
    let directive = {
        restrict: 'EA',
        templateUrl: 'templates/directives/articleThumbnail.html',
        replace: true,
        scope: {
            article: '='
        },
        link: linkFunc,
        controller: 'BlogCtrl',
        controllerAs: 'vm'

    };
    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
}

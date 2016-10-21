'use strict';

angular
  .module('bachataRevelationApp')
  .directive('upVote', directive);

// @ : String
// = : value (item)
// & : method
/* @ngInject */
function directive() {
    let directive = {
        restrict: 'EA',
        templateUrl: 'templates/directives/upvote.html',
        scope: {
            session: '=',
            count: '=',
            upvote: '&',
            downvote: '&'
        },
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
}

'use strict';

angular
.module('bachataRevelationApp')
.controller('ArticleCtrl', ArticleCtrl);

ArticleCtrl.$inject = ['$routeParams',
                            '$route',
                            '$log',
                            '$location',
                            '$anchorScroll'];

function ArticleCtrl($routeParams, $route, $log, $location, $anchorScroll) {
    let vm = this;
    vm.test = test;

    vm.sortorder = 'name';
    vm.blog = $route.current.locals.blog;
    vm.reload = reload;
    vm.upVoteSession = upVoteSession;
    vm.downVoteSession = downVoteSession;
    vm.scrollToSession = scrollToSession;
    vm.blogList = blogList;

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
    function blogList() {
        $location.url('/blog');
    }

    function test() {

    }
}

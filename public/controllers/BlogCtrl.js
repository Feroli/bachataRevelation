'use strict';

angular
.module('bachataRevelationApp')
.controller('BlogCtrl', BlogCtrl);

BlogCtrl.$inject = ['$location'];

function BlogCtrl($location) {
    let vm = this;
    vm.test = test;

    // vm.events = blogData.getAllBlogs();
    //
    // vm.blogInfo = blogInfo;
    //
    // function blogInfo(id) {
    //     $location.url('/event/' + id);
    // }

    function test() {

    }
}

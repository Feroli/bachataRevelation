'use strict';

angular
.module('bachataRevelationApp')
.controller('BlogCtrl', BlogCtrl);

BlogCtrl.$inject = ['$location', 'blogData'];

function BlogCtrl($location, blogData) {
    let vm = this;
    vm.test = test;

    vm.blog = blogData.getAllBlogs();

    vm.blogInfo = blogInfo;

    function blogInfo(id) {
        $location.url('/blog/' + id);
    }

    function test() {

    }
}

'use strict';

angular
  .module('bachataRevelationApp')
  .factory('blogData', factory);

factory.$inject = ['$resource', '$log'];

/* @ngInject */
function factory($resource, $log) {
    let id = new Date().valueOf();

    let resource = $resource('/data/blog/:id',
                             {id: '@id'},
                             {'getAll': {method: 'GET',
                                        isArray: true,
                                        params: {something: 'foo'}}});

    let service = {
        getBlog: getBlog,
        save: save,
        getAllBlogs: getAllBlogs
    };

    return service;

    function getBlog(blogId) {
        return resource.get({id: blogId});
    }

    function save(blog) {
        blog.id = id;
        return resource.save(blog);
    }

    function getAllBlogs() {
        return resource.query();
    }
}

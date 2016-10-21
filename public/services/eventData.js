'use strict';

angular
  .module('bachataRevelationApp')
  .factory('eventData', factory);

factory.$inject = ['$resource', '$log'];

/* @ngInject */
function factory($resource, $log) {
    let id = new Date().valueOf();

    let resource = $resource('/data/event/:id',
                             {id: '@id'},
                             {'getAll': {method: 'GET',
                                        isArray: true,
                                        params: {something: 'foo'}}});

    let service = {
        getEvent: getEvent,
        save: save,
        getAllEvents: getAllEvents
    };

    return service;

    function getEvent(eventId) {
        return resource.get({id: eventId});
    }

    function save(event) {
        event.id = id;
        return resource.save(event);
    }

    function getAllEvents() {
        return resource.query();
    }
}

'use strict';

angular
.module('bachataRevelationApp')
.controller('ClassesCtrl', ClassesCtrl);

ClassesCtrl.$inject = ['uiGmapGoogleMapApi', '$log'];

function ClassesCtrl(uiGmapGoogleMapApi, $log) {
    let vm = this;

    vm.markers = [];
    vm.map = {center: {latitude: 51.477954, longitude: -3.176751}, zoom: 18};
    vm.test = test;

    vm.circles = [
        {
            id: 1,
            center: {
                latitude: 51.477954,
                longitude: -3.176751
            },
            radius: 3,
            stroke: {
                color: '#08B21F',
                weight: 2,
                opacity: 1
            },
            fill: {
                color: '#08B21F',
                opacity: 0.5
            },
            geodesic: true, // optional: defaults to false
            draggable: true, // optional: defaults to false
            clickable: true, // optional: defaults to true
            editable: true, // optional: defaults to false
            visible: true, // optional: defaults to true
            control: {}
        }
    ];

    vm.marker = {
        id: 0,
        coords: {
            latitude: 40.1451,
            longitude: -99.6680
        },
        options: {draggable: true},
        events: {
            dragend: function(marker, eventName, args) {
                $log.log('marker dragend');
                var lat = marker.getPosition().lat();
                var lon = marker.getPosition().lng();
                $log.log(lat);
                $log.log(lon);

                vm.marker.options = {
                    draggable: true,
                    labelContent: "lat: " + vm.marker.coords.latitude + ' ' + 'lon: ' + vm.marker.coords.longitude,
                    labelAnchor: "100 0",
                    labelClass: "marker-labels"
                };
            }
        }
    };

    function test() {

    }

    uiGmapGoogleMapApi.then(function(maps) {
        vm.map = {center: {latitude: 51.477954, longitude: -3.176751}, zoom: 18};
    });
}


'use strict';

angular
  .module('bachataRevelationApp')
  .filter('durations', durations);

function durations() {
    return function(duration) {
        switch (duration) {
        case 1:
            return 'Half Hour';
        case 2:
            return '1 Hour';
        case 3:
            return '2 Hour';
        case 4:
            return 'Half Day';
        case 5:
            return 'Full Day';
        case 6:
            return 'Until Close';
        default:
            return 'N/A';
        }
    };
}

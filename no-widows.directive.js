/* global angular */

(function() {
    'use strict';

    angular.module('angular-no-widows', [])
        .directive('noWidows', ['$timeout', '$interpolate', noWidows]);

    function noWidows($timeout, $interpolate) {
        return {
            restrict: 'A',
            replace: true,
            link: function($scope, elem, attr) {
                var watcher = $scope.$watch(attr.noWidow, function(newVal, oldVal) {
                    if (newVal) {
                        var txt = newVal,
                            tag = elem[0].nodeName.toLowerCase(),
                            wordArray = txt.split(" ");

                        console.log(elem.classNames);

                        if (wordArray.length > 1) {
                            wordArray[wordArray.length - 2] += "&nbsp;" + wordArray[wordArray.length - 1];
                            wordArray.pop();
                        }

                        elem.html(wordArray.join(" "));
                    }
                });
            }
        };
    }
})();

/* global angular */

(function() {
    'use strict';

    angular
        .module('angular-no-widows', [])
        .directive('noWidows', ['$timeout', '$interpolate', noWidows]);

    function noWidows($timeout, $interpolate) {
        return {
            restrict: 'A',
            replace: true,
            link: function($scope, elem, attr) {

                var watcher = $scope.$watch(attr.noWidows, function(newVal, oldVal) {
                    if (newVal) {
                        processText(newVal);
                    } else {
                        processText(elem.html());
                    }
                });

                function processText(txt) {
                    var tag = elem[0].nodeName.toLowerCase(),
                        wordArray = txt.split(" ");

                    if (wordArray.length > 1) {
                        wordArray[wordArray.length - 2] += "&nbsp;" + wordArray[wordArray.length - 1];
                        wordArray.pop();
                    }

                    elem.html(wordArray.join(" "));
                }
            }
        };
    }
})();

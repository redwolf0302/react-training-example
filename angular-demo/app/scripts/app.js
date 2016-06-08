'use strict';
;(function(angular) {
    angular
        .module('angular-demo', [])
        .controller('rootContainerController',
            function($rootScope, $scope) {
                $scope.article_title = null;
                $scope.$on(EVENT_KEYS.LIST_CLICK, function(event, data) {
                    $scope.article_title = data.subject;
                });
                $scope.$on(EVENT_KEYS.DATA_CHANGE, function(event, data) {
                    $scope.article_title = data.subject;
                });
            });
})(angular);

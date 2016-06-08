'use strict';
;(function(angular) {
    angular
        .module('angular-demo')
        .controller('formComponentController',
            function($rootScope, $scope) {
                $scope.article = null;
                $scope.$on(EVENT_KEYS.LIST_CLICK, function(event, data) {
                    $scope.article = angular.copy(data);
                });

                $scope.saveArticle = function() {
                    $rootScope.$broadcast(EVENT_KEYS.DATA_CHANGE, $scope.article);
                }
            });
})(angular);

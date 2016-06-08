'use strict';
;(function(angular) {
    angular
        .module('angular-demo')
        .controller('listComponentController',
            function($rootScope, $scope) {
                $scope.articleData = article_data;

                $scope.articleSelected = function(article) {
                    $rootScope.$broadcast(EVENT_KEYS.LIST_CLICK, article);
                };

                $scope.createArticle = function() {
                    $rootScope.$broadcast(EVENT_KEYS.LIST_CLICK, {});
                };

                $scope.$on(EVENT_KEYS.DATA_CHANGE, function(event, data) {
                    if (data.id) {
                        article_data.forEach(function(item) {
                            if (data.id === item.id) {
                                item.subject = data.subject;
                                item.memo = data.memo;
                            }
                        });
                    } else {
                        data.id = (new Date()).valueOf();//模拟ID
                        article_data.push(data);
                    }
                    $scope.articleData = article_data;
                });
            });
})(angular);

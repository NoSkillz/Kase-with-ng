/**
 * Created by VerDe on 10/9/2015.
 */

(function () {
    var app = angular.module('Kase');

    var TestCaseController = function($scope, $routeParams){

        var tcs = [
            {
                name: 'first test case'
            },
            {
                name: 'second test case'
            },
            {
                name: 'third one'
            }
        ];

        $scope.active = 0;

        $scope.toggleActive = function(index){
            $scope.active = index;
        };

        $scope.tcs = tcs;


        $scope.addTestcase = function(name){
            $scope.tcs.push({name: name});
        };


    };

    app.controller('TestCaseController', TestCaseController);
}());
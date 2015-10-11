/**
 * Created by VerDe on 10/9/2015.
 */

(function () {
    var app = angular.module('Kase');

    var TestCaseController = function ($scope) {

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
        $scope.tcs = tcs;

        // add a testcase to the list
        $scope.addTestcase = function (testcase) {
            if (testcase.trim() !== '') {
                $scope.tcs.push({name: testcase});
                $scope.testcase = '';
            }
        };

        // set a test case as active (read: selected)
        $scope.active = 0;
        $scope.toggleActive = function (index) {
            $scope.active = index;
        };


    };

    app.controller('TestCaseController', TestCaseController);
}());
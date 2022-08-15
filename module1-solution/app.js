(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope, $filter) {
        $scope.userInput = '';

        /**
         * @name checkUserEnteredValues
         * @description split user entered string into array of values separated by comma
         */
        $scope.checkUserEnteredValues = function () {
            if ($scope.userInput === '') {
                $scope.message = 'Please enter data first';
            } else {
                const arrayOfUserEnteredValues = $scope.userInput.split(',');
                $scope.getCountOfNonEmptyValues(arrayOfUserEnteredValues);
            }
        }

        /**
         * @name getCountOfNonEmptyValues
         * @description get count of user entered values that are not empty strings 
         * in between commas
         * @return {Number} count of actual values entered 
         */
        $scope.getCountOfNonEmptyValues = function (array) {
            let count = 0;
            angular.forEach(array, function (value) {
                if (value.trim().length !== 0) {
                    count++;
                }
            });
            $scope.validateUserInputLength(count);
        }

        /**
         * @name validateUserInputLength
         * @description check length of array to determine which message to display
         */
        $scope.validateUserInputLength = function (finalCount) {
            if (finalCount === 0) {
                $scope.message = 'Please enter data first';
            } else if (finalCount <= 3 && finalCount !== 0) {
                $scope.message = 'Enjoy!';
            } else if (finalCount > 3) {
                $scope.message = 'Too much!';
            }
        }

    }
})();

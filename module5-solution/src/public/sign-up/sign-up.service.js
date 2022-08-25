(function () {
    "use strict";

    angular.module('public')
        .service('SignUpService', SignUpService);
    
    SignUpService.$inject = [];
    function SignUpService() {
        var service = this;
        service.userDetails = '';
        service.setUserDetails = function (userDetails) {
            service.userDetails = userDetails;
        }

        service.getUserDetails = function() {
            if (service.userDetails === '' ){
                service.userDetails = 'No details found';
            } 
            return service.userDetails;
        }
    }
})();

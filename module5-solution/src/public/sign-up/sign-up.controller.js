(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'SignUpService'];
  function SignUpController(MenuService, SignUpService) {
    var signUpController = this;

    signUpController.validateFavoriteMenuItem = function () {
      if (signUpController.signUpForm.$valid === true) {
        signUpController.promise = MenuService.getMenuItemByItemNumber(signUpController.user.favoriteItem);
        signUpController.promise.then(function (response) {
          if (response.length === 0) {
            signUpController.message = 'No such menu number exists'
          } else {
            signUpController.user.menuItemData = response;
            signUpController.submit();
          }
        })
      } else {
        signUpController.message = 'Please enter all required information before proceeding';
      }
    };

    signUpController.submit = function () {
      signUpController.message = '';
      SignUpService.setUserDetails(signUpController.user);
      signUpController.message = 'Your information has been saved'
      signUpController.user = {};
      signUpController.signUpForm.$setUntouched();

    };
  }

})();

(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        let toBuy = this;
        toBuy.leftToBuyList = [];

        toBuy.leftToBuyList = ShoppingListCheckOffService.getLeftToBuy();

        toBuy.markItemAsBought = function(index, itemName, itemQuantity) {
            ShoppingListCheckOffService.updateShoppingLists(index, itemName, itemQuantity);
        }

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        let alreadyBought = this;

        alreadyBought.boughtItems = ShoppingListCheckOffService.getAlreadyPurchased();
    }

    function ShoppingListCheckOffService() {
        let service = this;
        let leftToBuy = [
            { name: 'Cookies', quantity: 5 },
            { name: 'Chips', quantity: 4 },
            { name: 'Apple Juice', quantity: 2 },
            { name: 'Yogurt', quantity: 3 },
            { name: 'Peanut Butter', quantity: 1 },
            { name: 'Bagels', quantity: 5 }]
        let alreadyPurchased = [];

        service.getLeftToBuy = function () {
            return leftToBuy;
        }

        service.setLeftToBuy = function (leftToBuyList) {
            leftToBuy = leftToBuyList;
        }

        service.getAlreadyPurchased = function () {
            return alreadyPurchased;
        }

        service.setAlreadyPurchased = function (alreadyPurchacedList) {
            alreadyPurchased = alreadyPurchacedList;
        }

        service.addToPurchasedList = function (itemName, quantity) {
            let item = {
                name: itemName,
                quantity: quantity
            };

            alreadyPurchased.push(item);
        }


        service.updateShoppingLists = function (itemIndex, itemName, itemQuantity) {
            let itemBought = {
                name: itemName,
                quantity: itemQuantity
            }
            leftToBuy.splice(itemIndex, 1);
            alreadyPurchased.push(itemBought);
        };

    }

})();

(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        let toBuy = this;

        toBuy.leftToBuyList = ShoppingListCheckOffService.getLeftToBuy();

        /**
         * Sends the item that is bought to the purchased list
         * @param {Number} index 
         * @param {String} itemName 
         * @param {Number} itemQuantity 
         */
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

        /**
         * @description Fetch the list of items left to buy
         * @returns array of items left to buy
         */
        service.getLeftToBuy = function () {
            return leftToBuy;
        }

        /**
         * @description Fetch list of items already purchased
         * @returns list of items already purchased
         */
        service.getAlreadyPurchased = function () {
            return alreadyPurchased;
        }

        /**
         * Remove item that was bought and add it to the purchased list
         * @param {Number} itemIndex 
         * @param {String} itemName 
         * @param {Number} itemQuantity 
         */
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

angular.module("invoice1", [])
       .controller("InvoiceController", function ()
       {
           this.Qty = 1;
           this.Cost = 2;
           this.inCurr = 'USD';
           this.Currencies = ['USD', 'CNY', 'EUR'];
           this.Pay = function () {
               alert('Thanks');
           };
       }
       )
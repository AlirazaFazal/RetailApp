/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'jet-composites/bot-client/loader'],
 function(oj, ko, $, app) {
  
    function DashboardViewModel() {
      var self = this;
        
      self.websocketConnectionUrl = 'ws://130.61.75.195:8888/chat/ws';
      self.userId = 'retail';
      self.channel = '2F6E32BA-F336-4250-9B89-43D4E8CD3557';

      // Header Config
      self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};
      
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additional available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
    
        // Implement if needed
      };
        
        var totalPrice = 0.00;

self.pageOne = ko.observable(true);
	  self.pageTwo = ko.observable(false);
	  self.pageThree = ko.observable(true);
	  self.pageFour = ko.observable(true);
          self.pageFive = ko.observable(false);
	  self.scanBarcode = ko.observable(false);

   self.togglebot = function () {
       
       jQuery(".chatbotbutton").toggleClass("buttonbottom");
       jQuery(".chatbotIconImg").toggleClass("buttonbottom");
       self.pageFive(!self.pageFive());
       self.pageOne(!self.pageOne());
   }    
	
        /* show home and checkout */
    self.toggleDiv = function () {
       self.pageOne(!self.pageOne());
       self.pageTwo(!self.pageTwo());
	   self.pageThree(false);
	   self.pageFour(false);
    }
	
	/* show checkout and qrCode */
	self.toggleCheckoutStore = function () {
       self.pageTwo(!self.pageTwo());
       self.pageThree(!self.pageThree());
	   self.pageOne(false);
	   self.pageFour(false);
    }
    
    /* reverse from qrCode to checkout options*/
	self.toggleCheckoutQR = function () {
       self.pageOne(self.pageOne());
       self.pageThree(false);
	   self.pageTwo(!self.pageOne());
	   self.pageFour(false);
    }
    
    /* reverse from card payment to checkout options*/
	self.toggleCheckoutCard = function () {
       self.pageOne(self.pageOne());
       self.pageThree(false);
	   self.pageTwo(!self.pageOne());
	   self.pageFour(false);
    }
	
	/* go back from three to two*/
	self.toggleDivCheckout = function() {
		self.pageTwo(!self.Two());
		self.pageThree(!self.Three());
		self.One(false);
		self.Four(false);
	}
	
	/* show checkout and payment */
	self.togglePayment = function () {
       self.pageTwo(!self.pageTwo());
       self.pageFour(!self.pageFour());
	   self.pageOne(false);
	   self.pageThree(false);
    }
	
	/* add new randomized item to basket if scan button clicked */
	var quant = 0;
	var currentQuant;
    var products = ["Blouse", "Bag", "Pants", "Scarf", "Necklace", "BotDresses/DressThree"];
	var price = ["53.00", "120.00", "33.00", "3.70", "162.00", "28.70"];
    var name = ["Women's Floral Button Down", "Cream Mab Tote", "Bistretch Poplin Bootleg Pants", "Purple Spot print satin stripe chiffon scarf", "Gold Pendant Necklace", "David Emanuel Animal Stripe Jewelled Dress"];
	
	self.scanNewItem = function () {
		
		cordova.plugins.barcodeScanner.scan(
            function (result) {

                if (result.text == "53923-12323") {

				$("tbody#basketBasket").append('<tr class="newScanItem">' +
                    '<td><img id="basketProduct" src="js/views/images/APP_PRIMARK/' + products[0] + '.jpg" /></td>' +
					'<td id="price">' + name[0] + '</td>' +
					'<td class="value "id="price">£' + price[0] + '</td>' +
					'<td class="quantity" id="newScanItemQuant_' +'">1</td>' +
					'<td data-bind="click:deleteItem()" class="bin"><img id="binIcon" src="js/views/images/delete_icon.png" /></td></tr>');
				totalPrice += parseFloat(price[0]);
				document.getElementById("textInside").innerHTML = "£" + totalPrice;
                                document.getElementById("textInsideTwo").innerHTML = "£" + totalPrice;
                                document.getElementById("textInsideThree").innerHTML = "£" + totalPrice;
                                document.getElementById("textInsideFour").innerHTML = "£" + totalPrice;
                }
                if (result.text == "12473-58342") {

                    $("tbody#basketBasket").append('<tr class="newScanItem">' +
                        '<td><img id="basketProduct" src="js/views/images/APP_PRIMARK/' + products[1] + '.jpg" /></td>' +
                        '<td id="price">' + name[1] + '</td>' +
                        '<td class="value "id="price">£' + price[1] + '</td>' +
                        '<td class="quantity" id="newScanItemQuant_' + '">1</td>' +
                        '<td data-bind="click:deleteItem()" class="bin"><img id="binIcon" src="js/views/images/delete_icon.png" /></td></tr>');
                    totalPrice += parseFloat(price[1]);
                    document.getElementById("textInside").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideTwo").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideThree").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideFour").innerHTML = "£" + totalPrice;
                }
                if (result.text == "32860-10047") {

                    $("tbody#basketBasket").append('<tr class="newScanItem">' +
                        '<td><img id="basketProduct" src="js/views/images/APP_PRIMARK/' + products[2] + '.jpg" /></td>' +
                        '<td id="price">' + name[2] + '</td>' +
                        '<td class="value "id="price">£' + price[2] + '</td>' +
                        '<td class="quantity" id="newScanItemQuant_' + '">1</td>' +
                        '<td data-bind="click:deleteItem()" class="bin"><img id="binIcon" src="js/views/images/delete_icon.png" /></td></tr>');
                    totalPrice += parseFloat(price[2]);
                    document.getElementById("textInside").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideTwo").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideThree").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideFour").innerHTML = "£" + totalPrice;
                }
                if (result.text == "63579-24869") {

                    $("tbody#basketBasket").append('<tr class="newScanItem">' +
                        '<td><img id="basketProduct" src="js/views/images/APP_PRIMARK/' + products[3] + '.jpg" /></td>' +
                        '<td id="price">' + name[3] + '</td>' +
                        '<td class="value "id="price">£' + price[3] + '</td>' +
                        '<td class="quantity" id="newScanItemQuant_' + '">1</td>' +
                        '<td data-bind="click:deleteItem()" class="bin"><img id="binIcon" src="js/views/images/delete_icon.png" /></td></tr>');
                    totalPrice += parseFloat(price[3]);
                    document.getElementById("textInside").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideTwo").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideThree").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideFour").innerHTML = "£" + totalPrice;
                }
                if (result.text == "47963-13696") {

                    $("tbody#basketBasket").append('<tr class="newScanItem">' +
                        '<td><img id="basketProduct" src="js/views/images/APP_PRIMARK/' + products[4] + '.jpg" /></td>' +
                        '<td id="price">' + name[4] + '</td>' +
                        '<td class="value "id="price">£' + price[4] + '</td>' +
                        '<td class="quantity" id="newScanItemQuant_' + '">1</td>' +
                        '<td data-bind="click:deleteItem()" class="bin"><img id="binIcon" src="js/views/images/delete_icon.png" /></td></tr>');
                    totalPrice += parseFloat(price[4]);
                    document.getElementById("textInside").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideTwo").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideThree").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideFour").innerHTML = "£" + totalPrice;
                }
                if (result.text == "27600-58548") {

                    $("tbody#basketBasket").append('<tr class="newScanItem">' +
                        '<td><img id="basketProduct" src="js/views/images/APP_PRIMARK/' + products[5] + '.jpg" /></td>' +
                        '<td id="price">' + name[5] + '</td>' +
                        '<td class="value "id="price">£' + price[5] + '</td>' +
                        '<td class="quantity" id="newScanItemQuant_' + '">1</td>' +
                        '<td data-bind="click:deleteItem()" class="bin"><img id="binIcon" src="js/views/images/delete_icon.png" /></td></tr>');
                    totalPrice += parseFloat(price[5]);
                    document.getElementById("textInside").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideTwo").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideThree").innerHTML = "£" + totalPrice;
                    document.getElementById("textInsideFour").innerHTML = "£" + totalPrice;
                }
              },
          function (error) {
              alert("Scanning failed: " + error);
          },
          {
              preferFrontCamera : false, // iOS and Android
              showFlipCameraButton : true, // iOS and Android
              showTorchButton : true, // iOS and Android
              torchOn: false, // Android, launch with the torch switched on (if available)
              saveHistory: true, // Android, save scan history (default false)
              prompt : "Place a barcode inside the scan area", // Android
              resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
              //formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
              orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
              disableAnimations : true, // iOS
              disableSuccessBeep: false // iOS and Android
          }
       );
	}

//	self.toggleDivHome = function () {
//		self.scanBarcode(false);
//		self.pageOne(true);
//	};
        
        var temp = 0;
        
        self.toggleDivConfirmation = function () {
            if (temp > 0) {
            
                alert("Payment Confirmed");
                temp++;
            }
	};
      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);

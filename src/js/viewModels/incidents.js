/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController'],
 function(oj, ko, $, app) {
  
    function IncidentsViewModel() {
      var self = this;

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
      self.pics = ko.observableArray();
//      self.takePicture = function () {
//          navigator.camera.getPicture(
//                  uploadPhoto,
//                  function (err) {},
//                  {
//                      quality: 50,
//                      destinationType: Camera.DestinationType.FILE_URI
//                  }
//          );
//      };
//      function uploadPhoto(imageURI) {
//          self.pics.push(imageURI);
//      };
//
//      self.scanPicture = function () {
//        cordova.plugins.barcodeScanner.scan(
//          function (result) {
//              alert("We got a barcode\n" +
//                    "Result: " + result.text + "\n" +
//                    "Format: " + result.format + "\n" +
//                    "Cancelled: " + result.cancelled);
//          },
//          function (error) {
//              alert("Scanning failed: " + error);
//          },
//          {
//              preferFrontCamera : false, // iOS and Android
//              showFlipCameraButton : true, // iOS and Android
//              showTorchButton : true, // iOS and Android
//              torchOn: false, // Android, launch with the torch switched on (if available)
//              saveHistory: true, // Android, save scan history (default false)
//              prompt : "Place a barcode inside the scan area", // Android
//              resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
//              //formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
//              orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
//              disableAnimations : true, // iOS
//              disableSuccessBeep: false // iOS and Android
//          }
//       );
//    
//    };

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
    return new IncidentsViewModel();
  }
);

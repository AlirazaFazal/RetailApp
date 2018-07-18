/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojarraytabledatasource', 'ojs/ojoffcanvas', 'ojs/ojbutton'],
  function(oj, ko) {
     function ControllerViewModel() {
      var self = this;

      // Router setup
      self.router = oj.Router.rootInstance;
      self.router.configure({
       'dashboard': {label: 'HOME', isDefault: true},
       'incidents': {label: 'CUSTOMER SERVICE'},
       'customers': {label: 'ADD PAYEMENT DETAILS'},
       'profile': {label: 'PROFILE'},
       'about': {label: 'RECENT RECEIPTS'},
       'logout': {label: 'LOGOUT'}
      });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
      self.moduleConfig = self.router.moduleConfig;

      // Navigation setup
      var navData = [
      {name: 'HOME', id: 'dashboard',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'},
      {name: 'CUSTOMER SERVICE', id: 'incidents',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'},
      {name: 'ADD PAYEMENT DETAILS', id: 'customers',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'},
      {name: 'PROFILE', id: 'profile',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-person-icon-24'},
      {name: 'RECENT RECEIPTS', id: 'about',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'},
      {name: 'LOGOUT', id: 'logout',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'}
      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});

      // Drawer setup
      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle({selector: '#navDrawer', modality: 'modal', content: '#pageContent'});
      }
      // Add a close listener so we can move focus back to the toggle button when the drawer closes
      $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });

      // Header Setup
      self.getHeaderModel = function() {
        var headerFactory = {
          createViewModel: function(params, valueAccessor) {
            var model =  {
              pageTitle: self.router.currentState().label,
              handleBindingsApplied: function(info) {
                // Adjust content padding after header bindings have been applied
                self.adjustContentPadding();
              },
              toggleDrawer: self.toggleDrawer
            };
            return Promise.resolve(model);
          }
        }
        return headerFactory;
      }
      
//      self.favouritesTable = ko.observable(true);
//		self.main = ko.observable(false);
//		
//		self.favourites = function () {
//			self.favouritesTable(!self.favouritesTable());
//			self.main(!self.main());
//		}

      // Method for adjusting the content area top/bottom paddings to avoid overlap with any fixed regions. 
      // This method should be called whenever your fixed region height may change.  The application
      // can also adjust content paddings with css classes if the fixed region height is not changing between 
      // views.
      self.adjustContentPadding = function () {
        var topElem = document.getElementsByClassName('oj-applayout-fixed-top')[0];
        var contentElem = document.getElementsByClassName('oj-applayout-content')[0];
        var bottomElem = document.getElementsByClassName('oj-applayout-fixed-bottom')[0];

        if (topElem) {
          contentElem.style.paddingTop = topElem.offsetHeight+'px';
        }
        if (bottomElem) {
          contentElem.style.paddingBottom = bottomElem.offsetHeight+'px';
        }
        // Add oj-complete marker class to signal that the content area can be unhidden.
        // See the override.css file to see when the content area is hidden.
        contentElem.classList.add('oj-complete');
      }
      
    }

    return new ControllerViewModel();
  }
);

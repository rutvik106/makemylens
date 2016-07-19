// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'ion-floating-menu','ionic.rating','firebase'])

.run(function($ionicPlatform,$window) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

      var push = PushNotification.init({
        android: {
          senderID: "601499101926"
        }
      });

      push.on('registration', function(data) {
        console.log(data.registrationId);
      });

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


  $ionicConfigProvider.tabs.position('bottom'); // other values: top


  $stateProvider

  .state('prescription-details',{
    url:'/prescription-details',
    templateUrl:'templates/prescription-details.html',
    controller:'PrescriptionDetailsCtrl'

  })

  .state('item-details-view', {
    url: '/item-details-view',
    templateUrl: 'templates/item-details-view.html',
    controller:'ItemDetailsViewCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller:'LoginCtrl'
  })

  .state('sign-up', {
    url: '/sign-up',
    templateUrl: 'templates/sign-up.html',
    controller:'SignUpCtrl'
  })

  .state('about-us', {
    url: '/about-us',
    templateUrl: 'templates/about-us.html',
    controller:'AboutUsCtrl'
  })

  .state('care-and-services', {
    url: '/care-and-services',
    templateUrl: 'templates/care-and-services.html',
    controller:'CareAndServicesCtrl'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller:'TabCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.eye-glasses', {
    url: '/eye-glasses',
    views: {
      'tab-eye-glasses': {
        templateUrl: 'templates/tab-eye-glasses.html',
        controller: 'EyeGlassesCtrl'
      }
    }
  })

  .state('tab.contact-lenses', {
    url: '/contact-lenses',
    views: {
      'tab-contact-lenses': {
        templateUrl: 'templates/tab-contact-lenses.html',
        controller: 'ContactLensesCtrl'
      }
    }
  })
  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })

  .state('tab.sun-glasses', {
    url: '/sun-glasses',
    views: {
      'tab-sun-glasses': {
        templateUrl: 'templates/tab-sun-glasses.html',
        controller: 'SunGlassesCtrl'
      }
    }
  })

  .state('tab.power-sunglasses', {
    url: '/power-sunglasses',
    views: {
      'tab-power-sunglasses': {
        templateUrl: 'templates/tab-power-sunglasses.html',
        controller: 'PowerSunglassesCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});

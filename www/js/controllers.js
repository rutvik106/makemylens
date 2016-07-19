angular.module('starter.controllers', ['firebase'])

.controller('PrescriptionDetailsCtrl',function($scope,$location){


$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });



})

.controller('TabCtrl', function($scope, $location) {

  $scope.careAndServices=function(){
    $location.path('/care-and-services');
  }

})

.controller('PrescriptionDetailsNavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };

$scope.showLeftMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

})

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})

.controller('ItemDetailsViewCtrl', function($scope, $location) {

  $scope.rating = {};
  $scope.rating.rate = 3;
  $scope.rating.max = 5;

  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });

  $scope.itemImage="img/sg1.jpg";

  $scope.changeItemImage=function(item){
    if(item==1){
      $scope.itemImage="img/sg1.jpg"
    }else if(item==2){
      $scope.itemImage="img/sg1side1.jpg"
    }else if(item==3){
      $scope.itemImage="img/sg1side2.jpg"
    }
  };

  $scope.addPower=function(){
    $location.path('/prescription-details');
  };


})

.controller('AboutUsCtrl', function($scope, $location) {

  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
  });

})

.controller('CareAndServicesCtrl', function($scope) {

    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
    });

})

.controller('SignUpCtrl', function($scope, $location) {

  $scope.createAccount=function(){

  }

})

.controller('LoginCtrl', function($scope, $location, $window, $q) {

  $scope.signUp=function(){
    $location.path('/sign-up');
  };

  $scope.continueAsGuest=function(){
    $location.path('/tab/eye-glasses');
  };

  $scope.fbLogin = function() {
    /*var auth = firebase.auth();

    var provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider).then(function(result) {
      console.log(result);
      var uid = result.user.uid;
      var accessToken = result.credential.accessToken;
    }).catch(function(error) {
      // An error occurred
    });*/


    var fbLoginSuccess = function (userData) {
      console.log("UserInfo: ", userData);
    }

    facebookConnectPlugin.login(["public_profile"], fbLoginSuccess,
      function loginError (error) {
        console.error(error)
      }
    );


  };



  $scope.googleLogin = function() {
    /*var auth = firebase.auth();

    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function(result) {
      console.log(result);
      var uid = result.user.uid;
      var accessToken = result.credential.accessToken;
    }).catch(function(error) {
      // An error occurred
    });*/



    window.plugins.googleplus.login(
    {
      },
    function (obj) {
      alert(JSON.stringify(obj)); // do something useful instead of alerting
    },
    function (msg) {
      alert('error: ' + msg);
    }
);


  };



})

.controller('ContactLensesCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  /*$scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };*/
})

.controller('EyeGlassesCtrl', function($scope, $stateParams) {
  /*$scope.chat = Chats.get($stateParams.chatId);*/
})

.controller('SunGlassesCtrl', function($scope) {
  /*$scope.settings = {
    enableFriends: true
  };*/
})

.controller('PowerSunglassesCtrl', function($scope) {
  /*$scope.settings = {
    enableFriends: true
  };*/
});

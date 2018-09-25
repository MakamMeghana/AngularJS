let app=angular.module("my",["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "home.html"
    })
    .when("/home", {
      templateUrl : "home.html"
    })
    .when("/feedback", {
        templateUrl : "feedback.html"
      })
    });

app.controller("myController",function($scope, $http){
    $scope.title="Hello";

    $http.get("data1.json").then(function(response){

      
        $scope.output=response.data;

    });
  

})

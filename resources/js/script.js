// Write Javascript code here
var app = angular.module('myApp', ['ui.bootstrap']);
  
  app.controller('ListController', function($scope){
    
  $scope.curPage = 1,
  $scope.itemsPerPage = 6,
  $scope.maxSize = 5;
      
    this.items = itemsDetails;
    
    
  $scope.numOfPages = function () {
    return Math.ceil(itemsDetails.length / $scope.itemsPerPage);
      
  };
    
    $scope.$watch('curPage + numPerPage', function() {
    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
    end = begin + $scope.itemsPerPage;
      
    $scope.filteredItems = itemsDetails.slice(begin, end);
  });
  });
  
  var itemsDetails = [
    { title: 'Test',
      description: 'This is a description',
      url: 'https://time.org',
      filter: 'thm'
      },
  ];
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.openPage = function(pageName, elmnt, color) {
        var i, tablinks;
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }
        document.getElementById(pageName).style.display = "block";
        elmnt.style.backgroundColor = color;
  }
});
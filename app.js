var app = angular.module('MyApp', ['ui.bootstrap']);


app.controller('MyController',['$scope', '$uibModal', function ($scope, $uibModal,  $modalInstance, $uibModalInstance) {


     $scope.popupopen = function(){
                         console.log('Hello');
                         var modalInstance = $uibModal.open({
                             templateUrl: 'Formcontent.html',
                         controller:'innerCtrl',
                        size:'lg'
                       
                             
                         });
      }

    
}]);



app.controller('innerCtrl',['$scope', '$uibModal', '$uibModalInstance', function ($scope, $uibModal,  $modalInstance, $uibModalInstance) {

        

    console.log("inside inner ctrl");
    $scope.IsVisiblePE = false;
    $scope.IsVisiblePI = true;
    $scope.IsVisibleAC = false;
    $scope.IsVisibleFM = false;
    $scope.IsVisibleID = false;
    $scope.IsVisibleATT = false;

     $scope.cancelModal = function(){
     console.log("cancelmodal");
    $uibModal.dismiss('close');
     }

     $scope.ok = function(){
       console.log("Save");
    $uibModal.close('save');
     }


    
    $scope.pageone = function(){

        console.log("In page 1..");
    $scope.IsVisiblePE = false;
    $scope.IsVisibleAC = false;
    $scope.IsVisibleFM = false;
    $scope.IsVisibleID = false;
    $scope.IsVisibleATT = false;
        $scope.IsVisiblePI =  true;
        

        
      }

      $scope.pagetwo = function(){

        console.log("In page 2..");
       
    $scope.IsVisiblePI = false;
    $scope.IsVisibleAC = false;
    $scope.IsVisibleFM = false;
    $scope.IsVisibleID = false;
    $scope.IsVisibleATT = false;
     $scope.IsVisiblePE =  true;
       
      }

      $scope.pagethree = function(){

        console.log("In page 3..");
        
        $scope.IsVisiblePE = false;
    $scope.IsVisiblePI = false;
    $scope.IsVisibleAC = false;
    $scope.IsVisibleID = false;
    $scope.IsVisibleATT = false;
    $scope.IsVisibleFM =  true;
        
      }

      $scope.pagefour = function(){

        console.log("In page 4..");
        
        $scope.IsVisiblePE = false;
    $scope.IsVisiblePI = false;
    $scope.IsVisibleAC = false;
    $scope.IsVisibleFM = false;
    $scope.IsVisibleID = false;
    $scope.IsVisibleATT = true;

        
      }

      $scope.pagefive = function(){

        console.log("In page 5..");
        
        $scope.IsVisiblePE = false;
    $scope.IsVisiblePI = false;
    $scope.IsVisibleFM = false;
    $scope.IsVisibleATT = false;
    $scope.IsVisibleAC = true;
        
      }

      $scope.submitclick = function(){
        console.log("Click on submit")
      }



      $scope.Show = function(){
        console.log("Show data!1");
        $scope.SameADD = true;
        $scope.DiffADD = true;
      }

       $scope.dontShow = function(){
        console.log("Show data!1");
        $scope.SameADD = true;
        $scope.DiffADD = false;
      }

      $scope.yesdisabled = function(){
        console.log("shown");
        $scope.TD = true;
      }

      $scope.notdisabled = function(){
        console.log("shown");
        $scope.TD = false;
      }

      $scope.Msy = function(){
        console.log("shown");
        $scope.spnn = true;
      }

      $scope.Msn = function(){
        console.log("shown");
        $scope.spnn = false;
      }



      $scope.Customers = [
            ];
      
      $scope.Add = function () {
                //Add the new item to the Array.
                var customer = {};
                customer.Name = $scope.Name;
                customer.Country = $scope.Country;
                customer.year = $scope.year;
                $scope.Customers.push(customer);

                //Clear the TextBoxes.
                $scope.Name = "";
                $scope.Country = "";
                $scope.year="";
            };


      $scope.Customersone = [
            ];
       $scope.Addon = function () {
                //Add the new item to the Array.
                var customerone = {};
                customerone.Cname = $scope.Cname;
                customerone.Des = $scope.Des;
                customerone.yearT = $scope.yearT;
                customerone.Address = $scope.Address;
                $scope.Customersone.push(customerone);

                //Clear the TextBoxes.
                $scope.Cname = "";
                $scope.Des = "";
                $scope.yearT="";
                $scope.Address="";
            };     

      $scope.Remove = function (index) {
                //Find the record using Index from Array.
                var name = $scope.Customers[index].Name;
                
                    $scope.Customers.splice(index, 1);
                
            }

            $scope.Removeone = function (index) {
                //Find the record using Index from Array.
                var name = $scope.Customersone[index].Cname;
                
                    $scope.Customersone.splice(index, 1);
                
            }

}]);





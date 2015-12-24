import jquery from 'jquery';

let RootController = function($scope, $state) {
  

  jquery(".top-bar-section li:not(.has-form) a:not(.button)").click(
    function() {
      console.log("Click");
      jquery(this).css("background-color", "#D6882D");
      jquery("this").siblings().css("background-color", "#253842");
    }
  );


  
};

RootController.$inject = ['$scope', '$state'];

export default RootController;
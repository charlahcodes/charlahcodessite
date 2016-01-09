import jquery from 'jquery';

let WorkController = function($scope, $state) {
  
  jquery('.overlay').hide();
  jquery('.overlayText').hide();
  jquery('.screenshot').mouseenter( function() { 
    jquery(this).siblings('.overlay').toggle(); 
    jquery(this).siblings('.overlayText').toggle(); 
  });

  jquery('.overlayText').mouseleave( function() { 
    jquery(this).siblings('.overlay').toggle(); 
    jquery(this).toggle(); 
  });

  
};

WorkController.$inject = ['$scope', '$state'];

export default WorkController;
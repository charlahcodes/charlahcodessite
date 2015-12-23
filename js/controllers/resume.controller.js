import jquery from 'jquery';

let ResumeController = function($scope, $state) {
  

  jquery(".skillsTitle").click(
    function() {
      jquery(this).siblings(".skillsList").toggle();
    }
  );

  jquery(".experienceTitle").click(
    function() {
      jquery(this).siblings(".experienceItem").toggle();
    }
  );

  jquery(".experienceItem").click(
    function() {
      jquery(this).children("ul").toggle();
    }
  );

  jquery(".educationTitle").click(
    function() {
      jquery(this).siblings(".educationItem").toggle();
    }
  );
  
};

ResumeController.$inject = ['$scope', '$state'];

export default ResumeController;
import jquery from 'jquery';

let ResumeController = function($scope, $state) {
  

  jquery(".skillsTitle").click(
    function() {
      jquery(this).siblings(".skillsList").toggle();
      jquery(this).children("i").toggleClass("fa fa-chevron-down");
      jquery(this).children("i").toggleClass("fa fa-chevron-up");
    }
  );

  jquery(".experienceTitle").click(
    function() {
      jquery(this).siblings(".experienceItem").toggle();
      jquery(this).children("i").toggleClass("fa fa-chevron-down");
      jquery(this).children("i").toggleClass("fa fa-chevron-up");
    }
  );

  jquery(".experienceItemTitle").click(
    function() {
      jquery(this).siblings("ul").toggle();
      jquery(this).children("i").toggleClass("fa fa-chevron-down");
      jquery(this).children("i").toggleClass("fa fa-chevron-up");
    }
  );

  jquery(".experienceSubitem").click(
    function() {
      jquery(this).children("ul").toggle();
      jquery(this).children("i").toggleClass("fa fa-chevron-down");
      jquery(this).children("i").toggleClass("fa fa-chevron-up");
    }
  );

  jquery(".educationTitle").click(
    function() {
      jquery(this).siblings(".educationItem").toggle();
      jquery(this).children("i").toggleClass("fa fa-chevron-down");
      jquery(this).children("i").toggleClass("fa fa-chevron-up");
    }
  );
  
};

ResumeController.$inject = ['$scope', '$state'];

export default ResumeController;
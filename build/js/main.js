$(function() {

$('.radio__item').on('click', function(e) {

  $(this).parents('.radios').find('.radio__item').not(this).removeClass('current');
  $(this).toggleClass('current');
  e.preventDefault();
})





// Toolbar extra buttons
            var btnFinish = $('<button></button>').text('Finish')
                                             .addClass('btn btn-info')
                                             .on('click', function(){
                                                    if( !$(this).hasClass('disabled')){
                                                        var elmForm = $("#myForm");
                                                        // if(elmForm){
                                                        //     elmForm.validator('validate');
                                                        //     var elmErr = elmForm.find('.has-error');
                                                        //     if(elmErr && elmErr.length > 0){
                                                        //         alert('Oops we still have error in the form');
                                                        //         return false;
                                                        //     }else{
                                                        //         alert('Great! we are ready to submit form');
                                                        //         elmForm.submit();
                                                        //         return false;
                                                        //     }
                                                        // }
                                                    }
                                                });
            var btnCancel = $('<button></button>').text('Cancel')
                                             .addClass('btn btn-danger')
                                             .on('click', function(){
                                                    $('#smartwizard').smartWizard("reset");
                                                    $('#myForm').find("input, textarea").val("");
                                                });


$('#myForm').validate( {
	errorPlacement: function(error, element) {
		// don't add the error labels
		return true;
}
	});


            // Smart Wizard
            $('#smartwizard').smartWizard({
                    selected: 0,
                    theme: 'dots',
                    transitionEffect:'fade',
                    showPreviousButton: true, // show/hide a Previous button
                    toolbarSettings: {toolbarPosition: 'bottom',
                                                      toolbarExtraButtons: [
			$('<button></button>').text('Back')
					      .addClass('btn btn-danger')
					      .on('click', function(){ 
						alert('Cancel button click');                            
					      }),

			$('<button></button>').text('Continue')
					      .addClass('btn btn-info')
					      .on('click', function(){ 
						alert('Finsih button click');                            
					      })

                      ]
                                    },
                    anchorSettings: {
                                markDoneStep: true, // add done css
                                markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
                                removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
                                enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
                            }
                 });

      



                   $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
           if(stepPosition === 'first'){
               $("#prev-btn").addClass('disabled');
               $("#finish-btn").hide();
           }else if(stepPosition === 'final'){
               $("#next-btn").hide();
               $("#finish-btn").show();
           }else{
               $("#finish-btn").hide();
               $("#next-btn").show();
               $("#prev-btn").removeClass('disabled');
           }

           $('.current_step').html($('.wizard-nav li.active a').data('step'))
        });

          var stepLength = $('.wizard-nav li').length;

          $('.length_step ').html(stepLength)
         
            // External Button Events
            $("#reset-btn").on("click", function() {
                // Reset wizard
                $('#smartwizard').smartWizard("reset");
                return true;
            });

            $("#prev-btn").on("click", function() {
                // Navigate previous
                $('#smartwizard').smartWizard("prev");
                return true;
            });

            $("#next-btn").on("click", function() {
                // Navigate next
                $('#smartwizard').smartWizard("next");
                return true;
            });

            $("#theme_selector").on("change", function() {
                // Change theme
                $('#smartwizard').smartWizard("theme", $(this).val());
                return true;
            });









});
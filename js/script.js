$(document).ready(function(){

	setupWindow();

	// Need to have setupWindow function fire again when the window is resized
	$(window).resize(function(){
		setupWindow();
	});

	// Named function for user interaction with hamburger nav
	function setupWindow(){
		// If statement to identify whether the screen is tablet size or smaller 
		if($(window).width() <= 768) {

			// Nav appears on click of hamburger icon and icon is hidden and replaced by close icon
			$('.hamburger').on('click', function(){
				$(this).hide();
				$('#closeIconNav').show().addClass('inlineBlock');
				$('.navigation').slideDown();
			});


			// If user clicks on closeIconNav then hide navigation and show hamburger icon
			$('#closeIconNav').on('click', function(){
				$(this).hide();
				$('.navigation').slideUp();
				setTimeout(function(){
					$('.hamburger').show();
				}, 100);
			});

			// Hide navigation and closeIconNav on nav item click and show hamburger icon
			$('.navItem').on('click', function(){
				$('.navigation').hide();
				$('#closeIconNav').hide();
				$('.hamburger').show();
			});

		}
	}

	// Show contact form on click of button and change active state of button
	$('#contactMe > button').on('click', function(event){
		event.preventDefault();
		// Add filter over the body
		$('#contactBackground').addClass('contactFormFilter');
		$('.contactForm').show();
	});

	// Hide contact form pop-up when close icon is clicked and remove contactFormFilter class from body
	$('#closeIconContactForm').on('click', function(event){
		event.preventDefault();
		$('.contactForm').hide();
		$('#contactBackground').removeClass('contactFormFilter');
	});

	// Hide contact form pop-up when submitButton is clicked and remove contactFormFilter class from body
	$('#submitButton').on('click', function(event){
		event.preventDefault();
		$('.contactForm').hide();
		$('#contactBackground').removeClass('contactFormFilter');
		$('input').val('');
		$('textarea').val('');
	});

	// When user presses enter in any text field the submit button clicks
	$('.pressEnter').keypress(function(event){
		if(event.keyCode == 13)
		$('#submitButton').click();
	});

	// Form validation to check if fields are empty - taken from http://stackoverflow.com/questions/3663968/how-to-validate-email-in-jquery	
	$('#submitButton').click(function() {

            var name = $('#nameInput').val();
            var email = $('#emailInput').val();
            var message = $('#messageInput').val();

            if (name == '') {
                $('#nameInput').addClass('error');
                $('#nameInput').keypress(function(){
                    $('#nameInput').removeClass('error');
                });
            }
            if (email == '') {
                $('#emailInput').addClass('error');
                $('#emailInput').keypress(function(){
                    $('#emailInput').removeClass('error');
                });
            }
            if (message == '') {
                $('#messageInput').addClass('error');
                $('#messageInput').keypress(function(){
                    $('#messageInput').removeClass('error');
                });
            }
            if (name == '' || email == '' || message == '') {
                $('.errorMessage').fadeIn('medium');
                return false;
            }

        });

	// Show hidden blogs div using slideDown when "More" button is clicked
	$('#blogPageContainer button').on('click', function(){
		$(this).fadeOut();
		$('.hiddenBlogs').slideDown();
	});

});
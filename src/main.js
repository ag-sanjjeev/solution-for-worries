$(document).ready(function() {

	$('#prompt_welcome').addClass('active');

});

function startPrompt() {
	
	$('#prompt_welcome').removeClass('active');
	$('#prompt_first').addClass('active');

}

function respondFirstPrompt(response) {
	
	if (response === 1) {
		$('#prompt_first').removeClass('active');
		$('#prompt_second').addClass('active');
	} else {
		$('#prompt_first').removeClass('active');
		$('#prompt_third').addClass('active');
	}

}

function respondSecondPrompt(response) {
	
	if (response === 1) {
		$('#prompt_second').removeClass('active');
		$('#prompt_third').addClass('active');
	} else {
		$('#prompt_second').removeClass('active');
		$('#prompt_third').addClass('active');
	}

}

function respondThirdPrompt(response) {
	
	if (response === 1) {
		$('#prompt_third').removeClass('active');
		$('#prompt_final').addClass('active');
	} else {
		$('#prompt_third').removeClass('active');
		$('#prompt_welcome').addClass('active');
	}

}
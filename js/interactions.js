$(document).ready(function() {

// LOCATION ICON POP UP//
	$(".locationIconButton, .orderLocationIconButton").click(function(){
		 $(".locationPopUp").show();
	 });

	 $(".close").click(function(){
	 	$(".locationPopUp").hide();
	 });

// HELP ICON POP UP//
	$(".helpIconButton, .orderHelpIconButton").click(function(){
		$(".helpPopUp").show();
	});

	 $(".close").click(function(){
	 	$(".helpPopUp").hide();
	 });

// HOME ICON POP UP//
	$(".orderHomeIconButton").click(function(){
		$(".homePopUp").show();
	});

	$(".close, .noButton").click(function(){
	 	$(".homePopUp").hide();
	});

// ORDER CONFIRMATIONPOP UP //
	$(".checkOutButton").click(function(){
		$(".checkoutPopUp").show();
	});

	$(".close, .goBackButton").click(function(){
	 	$(".checkoutPopUp").hide();
	});

// TOGGLE LANGUAGE //
	$("#maoriToggle").click(function(){
		$(".menuMaoriNav").toggleClass("active");
		$("#englishToggle").toggle();
		$(this).toggle();
	});

	$("#englishToggle").click(function(){
		$(".menuMaoriNav").toggleClass("active");
		$(this).toggle();
		$("#maoriToggle").toggle();
	});

// SCROLL TO TOP// 
	$('#maoriToggle, #englishToggle').click(function() {
        $('html, body').animate({
            scrollTop: $('html, body').offset().top
        }, 300);
    });

})


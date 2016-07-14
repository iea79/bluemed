$(document).ready(function() {

	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Lang
	$('.lang').on('mouseenter click', function() {
		$(this).addClass('open');
	});

	$('.lang').on('mouseleave', function() {
		$(this).removeClass('open');
	});



	// Scroll to ID
    // $('#main__menu a[href^="#"]').click( function(){ 
	   //  var scroll_el = $(this).attr('href'); 
    //     if ($(scroll_el).length != 0) {
	   //  $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    //     }
	   //  return false;
    // });

	// Stiky menu
    // $(document).ready(function(){
    //     var HeaderTop = $('#header').offset().top;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('#header').addClass('stiky');
    //             } else {
    //                     $('#header').removeClass('stiky');
    //             }
    //     });
    // });

    // Home page title resizer
    $('.title').fitText(0.421);
    $('.sub_title').fitText(1.92);
    $('.last_title').fitText(1.17);

    // Styler for firtst letter withe title
    $('.title_page').liFirstLetter({
        tag: 'b',
        classEl: 'first_letter'
    });

});

/*
// http://masscode.ru/index.php/k2/item/30-lifirstletter
liFirstLetter - jQuery First Letter
*/
(function($){
	$.fn.liFirstLetter = function(params){
		var p = $.extend({
			tag: 'span',
			classEl: 'firstletter'
		}, params);
		return this.each(function(){
			var el = $(this);
			htmlreplace(el);
			function htmlreplace(el) {
				$(el).contents().each(function(){
					if (this.nodeType == 3) {
						$(this).wrap('<span class="li"/>');
						return false
					}else {
						htmlreplace(this);
					};
				});
			};
			var arr = $('.li:first').html().split('');
			var arrFirst = arr.shift();
			var newFirst = '<'+p.tag+' class="'+p.classEl+'">'+arrFirst+'</'+p.tag+'>';		
			arr.unshift(newFirst);
			$('.li:first').html(arr.join(''));
			$('.li').each(function(){$(this).after($(this).html()).remove()});
		});
	};
})(jQuery);
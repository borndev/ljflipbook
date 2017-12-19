(function ($) {	
	$(window).on("load", function () {
		/*var hotspotStatus = false;
		$(".lj-gift-sliders").slick({
			arrows: false,
			infinite: false,
			dots: false,
			swipe: false,
			accessibility: false,
			autoplay: false
		}).on('beforeChange', function () {
			reset();
		}).on('afterChange', function(event, slick, currentSlide, index){
			var currentSlide = $(slick.$slides.get(currentSlide));
			if(!currentSlide.find('.lj-category-item:first-child .lj-category-article').hasClass('active-demo')) {
				//alert(1)
				$(currentSlide).find('.lj-category-item:first-child .lj-category-article').addClass('active-demo');
				$(currentSlide).find('.lj-category-item:first-child .lj-category-article span').addClass('active-bottom');
			}		
		});
	
		var categorySlider = $(".lj-category-slider").slick({
			arrows: false,
			infinite: true,
			dots: true,
			fade: true,
			speed: 800,
			waitForAnimate: false,
			pauseOnHover: false,
			autoplay: true,
			autoplaySpeed: 2500,
			pauseOnFocus: false
		});
		categorySlider.on('beforeChange', function () {
			reset();
		});
		categorySlider.on('afterChange', function(event, slick, currentSlide, index){
			var currentSlide = $(slick.$slides.get(currentSlide));
			if(!currentSlide.find('.lj-category-article').hasClass('active-demo')) {
				$(currentSlide).find('.lj-category-article').addClass('active-demo');
				$(currentSlide).find('.lj-category-article span').addClass('active-bottom');
			}		
		});*/
		$(".lj-side-nav").addClass('active');
		$(".lj-loading").addClass('off');
	
		$(".lj-article-close").on("click", function(){
			$(this).parent().removeClass('active');
			categorySlider.slick('slickPlay');
		});
	
		var documentwidth = parseInt($(document).width()); 

		$(".lj-gift-sliders .lj-gift-item:first-child .lj-category-slider .lj-category-item:first-child .lj-category-article").addClass("active-demo");
		$(".lj-gift-sliders .lj-gift-item:first-child .lj-category-slider .lj-category-item:first-child .lj-category-article span").addClass("active-bottom");
		console.log(documentwidth);
		if(documentwidth>1024){
			$(".lj-hotspot-icon").on('mouseenter',function(event){
				openHotspot($(this),'hover');	
			}); 
		}
		else{
			$(".lj-hotspot-icon").on('click',function(event){
				openHotspot($(this),'click');
				event.stopPropagation();
			});
		}
		$(window).on("resize", function () {		
			console.log(documentwidth);
			if(documentwidth>1024){
				$(".lj-hotspot-icon").on('mouseenter',function(){
					openHotspot($(this),'hover');
	
				});
			}
			else{
				$(".lj-hotspot-icon").on('click',function(event){
					openHotspot($(this),'click');
					event.stopPropagation();
				});
			}
		});
	
		function reset(){
			$('.lj-category-article').show();
			$(".lj-hs-content").hide();
			$(".lj-hotspot-icon").show();
			$('.lj-popup-overlay').remove();
			$(".lj-hotspot-icon").removeClass('active');
			
		}
		function openHotspot(element,triggerEvent) {
			hotspotStatus = true; 
			console.log(triggerEvent); 
	
			$(".lj-hotspot-icon").removeClass('active');
			element.hide();
			element.addClass('active').fadeIn('fast');
			
			$('.lg-hs-close').hide();
			var hotspot = element.data('target');
			console.log(hotspot);
			if ($('.'+hotspot+':visible').length == 0) {
				$(".lj-hs-content").hide();
				$('.'+hotspot).show();
			}
	
			$('.'+hotspot).find('.lg-hs-close').fadeIn(1000);
			
			//$('.lj-category-article').hide();
	
			if ($('.'+hotspot).parents('.lj-category-item').find('.lj-popup-overlay').length == 0) {

				$('<div class="lj-popup-overlay"></div>').insertBefore($('.'+hotspot).parents('.lj-category-item').find('.lj-hs-content:first'));
				//$('<div class="lj-popup-overlay"></div>').insertBefore($('.lj-category-item div:first-of-type').siblings('.lj-hs-content').eq(0));
				$('.'+hotspot).closest('.lj-category-item').find('.lj-popup-overlay').fadeIn('fast');
			}
	
			//categorySlider.slick('slickPause');
		};
	
		$('body').on('click', '.lg-hs-close', function () {
			hotspotStatus=false;
			reset();
			//categorySlider.slick('slickPlay');
		});
	
		$("body").on("click", ".lg-hs-image", function (event) {
			//event.stopPropagation();
		});
	
		
	
		$('.lj-category-item').click(function (event) { 
	
			if ($(event.target).hasClass('lj-hotspot-icon') || $(event.target).hasClass('lg-hs-text') || $(event.target).closest('div').hasClass('lg-hs-text') ||  event.target.hasAttribute("src")) {
				event.stopPropagation();
				//reset();
			}else{
				reset();
				//categorySlider.slick('slickPlay');
			} 
		});
	
		$(".lj-side-menu li a").click(function () {		
			//$(".lj-side-menu li a").removeClass("active");
			//$(this).addClass("active");
			var slideIndex = $(this).data("index");
			$('.lj-gift-sliders').slick('slickGoTo', slideIndex);
			//categorySlider.slick('slickGoTo', 0);
			if(hotspotStatus){
				//categorySlider.slick('slickPlay');
			}		 
			reset();
			//categorySlider.slick('slickPlay');
		});
		$(".lj-category-slider .slick-dots li button").click(function () {		
			//categorySlider.slick('slickPlay'); 
		});
		$('.lj-category-article span').click(function(){
			//alert('ok');
	
			$(this).parent('div').toggleClass('active');
			if($(this).parent('div').hasClass('active')) {
				//categorySlider.slick('slickPause');
			}
		});

		





	});

})(jQuery);
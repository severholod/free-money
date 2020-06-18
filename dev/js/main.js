$(document).ready(function(){
	var $page = $('html, body');
	$('.header-nav__item a').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 85
	    }, 1000);
	    return false;
	});
	$('.anchor-menu a').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 40
	    }, 1000);
	    return false;
	});
	/*------------------Попапы--------------------*/
	$('.fancybox').fancybox({
		maxWidth: 585,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	
	/*--------------------------------------------*/
	/*----------------Мобильное меню-------------*/
	$('.mobile-toggler').click(function(){
		$('.overlay').toggleClass('overlay-active');
		$(".mobile-menu").toggleClass('mobile-menu-active');
		$('.mobile-toggler').toggleClass('mobile-close');
	});
	$('.overlay').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu").removeClass('mobile-menu-active');
		$('.mobile-toggler').removeClass('mobile-close');
	});
	$('.mobile-menu__item:not(.mobile-menu__item-dropdown) a').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu").removeClass('mobile-menu-active');
		$('.mobile-toggler').removeClass('mobile-close');
	});
	$('.mobile-menu__item-dropdown a.dropdown').click(function(e){
		e.preventDefault();
		$('.mobile-menu__item-dropdown').toggleClass('mobile-menu__item-dropdown-active');
		$('.mobile-dropmenu').toggle(300);
	});
	/*------------------------------------------------*/
	/*----------------Слайдер на главной-------------*/
	var owl = $('.slider-wrap'),
			newsSlider = $('.news-slider'),
			projectsSlider = $('.projects-slider')
	owl.owlCarousel({
		responsiveClass:true,
		dots: false,
		nav: false,
		loop: true,
		responsive:{
      0:{
          items:1,
      },
      768:{
          items:2,
      },
      992:{
          items:3,
      }
    }
	});
	$('#prev').click(function () {
		newsSlider.trigger('prev.owl.carousel');
	});
	$('#next').click(function () {
		newsSlider.trigger('next.owl.carousel');
	});
	$('#mobile-prev').click(function () {
		newsSlider.trigger('prev.owl.carousel');
	});
	$('#mobile-next').click(function () {
		newsSlider.trigger('next.owl.carousel');
	});
	$('#projects-prev').click(function () {
		projectsSlider.trigger('prev.owl.carousel');
	});
	$('#projects-next').click(function () {
		projectsSlider.trigger('next.owl.carousel');
	});
	/*-----------------------------------------------*/
	/*--------------Прогресс в проектах--------------*/
	var collected = $('.collected'),
			goal = $('.goal'),
			progress = $('.progress'),
			i = 0,
			counter = goal.length;
	for(i; i<counter; i++) {
		progress[i].style.width = Number(collected[i].textContent) / Number(goal[i].textContent) * 100 + '%';
	}
	/*-----------------------------------------------*/
	/*---------------Фиксированная шапка-------------*/
	function scrollHead () {
		setInterval (function() {
			if (window.pageYOffset > 5) {
				$('.header').addClass('header-scroll');
			} else {
				$('.header').removeClass('header-scroll');
			}
		}, 300);
	};
	scrollHead();
	$(document).scroll(function() {
		scrollHead();
	});
	/*-----------------------------------------------*/
	/*------------------Чекбокс адреса----------------*/
	$('#address-check').change(function() {
		var address = $('#registration').val();
		if($(this).is(':checked')) {
			$('#address').val(address).attr('readonly', 'readonly');
		} else {
			$('#address').val('').removeAttr('readonly');
		}
	});
	/*------------------------------------------------*/
	/*-------------Чекбокс адреса в профиле-----------*/
	$('#fact-checkbox').change(function() {
		var reg 	= $('.reg input'),
				fact 	= $('.fact input[type="text"]');
		if($(this).is(':checked')) {
			for(var i = 0; i < reg.length; i++ ) {
				$(fact[i]).val($(reg[i]).val()).attr('readonly', 'readonly');
			}
		} else {
			for(var i = 0; i < fact.length; i++ ) {
				$(fact[i]).val('').removeAttr('readonly');
			}
		}
	});
	/*------------------------------------------------*/
	/*----------------Тогглы в профиле----------------*/
	$('.toggle-title').on('click', function() {
		if (window.innerWidth < 576) {
			$(this).toggleClass('open');
			$(this).next('.toggle').toggle(400);
		}
	});
	/*------------------------------------------------*/
	/*-------------------- Тогглы --------------------*/
	$('.toggler').on('click', function() {
			$(this).toggleClass('open');
			$(this).next('.toggle-content').toggle(400);
	});
	/*------------------------------------------------*/
	/*-------------------Договоры---------------------*/
		var itemswrap = $('.contracts-items'),
				tab	= $('.tab');
		switch (tab.length) {
			 case 3: $('.tabs').addClass('tabs-3'); break;
			 case 4: $('.tabs').addClass('tabs-4'); break;
			 case 5: $('.tabs').addClass('tabs-5'); break;
		}
		$(itemswrap).each(function(i) {
			var items = $(itemswrap[i]).children('.contracts-item');
			$(tab[i]).children('span').text('(' + items.length + ')');
			if(items.length == 0) {
				$(tab[i]).addClass('tab-disable');
			}
		});
		/*------------------------------------------------*/
		/*--------------------Табы-----------------------*/
		$('.tab').on('click', function() {
			var dataTab = ($(this).data('tab'));
			if($(this).hasClass('tab-disable')) {
				return false;
			}
			$('.tab').removeClass('tab-active');
			$(this).addClass('tab-active');
			$('.tab-content').removeClass('tab-content-active');
			$('.tab-content.' + dataTab).addClass('tab-content-active');
		});
	/*------------------------------------------------*/
  $( function() {
    $( "#date-slider" ).slider({
      range: "min",
      value: 18,
      min: 6,
      max: 36,
      slide: function( event, ui ) {
        $( "#date" ).val(  ui.value );
      }
    });
    $( "#date" ).val($( "#date-slider" ).slider( "value" ) );
    $( "#sum-slider" ).slider({
      range: "min",
      value: 100000,
      min: 50000,
      max: 15000000,
      step: 1000,
      slide: function( event, ui ) {
        $( "#sum" ).val(  ui.value + ' руб.' );
      }
    });
    $( "#sum" ).val($( "#sum-slider" ).slider( "value" ) + " руб." );
    $( "#percent-slider" ).slider({
      range: "min",
      value: 30,
      min: 15,
      max: 50,
      slide: function( event, ui ) {
        $( "#percent" ).val(  ui.value + "%" );
      }
    });
    $( "#percent" ).val($( "#percent-slider" ).slider( "value" ) + '%' );
    $( "#range-slider" ).slider({
          range: true,
          min: 15,
          max: 50,
          values: [ 15, 30 ],
          slide: function( event, ui ) {
            $( "#range-from" ).val(  ui.values[ 0 ] + "%" );
            $("#range-to").val( ui.values[ 1 ] + "%" );
          }
        });
        $( "#range-from" ).val( $( "#range-slider" ).slider( "values", 0 ) + "%" );
        $( "#range-to" ).val( $( "#range-slider" ).slider( "values", 1 ) + "%" );
  	} );
});
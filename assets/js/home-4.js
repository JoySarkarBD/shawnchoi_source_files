/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var RexLaw_4 = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				// this.preloader();
				// this.RXTestimonial();

				if($("#slider_id").length)
				{
					this.Animation();
					this.MianSlider();
					this.RXPortfolioSlide();
					this.bannerParalax();
					this.counterUp();
				}	
				this.BackgroundImage();
				this.RXMobileMenu();
				this.scrollTop();


				if($("#google-map").length)
				{
					this.GoogleMap();
				}

			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.header_style_four').addClass('rx-sticky-menu')
					} else {
						jQuery('.header_style_four').removeClass('rx-sticky-menu')
					}
				})
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 250) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			RXMobileMenu: function (){
				$('.rx-open_mobile_menu').on("click", function() {
					$('.rx-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.rx-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.rx-mobile_menu li.dropdown ul').length){
					$('.rx-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.rx-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			MianSlider: function (){
				jQuery('#slider_id').owlCarousel({
					items: 1,
					loop: false,
					nav: false,
					dots: false,
					autoplay: true,
					navSpeed: 800,
					smartSpeed: 1000,
					animateOut: 'fadeOut',
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
				});
			},
			RXPortfolioSlide: function (){
				$('#portfolio-slide-id').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: false,
					dots: true,
					loop:true,
					autoplay: false,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:2,
						},
						800:{
							items:2,
						},
						900:{
							items:2,
						},
						1000:{
							items:2,
						},
						1100:{
							items:3,
						},
						1300:{
							items:3,
						},
						1400:{
							items:4,
						},
						1500:{
							items:4,
						},
						1920:{
							items:5,
						},
					},
				})
			},
			bannerParalax: function (){
				$('.background_parallax').jarallax({
					speed: 0.3,
				});
			},
			counterUp: function (){
				if ($(".odometer").length) {
					$('.odometer').appear();
					$(document.body).on('appear', '.odometer', function(e) {
						var odo = $(".odometer");
						odo.each(function() {
							var countNumber = $(this).attr("data-count");
							$(this).html(countNumber);
						});
					});
				}
			},
			GoogleMap: function (){
				function isMobile() { 
					return ('ontouchstart' in document.documentElement);
				}
				function init_gmap() {
					if ( typeof google == 'undefined' ) return;
					var options = {						
						// center: [37.6534971,126.7765745],
						center: [37.652872,126.776220],
						zoom: 15,
						styles: [
						{
							"featureType": "all",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"weight": "2.00"
							}
							]
						},
						{
							"featureType": "all",
							"elementType": "geometry.stroke",
							"stylers": [
							{
								"color": "#9c9c9c"
							}
							]
						},
						{
							"featureType": "all",
							"elementType": "labels.text",
							"stylers": [
							{
								"visibility": "on"
							}
							]
						},
						{
							"featureType": "landscape",
							"elementType": "all",
							"stylers": [
							{
								"color": "#f2f2f2"
							}
							]
						},
						{
							"featureType": "landscape",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"color": "#ffffff"
							}
							]
						},
						{
							"featureType": "landscape.man_made",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"color": "#ffffff"
							}
							]
						},
						{
							"featureType": "poi",
							"elementType": "all",
							"stylers": [
							{
								"visibility": "off"
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "all",
							"stylers": [
							{
								"saturation": -100
							},
							{
								"lightness": 45
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"color": "#eeeeee"
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#7b7b7b"
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.text.stroke",
							"stylers": [
							{
								"color": "#ffffff"
							}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "all",
							"stylers": [
							{
								"visibility": "simplified"
							}
							]
						},
						{
							"featureType": "road.arterial",
							"elementType": "labels.icon",
							"stylers": [
							{
								"visibility": "off"
							}
							]
						},
						{
							"featureType": "transit",
							"elementType": "all",
							"stylers": [
							{
								"visibility": "off"
							}
							]
						},
						{
							"featureType": "water",
							"elementType": "all",
							"stylers": [
							{
								"color": "#46bcec"
							},
							{
								"visibility": "on"
							}
							]
						},
						{
							"featureType": "water",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"color": "#c8d7d4"
							}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#070707"
							}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text.stroke",
							"stylers": [
							{
								"color": "#ffffff"
							}
							]
						}
						],
						mapTypeControl: false,
						mapTypeControlOptions: {
							style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
						},
						navigationControl: false,
						scrollwheel: false,
						streetViewControl: true,
					}
					if (isMobile()) {
						options.draggable = false;
					}
					$('#googleMaps').gmap3({
						map: {
							options: options
						},
						marker: {
							// latLng: [37.6534971,126.7765745],
							latLng: [37.652872,126.776220],
							options: { icon: 'assets/img/map.png' }
						}
					});
				}
				init_gmap();
			}
		}
	}
	jQuery(document).ready(function (){
		RexLaw_4.init();
	});

})();
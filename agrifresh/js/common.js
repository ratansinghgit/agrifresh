function getTimeRemaining(e){var a=Date.parse(e)-Date.parse(new Date),t=Math.floor(a/1e3%60),i=Math.floor(a/1e3/60%60),o=Math.floor(a/36e5%24),r=Math.floor(a/864e5);return{total:a,days:r,hours:o,minutes:i,seconds:t}}function initializeClock(e,a){function t(){var e=getTimeRemaining(a);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),l.innerHTML=("0"+e.minutes).slice(-2),n.innerHTML=("0"+e.seconds).slice(-2),e.total<=0&&clearInterval(s)}var i=document.getElementById(e),o=i.querySelector(".days"),r=i.querySelector(".hours"),l=i.querySelector(".minutes"),n=i.querySelector(".seconds");t();var s=setInterval(t,1e3)}var deadline=new Date(Date.parse(new Date)+51744e4);$("#clockdiv").length&&initializeClock("clockdiv",deadline);var deadline=new Date(Date.parse(new Date)+51744e4);$("#clockdiv2").length&&initializeClock("clockdiv2",deadline);var deadline=new Date(Date.parse(new Date)+51744e4);$("#clockdiv3").length&&initializeClock("clockdiv3",deadline);var deadline=new Date(Date.parse(new Date)+51744e4);$("#clockdiv4").length&&initializeClock("clockdiv4",deadline),$(".counter_number1").counterUp({delay:1,time:1600}),$(document).ready(function(){$(".background-image-maker").each(function(){var e=$(this).next(".holder-image").find("img").attr("src");$(this).css("background-image","url("+e+")")})}),$(document).ready(function(){$(".carousal-client").owlCarousel({items:6,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],pagination:!0,autoPlay:!0,pagination:!1})}),$(document).ready(function(){$(".carousal-client2").owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,4],itemsTablet:[768,3],pagination:!0,autoPlay:!0,pagination:!1})}),$(document).ready(function(){$(".testimonial-slider").owlCarousel({items:2,itemsDesktop:[1199,2],itemsDesktopSmall:[979,2],itemsTablet:[768,1],pagination:!0,autoPlay:!0})}),$(document).ready(function(){$(".testimonial-slider2").owlCarousel({items:1,itemsDesktop:[1199,1],itemsDesktopSmall:[979,1],itemsTablet:[768,1],pagination:!0,navigation:!1,autoPlay:!1})}),$(document).ready(function(){$(".carousal-slide").owlCarousel({items:1,pagination:!1,navigation:!0,autoPlay:!1})}),$(document).ready(function(){$("#owl-fullwidth").owlCarousel({items:1,pagination:!1,navigation:!0,autoPlay:!1})}),$(document).ready(function(){$("#img-carousal").owlCarousel({items:4,pagination:!0,autoPlay:!1})}),$(document).ready(function(){$("#owl-fullwidth").owlCarousel({items:1,pagination:!1,navigation:!0,autoPlay:!1})}),$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollup").fadeIn():$(".scrollup").fadeOut()}),$(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},600),!1}),$(".scrollup2").click(function(){return $("html, body").animate({scrollTop:0},600),!1})}),(new WOW).init(),$(document).ready(function(e){$("#jqmeter-horizontal").jQMeter({goal:"$10,000",raised:"8000",width:"100%",height:"26px",bgColor:"#e1e1e1",barColor:"#1e1e1e",animationSpeed:1e3,displayTotal:!1}),$("#jqmeter-horizonta2").jQMeter({goal:"$10,000",raised:"9000",width:"100%",height:"26px",bgColor:"#e1e1e1",barColor:"#1e1e1e",animationSpeed:1e3,displayTotal:!1}),$("#jqmeter-horizonta3").jQMeter({goal:"$10,000",raised:"6000",width:"100%",height:"26px",bgColor:"#e1e1e1",barColor:"#fc1e4e",animationSpeed:1e3,displayTotal:!1}),$("#jqmeter-horizonta4").jQMeter({goal:"$10,000",raised:"7000",width:"100%",height:"26px",bgColor:"#e1e1e1",barColor:"#494dff",animationSpeed:1e3,displayTotal:!1})}),$("#demoprogressbar5").LineProgressbar({percentage:80,fillBackgroundColor:"#1e1e1e",height:"4px"}),$("#demoprogressbar6").LineProgressbar({percentage:90,fillBackgroundColor:"#1e1e1e",height:"4px"}),$("#demoprogressbar7").LineProgressbar({percentage:60,fillBackgroundColor:"#fc1e4e",height:"4px"}),$("#demoprogressbar8").LineProgressbar({percentage:70,fillBackgroundColor:"#494dff",height:"4px"}),$(document).ready(function(){$("#bar1").barfiller({barColor:"#1e1e1e"}),$("#bar2").barfiller({barColor:"#1e1e1e"}),$("#bar3").barfiller({barColor:"#fc1e4e"}),$("#bar4").barfiller({barColor:"#494dff",duration:3e3}),$("#bar9").barfiller({barColor:"#494dff"}),$("#bar10").barfiller({barColor:"#494dff"}),$("#bar11").barfiller({barColor:"#494dff"}),$("#bar12").barfiller({barColor:"#494dff",duration:3e3})}),$(document).ready(function(){$("#bar5").barfiller({barColor:"#1e1e1e"}),$("#bar6").barfiller({barColor:"#1e1e1e"}),$("#bar7").barfiller({barColor:"#fc1e4e"}),$("#bar8").barfiller({barColor:"#494dff",duration:3e3}),$("#bar13").barfiller({barColor:"#ff6c00",duration:3e3})}),$(document).ready(function(){var e=$("#grid6");e.shuffle({itemSelector:".item"}),$("#filter6 a").click(function(a){a.preventDefault(),$("#filter6 a").removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-group");e.shuffle("shuffle",t)})}),$(document).ready(function(){var e=$("#grid5");e.shuffle({itemSelector:".item"}),$("#filter5 a").click(function(a){a.preventDefault(),$("#filter5 a").removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-group");e.shuffle("shuffle",t)})}),$(document).ready(function(){var e=$("#grid4");e.shuffle({itemSelector:".item"}),$("#filter4 a").click(function(a){a.preventDefault(),$("#filter4 a").removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-group");e.shuffle("shuffle",t)})}),$(document).ready(function(){var e=$("#grid3");e.shuffle({itemSelector:".item"}),$("#filter3 a").click(function(a){a.preventDefault(),$("#filter3 a").removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-group");e.shuffle("shuffle",t)})}),$(document).ready(function(){$(".fancybox").fancybox()});var tpj=jQuery,revapi490;tpj(document).ready(function(){void 0==tpj("#rev_slider_490_1").revolution?revslider_showDoubleJqueryError("#rev_slider_490_1"):revapi490=tpj("#rev_slider_490_1").show().revolution({sliderType:"standard",sliderLayout:"fullwidth",dottedOverlay:"none",delay:9e3,navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",mouseScrollReverse:"default",onHoverStop:"off",touch:{touchenabled:"on",swipe_threshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:!1},arrows:{style:"zeus",enable:!0,hide_onmobile:!0,hide_under:600,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,tmp:'<div class="tp-title-wrap">  \t<div class="tp-arr-imgholder"></div> </div>',left:{h_align:"left",v_align:"center",h_offset:30,v_offset:0},right:{h_align:"right",v_align:"center",h_offset:30,v_offset:0}}},responsiveLevels:[1240,1024,778,480],visibilityLevels:[1240,1024,778,480],gridwidth:[1240,1024,778,480],gridheight:[880,680,580,400],lazyType:"none",parallax:{type:"mouse",origo:"slidercenter",speed:2e3,levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],type:"mouse"},shadow:0,spinner:"off",autoHeight:"off",disableProgressBar:"on",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:!1,fallbacks:{simplifyAll:"off",disableFocusListener:!1}})}),$(window).on("scroll",function(){$(window).scrollTop()>0?$("#header-fix").addClass("active"):$("#header-fix").removeClass("active")}),$(".video2").click(function(){$("#my-modal2").modal("show")}),$("#video3").click(function(){$("#my-modal3").modal("show")}),$(function(){var e=$("body");$(".menu-toggle").on("click",function(){return e.toggleClass("menu-open"),$(".menu-toggle").toggleClass("menu-toggle-left"),!1})}),$(".search-bar").click(function(){$(".search-wrap").css("top","0")}),$(".close-btn").click(function(){$(".search-wrap").css("top","-100%")});var tpj=jQuery,revapi1050;tpj(document).ready(function(){void 0==tpj("#rev_slider_1050_1").revolution?revslider_showDoubleJqueryError("#rev_slider_1050_1"):revapi1050=tpj("#rev_slider_1050_1").show().revolution({sliderType:"standard",jsFileLocation:"revolution/js/",sliderLayout:"fullscreen",dottedOverlay:"none",delay:9e3,navigation:{keyboardNavigation:"on",keyboard_direction:"vertical",mouseScrollNavigation:"on",mouseScrollReverse:"default",onHoverStop:"off",touch:{touchenabled:"on",swipe_threshold:75,swipe_min_touches:50,swipe_direction:"vertical",drag_block_vertical:!1},bullets:{enable:!0,hide_onmobile:!0,hide_under:1024,style:"hephaistos",hide_onleave:!1,direction:"vertical",h_align:"right",v_align:"center",h_offset:30,v_offset:0,space:5,tmp:""}},responsiveLevels:[1240,1024,778,480],visibilityLevels:[1240,1024,778,480],gridwidth:[1400,1240,778,480],gridheight:[868,768,960,720],lazyType:"none",shadow:0,spinner:"spinner2",stopLoop:"on",stopAfterLoops:0,stopAtSlide:1,shuffle:"off",autoHeight:"off",fullScreenAutoWidth:"off",fullScreenAlignForce:"off",fullScreenOffsetContainer:"",fullScreenOffset:"",disableProgressBar:"on",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:!1,fallbacks:{simplifyAll:"off",nextSlideOnWindowFocus:"off",disableFocusListener:!1}})}),$(document).ready(function(){$("#owl-carousel").owlCarousel({responsive:{0:{items:1},991:{items:3}},loop:!0,center:!0,dots:!0,nav:!1,autoplay:!0,pagination:!1});var e=$(window);e.scroll(function(){var a=e.scrollTop(),t=$(".header-container");a>50?t.addClass("fixedmenu"):t.removeClass("fixedmenu")})}),function(a){"use strict";function t(){return 0!=a("#myTabContent .tab-pane:visible").next().length?a("#myTabContent .tab-pane:visible").next().show().prev().hide():(a("#myTabContent .tab-pane:visible").hide(),a("#myTabContent .tab-pane:first").show()),!1}a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=a(this.hash);if(e=e.length?e:a("[name="+this.hash.slice(1)+"]"),e.length)return a("html, body").animate({scrollTop:e.offset().top-40},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")}),a(".hrvite a").click(function(){a(".why_block").toggleClass("why_block_top")}),a(".mob_tabs").click(function(){a(".home_tabs_section .nav-pills").toggleClass("navpill_active")}),a("body").scrollspy({target:"#navbarNav",offset:60}),a(function(){a("form[name='req-demo']").validate({rules:{first_name:"required",last_name:"required",type:"required",company_name:"required",phone_number:{required:!0,minlength:10,number:!0},email:{required:!0,email:!0}},messages:{first_name:"Please Enter First Name",last_name:"Please Enter Last Name",type:"Please Choose Type",company_name:"Please Enter Company",phone_number:{required:"Please Enter Phone Number",minlength:"Please Enter Valid Mobile",number:"Please Enter Valid Mobile"},email:{required:"Please Enter Email",email:"Please Enter Valid Email"}},submitHandler:function(e){e.submit()}})}),a(function(){a("form[name='contact-req']").validate({rules:{name:"required",email:{required:!0,email:!0},message:{required:!0,maxlength:145}},messages:{name:"Please Enter Name",message:{required:"Please Enter Message",maxlength:"Only 145 characters allowed."},email:{required:"Please Enter Email",email:"Please Enter Valid Email"}},submitHandler:function(e){var t=grecaptcha.getResponse(),i=a("#g-recaptcha-response").val();return 0==t.length&&""!=i?(a("#captcha").text("Please check"),!1):(a("#captcha").text(""),e.submit(),!0)}})}),a(window).width()<480?(a("#myTabContent .tab-pane").each(function(e){0!=e&&a(this).hide()}),a("#ser-next").click(function(){return 0!=a("#myTabContent .tab-pane:visible").next().length?a("#myTabContent .tab-pane:visible").next().show().prev().hide():(a("#myTabContent .tab-pane:visible").hide(),a("#myTabContent .tab-pane:first").show()),!1}),a("#ser-prev").click(function(){return 0!=a("#myTabContent .tab-pane:visible").prev().length?a("#myTabContent .tab-pane:visible").prev().show().next().hide():(a("#myTabContent .tab-pane:visible").hide(),a("#myTabContent .tab-pane:last").show()),!1}),setInterval(t,3e3)):a(".services-nav").hide(),a(".home_team .team").click(function(){a(this).addClass("team-active"),e.preventDefault()}),a(".team-active-close").on("click",function(e){return a(".team-active").removeClass("team-active"),e.preventDefault(),!1}),a(window).width()<1920&&(a("#services li").click(function(){var e=a(this).attr("rel");a(".owl-carousel-hr").trigger("owl.goTo",e-1)}),a("#myTabContent").addClass("owl-carousel-hr owl-carousel"),a(".owl-carousel-hr").owlCarousel({items:1,loop:!1,autoPlay:!0,autoPlayTimeout:1e3,autoPlayHoverPause:!0,autoHeight:!0,navigation:!0,singleItem:!0,afterAction:function(e){this.$owlItems.removeClass("active"),this.$owlItems.eq(this.currentItem).addClass("active");var t=(a("#services li").attr("rel"),this.$owlItems.eq(this.currentItem).addClass("active").attr("rel"));a("#services ul li").find("a").removeClass("active"),a("#services ul li").eq(t).find("a").addClass("active")}}),a(".owl-carousel-hr .owl-item").each(function(e){a(this).attr("rel",e+0)}))}(jQuery),$(document).ready(function(){$(".marketplace-main").prev(".header-container").addClass("marketplace-nav"),$(".tp-bgimg.defaultimg").css("height",$(window).height()),$(".burger-container").click(function(){$(".header-hrvite").toggleClass("menu-opened")}),$("ul.navbar-nav li a.js-scroll-trigger").click(function(){$(".header-hrvite").removeClass("menu-opened")})});
function smoothScroll(){function e(e){var n=t.scrollTop;0!==navigator.platform.indexOf("Mac")&&(0===t.scrollTop?t.scrollTop=t.scrollTop+2:t.scrollTop),null==o.end&&(o.end=t.scrollTop),o.end-=o.scrollAmount*e,o.scrollUp=e>0,null==o.interval&&(o.interval=setInterval(function(){var e=t.scrollTop,r=Math.round((o.end-e)/25),a=Date.now(),d=Math.min(1,(a-o.startTime)/o.scrollAmount),s=i.linear(d);(0===e||e>=t.scrollHeight-l-r||o.scrollUp&&r>=-1||!o.scrollUp&&r<=1)&&(clearInterval(o.interval),o.interval=null,o.end=null);var c=e+r;t.scrollTop=s*(c-n)+n},15))}if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var n=/Safari/.test(navigator.userAgent)&&!/Mobile/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)||null==!window.mozInnerScreenX&&navigator.platform.indexOf("Mac")>=0||navigator.platform.toUpperCase().indexOf("MAC")>=0,o={scrollAmount:50,scrollUp:!0,end:null,interval:null,startTime:Date.now(),checkBody:function(){document.documentElement.scrollTop+=1;var e=0!==document.documentElement.scrollTop?document.documentElement:document.body;return document.documentElement.scrollTop-=1,e}},i={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},t=o.checkBody(),l=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,r={mouseWheel:function(o){var i=1;o.wheelDelta?i=o.wheelDelta/120:o.detail&&(i=-o.detail/3),n||(e(i),o.preventDefault())}};document.addEventListener("mousewheel",r.mouseWheel,!1),document.addEventListener("DOMMouseScroll",r.mouseWheel,!1)}}$(document).ready(function(){var e=!1;!function(){var n=window.navigator.userAgent;n.indexOf("MSIE ")>0&&(e=!0),n.indexOf("Trident/")>0&&(e=!0),n.indexOf("Edge/")>0&&(e=!0)}(),1==e?setTimeout(function(){$(window).scrollTop()>0?(setTimeout(function(){$(".bg-home").addClass("is-faded--in")},50),$(".logo-container").addClass("is-faded--in"),$(".home--header").addClass("is-faded--in--down"),$(".home--body").addClass("is-faded--in"),$(".start-scroll").addClass("is-faded--in"),$(".nav").addClass("is-sliding--in--right"),$(".wrapper").addClass("is-scrollable"),$("body").addClass("is-scrollable"),smoothScroll(),$(".top-angle").addClass("is-sliding--up")):($(".bg-home").addClass("is-faded--in"),setTimeout(function(){$(".logo-container").addClass("is-faded--in"),$(".home--header").addClass("is-faded--in--down")},1e3),setTimeout(function(){$(".home--body").addClass("is-faded--in")},1500),setTimeout(function(){$(".start-scroll").addClass("is-faded--in"),$(".nav").addClass("is-sliding--in--right"),$(".wrapper").addClass("is-scrollable"),$("body").addClass("is-scrollable"),smoothScroll(),$(".top-angle").addClass("is-sliding--up")},1750))},100):$(window).scrollTop()>0?($(".bg-home").addClass("is-faded--in"),$(".logo-container").addClass("is-faded--in"),$(".home--header").addClass("is-faded--in--down"),$(".home--body").addClass("is-faded--in"),$(".start-scroll").addClass("is-faded--in"),$(".nav").addClass("is-sliding--in--right"),$(".wrapper").addClass("is-scrollable"),$("body").addClass("is-scrollable"),smoothScroll(),$(".top-angle").addClass("is-sliding--up")):($(".bg-home").addClass("is-faded--in"),setTimeout(function(){$(".home--header").addClass("is-faded--in--down")},1e3),setTimeout(function(){$(".home--body").addClass("is-faded--in")},1500),setTimeout(function(){$(".logo-container").addClass("is-faded--in"),$(".start-scroll").addClass("is-faded--in"),$(".nav").addClass("is-sliding--in--right"),$(".wrapper").addClass("is-scrollable"),$("body").addClass("is-scrollable"),smoothScroll(),$(".top-angle").addClass("is-sliding--up")},1750))});var videoLoop=document.querySelector(".bg-home__video"),containerLoop=document.querySelector(".bg-home"),setVideoDimensionsLoop=function(){var e=videoLoop.videoWidth,n=videoLoop.videoHeight,o=(e/n).toFixed(2),i=window.getComputedStyle(containerLoop),t=parseInt(i.getPropertyValue("width")),l=parseInt(i.getPropertyValue("height"));if(t/e>l/n)var r=t,a=Math.ceil(r/o);else var a=l,r=Math.ceil(a*o);videoLoop.style.width=r+"px",videoLoop.style.height=a+"px"};if(videoLoop.addEventListener("loadedmetadata",setVideoDimensionsLoop,!1),window.addEventListener("resize",setVideoDimensionsLoop,!1),setVideoDimensionsLoop(),$(".nav").scrollspy(),$(".nav-item--home").on("click",function(e){TweenLite.to(window,.75,{scrollTo:"#Home"})}),$(".nav-item--develop").on("click",function(e){TweenLite.to(window,.75,{scrollTo:{y:"#Develop",offsetY:-5}})}),$(".start-scroll").on("click",function(e){TweenLite.to(window,.75,{scrollTo:"#Develop",offsetY:-5})}),$(".nav-item--launch").on("click",function(e){TweenLite.to(window,.75,{scrollTo:"#Launch",offsetY:-5})}),$(".nav-item--monetize").on("click",function(e){TweenLite.to(window,.75,{scrollTo:{y:"#Monetize",offsetY:-5}})}),$(".nav-item--resources").on("click",function(e){TweenLite.to(window,.75,{scrollTo:{y:"#Resources",offsetY:-5}})}),$(window).resize(function(){$(".nav").scrollspy()}),$(".js-hamburger, .nav-link").click(function(){$(".js-hamburger").toggleClass("is-active"),$(".nav__list").toggleClass("is-expanded"),$(".js-hamburger").hasClass("is-active")?setTimeout(function(){$(".nav__list ul").toggleClass("is-shown")},250):$(".nav__list ul").toggleClass("is-shown")}),!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var controller=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onEnter",duration:"150%"}}),controllerBridge=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onEnter",duration:"100%"}});new ScrollMagic.Scene({triggerElement:".is-parallaxing--develop"}).setTween(".is-parallaxing--develop",{y:"-175%",ease:Linear.easeNone}).addTo(controller);var tweenBridgeDevelop1=(new TimelineMax).to(".bridge--1--develop",1,{y:"-5000%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--1--develop"}).setTween(tweenBridgeDevelop1).addTo(controllerBridge),tweenBridgeDevelop2=(new TimelineMax).to(".bridge--2--develop",1,{y:"-1200%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--2--develop"}).setTween(tweenBridgeDevelop2).addTo(controllerBridge),tweenBridgeDevelop3=(new TimelineMax).to(".bridge--3--develop",1,{y:"-400%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--3--develop"}).setTween(tweenBridgeDevelop3).addTo(controllerBridge),tweenBridgeDevelop4=(new TimelineMax).to(".bridge--4--develop",1,{y:"-150%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--4--develop"}).setTween(tweenBridgeDevelop4).addTo(controllerBridge);new ScrollMagic.Scene({triggerElement:".is-parallaxing--launch"}).setTween(".is-parallaxing--launch",{y:"-130%",ease:Linear.easeNone}).addTo(controller);var tweenBridgeReach1=(new TimelineMax).to(".bridge--1--launch",1,{y:"-5000%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--1--launch"}).setTween(tweenBridgeReach1).addTo(controllerBridge),tweenBridgeReach2=(new TimelineMax).to(".bridge--2--launch",1,{y:"-1200%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--2--launch"}).setTween(tweenBridgeReach2).addTo(controllerBridge),tweenBridgeReach3=(new TimelineMax).to(".bridge--3--launch",1,{y:"-400%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--3--launch"}).setTween(tweenBridgeReach3).addTo(controllerBridge),tweenBridgeReach4=(new TimelineMax).to(".bridge--4--launch",1,{y:"-150%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--4--launch"}).setTween(tweenBridgeReach4).addTo(controllerBridge);new ScrollMagic.Scene({triggerElement:".is-parallaxing--monetize"}).setTween(".is-parallaxing--monetize",{y:"-145%",ease:Linear.easeNone}).addTo(controller);var tweenBridgeMonetize1=(new TimelineMax).to(".bridge--1--monetize",1,{y:"-5000%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--1--monetize"}).setTween(tweenBridgeMonetize1).addTo(controllerBridge),tweenBridgeMonetize2=(new TimelineMax).to(".bridge--2--monetize",1,{y:"-1200%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--2--monetize"}).setTween(tweenBridgeMonetize2).addTo(controllerBridge),tweenBridgeMonetize3=(new TimelineMax).to(".bridge--3--monetize",1,{y:"-400%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--3--monetize"}).setTween(tweenBridgeMonetize3).addTo(controllerBridge),tweenBridgeMonetize4=(new TimelineMax).to(".bridge--4--monetize",1,{y:"-150%"}),scene=new ScrollMagic.Scene({triggerElement:".bridge--4--monetize"}).setTween(tweenBridgeMonetize4).addTo(controllerBridge)}
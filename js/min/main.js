function loadingBarAnimation(){loadbarAni.addClass("visible"),loadiconAni.css("display","block")}function stopload(){loadbarAni.removeClass("visible"),loadiconAni.css("display","none")}var loadbarAni=$(".loader__screen"),loadiconAni=$(".loader__contects");setTimeout("stopload()",6e3),window.addEventListener("load",function(){$("html,body").animate({scrollTop:0},"1"),stopload()},!1),jQuery(document).ready(function(t){function e(t,e){i=!0,t=""==t?"index":t,r.find('*[data-menu="'+t+'"]').addClass("selected").parent("li").siblings("li").children(".selected").removeClass("selected"),o(t,e)}function o(e,o){loadingBarAnimation(),setTimeout(function(){var n=t('<div class="main__wrap overflow-hidden '+e+'"></div>').appendTo(d);n.load(e+".html .main__wrap > *",function(i){n.prev(".visible").removeClass("visible"),n.addClass("visible"),a(e),t(".no-csstransitions").length>0&&a(n),"index"==e?t.getScript("js/index.js"):"about"==e?(t.getScript("js/jquery.inview.min.js"),t.getScript("http://d3js.org/d3.v3.min.js"),t.getScript("js/about.js")):(e="projects")&&t.getScript("js/projects.js");var l=e+".html";l!=window.location&&o&&(window.history.pushState({path:l},"",l),s=!0),t("html,body").animate({scrollTop:0},"1"),p.removeClass("visible"),m.css("display","none")})},500)}function a(e){t(".main__wrap."+e).removeClass("overflow-hidden").prev(".main__wrap").remove(),i=!1}function n(t){c.hasClass(t),c.removeClass(),c.addClass(t)}var i=!1,s=!1,l=!1,c=t("#body"),r=t("#primeNav, #main"),d=t("#main"),p=t(".loader__screen"),m=t(".loader__contects");"projects"!=c.hasClass()&&(l=!1),r.on("click",".nav-link",function(o){console.log("event"),o.preventDefault();var a=t(this),l=a.data("menu");a.hasClass("selected")||i||(e(l,!0),n(l)),s=!0}),t(".toLink").on("click",function(t){console.log(t)}),t(window).on("popstate",function(){if(s){console.log("popState");var t=location.pathname.split("/"),o=t[t.length-1].replace(".html",""),a=location.hash;i||""!=a||e(o,!1)}}),modalOpen=t("#modalOpen"),modalOpen.click(function(){function e(){var e=t(window).width(),o=t(window).height(),a=t(".contact__wrap").outerWidth(),n=t(".contact__wrap").outerHeight();t(".contact__wrap").css({left:(e-a)/2+"px",top:(o-n)/2+"px"}),t(".main__wrap").css({height:"100vh",overflow:"hidden"})}t(".contact").append('<div id="contact" class="contact__bg"></div>'),e(),t(".contact").fadeIn("slow"),t(".contact__bg").click(function(){t(".contact").fadeOut("slow",function(){t(".contact__bg").remove(),t(".main__wrap").css({height:"100%",overflow:""})})})}),t("#contactForm").submit(function(e){e.preventDefault();var o=t("#contactForm"),a=o.find("button");if(t("#name").val()&&t("#email").val()&&t("#comments").val()){if(!t("#email").val().match("^[0-9A-Za-z._-]+@[0-9A-Za-z.-]+$"))return!1;t(".result__loading").css("display","block"),t.ajax({url:o.attr("action"),type:o.attr("method"),data:o.serialize()+"&delay=1",timeout:1e4,beforeSend:function(t,e){a.attr("disabled",!0)},complete:function(t,e){a.attr("disabled",!1)},success:function(e,a,n){o[0].reset(),t("#error").empty(),t(".result__msg").css("display","block"),t(".contact__form").css("display","none")},error:function(t,e,o){}})}else t("#error").html("Please fill the required field.")})});
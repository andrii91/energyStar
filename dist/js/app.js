$(document).ready(function(){function t(){var t={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,i,n){t[i]=n});return t}function e(t){for(var e=t+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var s=i[n];" "==s.charAt(0);)s=s.substring(1,s.length);if(0==s.indexOf(e))return s.substring(e.length,s.length)}return null}$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(".scroll").click(function(t){event.preventDefault();var e=$(this).attr("href"),i=$(e).offset().top;$("body,html").animate({scrollTop:i-80},1500)}),$(".products-more").click(function(){$("#productsmore").html($(this).parents(".products-item").find(".productsmore-item_hidden").html())});var i=0,n=$(".hide_products").length;$(".show_more").click(function(t){event.preventDefault(),i+=4,n<i&&$(this).hide(200),$(".hide_products").each(function(t){if($(this).show(200),0==t&&$(this).addClass("scrollTOP"),$(this).removeClass("hide_products"),i==t+1)return!1});var e=$(".scrollTOP"),s=$(e).offset().top;$("body,html").animate({scrollTop:s-80},1500),$(".scrollTOP").removeClass("scrollTOP")}),$(".reviews-slider").slick({lazyLoad:"ondemand",dots:!1,arrows:!0,infinite:!0,speed:400,slidesToShow:3,slidesToScroll:1,prevArrow:'<svg class="prev" width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-1" x2="61.3523" y2="-1" transform="matrix(-1 0 0 1 63.353 20.4058)" stroke="#E6E6E6" stroke-width="2"/><line y1="-1" x2="26.4094" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.6787 2)" stroke="#E6E6E6" stroke-width="2"/><line x1="20.8705" y1="38.4024" x2="2.19624" y2="19.7281" stroke="#E6E6E6" stroke-width="2"/></svg>',nextArrow:'<svg class="next" width="64" height="39" viewBox="0 0 64 39" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="19.4058" x2="61.3523" y2="19.4058" stroke="#E6E6E6" stroke-width="2"/><line x1="44.2808" y1="1.29289" x2="62.9551" y2="19.9672" stroke="#E6E6E6" stroke-width="2"/><line y1="-1" x2="26.4094" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.5737 36.7964)" stroke="#E6E6E6" stroke-width="2"/></svg>',responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{dots:!0,slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{dots:!0,slidesToShow:1,slidesToScroll:1}}]}),$(".reviews-slider ").on("beforeChange",function(t,e,i,n){var s=n+1;s<10&&(s="0"+s),$("#curent").text(s),$("#all").text("0"+e.slideCount)}),$("form input").focusin(function(){$(this).parents(".label").css({"border-color":"#004FC6"}),$(this).parents(".label").find("span").css({color:"#004FC6","font-size":"14px"})}),$("form input").focusout(function(){$(this).parents(".label").css({"border-color":"#000"}),$(this).parents(".label").find("span").css({color:"#000","font-size":"18px"})}),$(".order-btn, .call-btn").click(function(){$('input[name="order_type"]').val($(this).data("title")),$("#order_form .title").text($(this).data("title")),$(this).hasClass("pr-btn")?$("#order_form .order-btn").text("Замовити"):$("#order_form .order-btn").text("Відправити")});var s,r='<svg style="width: 20px; position:absolute;top: 10px;right: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';$(".submit").click(function(t){t.preventDefault();var e=$(this).closest("form").find("[required]");$(e).each(function(){if(""==$(this).val()){$(this);if("email"==$(this).attr("type")){var t=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;if(!t.test($(this).val()))return $("input[name=email]").val(""),$(this).addClass("error").parent(".label").append('<div class="allert">'+r+"</div>"),s=1,$(":input.error:first").focus(),!1}else{if("tel"!=$(this).attr("type"))return $(this).addClass("error").parent(".label").append('<div class="allert">'+r+"</div>"),s=1,$(":input.error:first").focus(),!1;var e=/^()[- +()0-9]{9,18}/i;if(!e.test($(this).val()))return $("input[name=phone]").val(""),$(this).addClass("error").parent(".label").append('<div class="allert">'+r+"</div>"),s=1,$(":input.error:first").focus(),!1}return s=1,!1}s=0,$(this).addClass("error").parent(".label").find(".allert").remove()}),1!==s&&$(this).unbind("submit").submit()}),$('input[name="utm_source"]').val(t().utm_source),$('input[name="utm_campaign"]').val(t().utm_campaign),$('input[name="utm_medium"]').val(t().utm_medium),$('input[name="utm_term"]').val(t().utm_term),$('input[name="utm_content"]').val(t().utm_content),$('input[name="click_id"]').val(t().aff_sub),$('input[name="affiliate_id"]').val(t().aff_id),$('input[name="user_agent"]').val(navigator.userAgent),$('input[name="ref"]').val(document.referrer),$('input[name="page_url"]').val(window.location),$.get("https://ipinfo.io",function(t){$('input[name="ip_address"]').val(t.ip),$('input[name="city"]').val(t.city),$('input[name="country"]').val(t.country),$('input[name="region"]').val(t.region)},"jsonp"),$('input[name="phone"]').inputmask("+38(099) 99 999 99"),setTimeout(function(){$(".gclid_field").val(e("gclid")),""==$(".gclid_field").val()&&$(".gclid_field").val(e("_gid"))},2e3),$("form").on("submit",function(t){t.preventDefault();var e=$(this);e.find(".submit").addClass("inactive"),e.find(".submit").prop("disabled",!0),setTimeout(function(){window.location.href="success.html"},1e3)}),$("#nav-icon").click(function(){$("img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))}),$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$(".menu").slideToggle(200)}),$(".menu").hover(function(){$("img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))})}),$(window).width()<1200&&($(".remowe_el").remove(),$(".mob-slider").slick({infinite:!0,arrows:!1,dots:!0,slidesToShow:2,slidesToScroll:2,adaptiveHeight:!0,customPaging:function(t,e){return"<a>0"+(e+1)+"</a>"}}),$(".menu li a").click(function(){$(".menu").hide("200")}));var o=lozad();o.observe()});
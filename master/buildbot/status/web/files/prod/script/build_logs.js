$(document).ready(function(){$(function(){var e=window.location.pathname.split("/");$(".top-menu a").each(function(){var t=this.href.split("/");t[t.length-1].trim().toLowerCase()==e[1].trim().toLowerCase()&&$(this).parent().addClass("selected")})}),$(".build-log-header").each(function(){$(this).html($(this).text().replace("environment:","<span class='env'></span>environment:"));$(".env",this).parent().contents().filter(function(){return 3===this.nodeType&&""!==this.nodeValue.trim()}).last().wrapAll('<div class="all-text" />');0===$(".env",this).length&&$(this).next($(".js-header-btn")).remove()}),$(".js-header-btn").click(function(e){e.preventDefault();var t=$(this);$(t).prev(".build-log-header").children(".all-text").slideToggle("slow",function(){$(t).toggleClass("open")})}),$("#toggleExpand").click(function(e){e.preventDefault(),$(this).toggleClass("expanded");var t=$(this).hasClass("expanded");$(this).text(1==t?"Collapse all":"Expand all"),$(".js-header-btn").each($(this).hasClass("expanded")?function(){$(this).hasClass("open")||$(this).trigger("click")}:function(){$(this).hasClass("open")&&$(this).trigger("click")})})});
//# sourceMappingURL=build_logs.js.map
define(["helpers","text!templates/popups.html","mustache"],function(e,t,n){var r;return r={init:function(){$("#tablesorterRt").delegate("a.popup-btn-json-js","click",function(e){e.preventDefault(),r.showjsonPopup($(this).data())}),$(".popup-btn-js-2").click(function(e){e.preventDefault(),r.nonAjaxPopup($(this))}),$("#tablesorterRt").delegate(".popup-btn-js","click",function(t){t.preventDefault();var n=document.URL,i=document.createElement("a");i.href=n;var s=i.protocol+"//"+i.host+"/json/buildqueue?",o=e.codebasesFromURL({builder:$(this).attr("data-builderName")}),u=[];for(var a in o)u.push(encodeURIComponent(a)+"="+encodeURIComponent(o[a]));var f=u.join("&");r.pendingJobs(s+f)}),$("#getBtn").click(function(e){e.preventDefault(),r.codebasesBranches()}),$("#tablesorterRt").delegate(".ajaxbtn","click",function(e){e.preventDefault(),r.externalContentPopup($(this))}),$(".ajaxbtn").click(function(e){e.preventDefault(),r.externalContentPopup($(this))})},showjsonPopup:function(r){var i=$(n.render(t,r));$("body").append(i),e.jCenter(i).fadeIn("fast",function(){e.closePopup(i)})},validateForm:function(e){var r=$(".command_forcebuild",e),i=":button, :hidden, :checkbox, :submit";$(".grey-btn",r).click(function(e){var s=$("input",r).not(i),o=s.filter(function(){return this.name.indexOf("revision")>=0}),u=o.filter(function(){return this.value===""});if(u.length>0&&u.length<o.length){o.each(function(){$(this).val()===""?$(this).addClass("not-valid"):$(this).removeClass("not-valid")}),$(".form-message",r).hide();if(!$(".error-input",r).length){var a=n.render(t,{errorinput:"true",text:"Fill out the empty revision fields or clear all before submitting"}),f=$(a);$(r).prepend(f)}e.preventDefault()}})},nonAjaxPopup:function(t){var n=t.next($(".more-info-box-js")).clone();n.appendTo($("body")),e.jCenter(n).fadeIn("fast",function(){e.closePopup(n)}),$(window).resize(function(){e.jCenter(n)})},pendingJobs:function(r){var i=n.render(t,{preloader:"true"}),s=$(i);$("body").append(s).show();var o=document.URL,u=document.createElement("a");u.href=o;var a=u.protocol+"//"+u.host+u.pathname;$.ajax({url:r,cache:!1,dataType:"json",success:function(r){s.remove();var i=$(n.render(t,{pendingJobs:r,showPendingJobs:!0,cancelAllbuilderURL:r[0].builderURL})),o=i.find(".waiting-time-js");o.each(function(t){e.startCounter($(this),r[t].submittedAt)}),i.appendTo("body"),e.jCenter(i).fadeIn("fast",function(){e.closePopup(i)})}})},codebasesBranches:function(){var r=$("#pathToCodeBases").attr("href"),i=n.render(t,{preloader:"true"}),s=$(i);$("body").append(s).show();var o=n.render(t,{popupOuter:"true",headline:"Select branches"}),u=$(o);u.appendTo("body"),$.get(r).done(function(t){var n=$("#content1");s.remove();var r=$(t).find("#formWrapper");r.children("#getForm").prepend('<div class="filter-table-input"><input value="Update" class="blue-btn var-2" type="submit" /></div>'),r.appendTo(n),e.jCenter(u).fadeIn("fast",function(){$("#getForm .blue-btn").focus()}),$(window).resize(function(){e.jCenter(u)}),require(["selectors"],function(t){t.init(),$(window).resize(function(){e.jCenter($(".more-info-box-js"))})}),$("#getForm").attr("action",window.location.href),$('#getForm .blue-btn[type="submit"]').click(function(){$(".more-info-box-js").hide()}),e.closePopup(u)})},customTabs:function(){$(".tabs-list li").click(function(e){var t=$(this).index();$(this).parent().find("li").removeClass("selected"),$(this).addClass("selected"),$(".content-blocks > div").each(function(e){$(this).index()!=t?$(this).hide():$(this).show()})})},externalContentPopup:function(t){var n=t.attr("data-popuptitle"),i=t.attr("data-b"),s=t.attr("data-indexb"),o=t.attr("data-returnpage"),u=t.attr("data-rt_update"),a=t.attr("data-contenttype"),f=t.attr("data-b_name"),l=$('<div id="bowlG"><div id="bowl_ringG"><div class="ball_holderG"><div class="ballG"></div></div></div></div>'),c=$("body");c.append(l);var h=r.htmlModule(n);h.appendTo(c);var p={rt_update:u,datab:i,dataindexb:s,builder_name:f,returnpage:o};e.codebasesFromURL(p);var d=location.protocol+"//"+location.host+"/forms/forceBuild";$.get(d,p).done(function(t){var n=$("#content1");l.remove(),$(t).appendTo(n),a==="form"&&(e.setFullName($("#usernameDisabled, #usernameHidden",n)),r.validateForm(n)),e.jCenter(h).fadeIn("fast"),$(window).resize(function(){e.jCenter(h)}),e.closePopup(h)})},htmlModule:function(e){var t=$('<div class="more-info-box remove-js"><span class="close-btn"></span><h3 class="codebases-head">'+e+"</h3>"+'<div id="content1"></div></div>');return t}},r});
define([],function(){var e={sort:function(r,a){var t,n,i=/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,p=/(^[ ]*|[ ]*$)/g,c=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,l=/^0x[0-9a-f]+$/i,f=/^0/,s=function(r){return e.insensitive&&(""+r).toLowerCase()||""+r},u=s(r).replace(p,"")||"",o=s(a).replace(p,"")||"",d=u.replace(i,"\x00$1\x00").replace(/\0$/,"").replace(/^\0/,"").split("\x00"),h=o.replace(i,"\x00$1\x00").replace(/\0$/,"").replace(/^\0/,"").split("\x00"),x=parseInt(u.match(l))||1!=d.length&&u.match(c)&&Date.parse(u),w=parseInt(o.match(l))||x&&o.match(c)&&Date.parse(o)||null;if(w){if(w>x)return-1;if(x>w)return 1}for(var $=0,m=Math.max(d.length,h.length);m>$;$++){if(t=!(d[$]||"").match(f)&&parseFloat(d[$])||d[$]||0,n=!(h[$]||"").match(f)&&parseFloat(h[$])||h[$]||0,isNaN(t)!==isNaN(n))return isNaN(t)?1:-1;if(typeof t!=typeof n&&(t+="",n+=""),n>t)return-1;if(t>n)return 1}return 0}};return e});
//# sourceMappingURL=natural-sort.js.map
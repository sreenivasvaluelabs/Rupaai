!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&"object"==typeof module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(f,e){f.fn.resizable||(f.fn.resizable=function(d){var h={handleSelector:null,resizeWidth:!0,resizeHeight:!0,resizeWidthFrom:"right",resizeHeightFrom:"bottom",onDragStart:null,onDragEnd:null,onDrag:null,touchActionNone:!0,instanceId:null};return"object"==typeof d&&(h=f.extend(h,d)),this.each(function(){var i,t,r=f.extend({},h);r.instanceId||(r.instanceId="rsz_"+(new Date).getTime());var e,a=f(this);if("destroy"===d){if(!(r=a.data("resizable")))return;return(e=u(r.handleSelector,a)).off("mousedown."+r.instanceId+" touchstart."+r.instanceId),r.touchActionNone&&e.css("touch-action",""),void a.removeClass("resizable")}function n(e){e.stopPropagation(),e.preventDefault()}function o(e){var t,n,o=s(e);t="left"===r.resizeWidthFrom?i.width-o.x+i.x:i.width+o.x-i.x,n="top"===r.resizeHeightFrom?i.height-o.y+i.y:i.height+o.y-i.y,r.onDrag&&!1===r.onDrag(e,a,t,n,r)||(r.resizeHeight&&a.height(n),r.resizeWidth&&a.width(t))}function c(e){return e.stopPropagation(),e.preventDefault(),f(document).off("mousemove."+r.instanceId),f(document).off("mouseup."+r.instanceId),(window.Touch||navigator.maxTouchPoints)&&(f(document).off("touchmove."+r.instanceId),f(document).off("touchend."+r.instanceId)),f(document).off("selectstart."+r.instanceId,n),a.css("transition",t),f("iframe").css("pointer-events","auto"),r.onDragEnd&&r.onDragEnd(e,a,r),!1}function s(e){var t={x:0,y:0,width:0,height:0};if("number"==typeof e.clientX)t.x=e.clientX,t.y=e.clientY;else{if(!e.originalEvent.touches)return null;t.x=e.originalEvent.touches[0].clientX,t.y=e.originalEvent.touches[0].clientY}return t}function u(e,t){return e&&">"===e.trim()[0]?(e=e.trim().replace(/^>\s*/,""),t.find(e)):e?t.parent().find(e):t}a.data("resizable",r),e=u(r.handleSelector,a),r.touchActionNone&&e.css("touch-action","none"),a.addClass("resizable"),e.on("mousedown."+r.instanceId+" touchstart."+r.instanceId,function(e){e.preventDefault&&e.preventDefault();if((i=s(e)).width=parseInt(a.width(),10),i.height=parseInt(a.height(),10),t=a.css("transition"),a.css("transition","none"),r.onDragStart&&!1===r.onDragStart(e,a,r))return;f(document).on("mousemove."+r.instanceId,o),f(document).on("mouseup."+r.instanceId,c),(window.Touch||navigator.maxTouchPoints)&&(f(document).on("touchmove."+r.instanceId,o),f(document).on("touchend."+r.instanceId,c));f(document).on("selectstart."+r.instanceId,n),f("iframe").css("pointer-events","none")})})})});
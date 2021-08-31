(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["component-list-template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"dropdown-components trending-components tabs-components mb-4\">\r\n        ";
output += "\r\n    <div class=\"row \"> \r\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "dropdownCompItems");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "             \r\n            ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index") > 6) {
output += "\r\n            <div class=\"col-md-6 mb-4 show-more\">\r\n                <div class=\"card trending-comp-card position-relative\">                                    \r\n                    <img class=\"card-img-top img-fluid\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"compimage"), env.opts.autoescape);
output += "\" alt=\"Card image\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title pb-2\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"cardtitle"), env.opts.autoescape);
output += "</h5>\r\n                        <p class=\"card-text\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"carddesc"), env.opts.autoescape);
output += "</p>                        \r\n                    </div>\r\n                    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "\" class=\"arrow-circle rounded-circle text-center\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"compid"), env.opts.autoescape);
output += "\" ><i class=\"fa fa-angle-right\"></i></a>\r\n                    <a href=\"#\" class=\"download-circle rounded-circle text-center\"></a>                  \r\n                    <div class=\"card-footer-data text-center\">\r\n                        <span class=\"view-date mr-3\"><i class=\"fa fa-clock-o\"></i> 19/03/2019 </span>\r\n                        <span class=\"chat-reply mr-3\"><i class=\"fa fa-comments\"></i> 12 </span>\r\n                        <span class=\"notification\"><i class=\"fa fa-twitter\"></i> 3 </span>\r\n                    </div>\r\n                    </div>\r\n            </div>\r\n            ";
;
}
else {
output += "            \r\n            <div class=\"col-md-6 mb-4\">\r\n                <div class=\"card trending-comp-card position-relative\">                                    \r\n                   <div class=\"recent-component-view\">\r\n                       <div class=\"card-img-top\">\r\n                           ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate(runtime.memberLookup((t_4),"compimage") + ".njk", false, "component-list-template.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n                        </div> \r\n                   </div>\r\n                    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "\" class=\"arrow-circle rounded-circle text-center\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"compid"), env.opts.autoescape);
output += "\" ><i class=\"fa fa-angle-right\"></i></a>\r\n                     <a href=\"#\" class=\"download-circle rounded-circle text-center\"></a>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title pb-2\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"cardtitle"), env.opts.autoescape);
output += "</h5>\r\n                        <p class=\"card-text\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"carddesc"), env.opts.autoescape);
output += "</p>                        \r\n                    </div>                                      \r\n                    <div class=\"card-footer-data text-center\">\r\n                        <span class=\"view-date mr-3\"><i class=\"fa fa-clock-o\"></i> 19/03/2019 </span>\r\n                        <span class=\"chat-reply mr-3\"><i class=\"fa fa-comments\"></i> 12 </span>\r\n                        <span class=\"notification\"><i class=\"fa fa-twitter\"></i> 3 </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            ";
});
}
output += "\r\n\r\n        ";
;
}
}
frame = frame.pop();
output += "\r\n    </div>\r\n        ";
output += "\r\n</div>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["dashboard.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("one-column-content-page.njk", true, "dashboard.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\r\n\r\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "  \r\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../views/components/carousel/dashboard-carousel.njk", false, "dashboard.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "   \r\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../views/components/trending-components/trending-components.njk", false, "dashboard.njk", false, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();

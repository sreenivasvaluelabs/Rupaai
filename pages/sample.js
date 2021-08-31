(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pages/sample.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("_base.njk", true, "pages/sample.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\r\n";
var t_4;
t_4 = "An email confirmation has been sent to your inbox. Call in to cancel/modify booking. ";
frame.set("ctaText", t_4, true);
if(frame.topLevel) {
context.setVariable("ctaText", t_4);
}
if(frame.topLevel) {
context.addExport("ctaText", t_4);
}
output += "\r\n";
var t_5;
t_5 = "Gas Reconnect";
frame.set("pageHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("pageHeading", t_5);
}
if(frame.topLevel) {
context.addExport("pageHeading", t_5);
}
output += "\r\n";
var t_6;
t_6 = "Step 3 of 5";
frame.set("pageSubHeading", t_6, true);
if(frame.topLevel) {
context.setVariable("pageSubHeading", t_6);
}
if(frame.topLevel) {
context.addExport("pageSubHeading", t_6);
}
output += "\r\n";
var t_7;
t_7 = "Request Appointment";
frame.set("startBtn", t_7, true);
if(frame.topLevel) {
context.setVariable("startBtn", t_7);
}
if(frame.topLevel) {
context.addExport("startBtn", t_7);
}
output += "\r\n";
var t_8;
t_8 = "Cancel";
frame.set("cancelBtn", t_8, true);
if(frame.topLevel) {
context.setVariable("cancelBtn", t_8);
}
if(frame.topLevel) {
context.addExport("cancelBtn", t_8);
}
output += "\r\n";
var t_9;
t_9 = "Appointment Date allow";
frame.set("pageTitle", t_9, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_9);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_9);
}
output += "\r\n";
var t_10;
t_10 = runtime.contextOrFrameLookup(context, frame, "testVariable");
frame.set("newVariable", t_10, true);
if(frame.topLevel) {
context.setVariable("newVariable", t_10);
}
if(frame.topLevel) {
context.addExport("newVariable", t_10);
}
output += "\r\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += t_11;
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
function b_content(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"my-account-heading-wrapper\">\r\n            <h1>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageHeading"), env.opts.autoescape);
output += "</h1>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row cta-texts\">\r\n    <p style=\"color: #919191\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageSubHeading"), env.opts.autoescape);
output += "</p>\r\n    <h1>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "</h1>                           \r\n</div>\r\n<div class=\"appointment-form\">\r\n    <form>\r\n        <div class=\"form-group\">\r\n            <h6>Day & Time</h6>\r\n            <p>Please pick a day and time below</p>\r\n        </div>\r\n        <div id=\"months\">\r\n            <div class=\"owl-carousel owl-theme owl-loaded months\" id=\"owl-month-date\">    \r\n                            \r\n            </div>\r\n        </div>\r\n        <div id=\"dates\">\r\n            <div class=\"owl-carousel owl-theme dates\">\r\n                <div class=\"item lazyOwl\"><h4>Mon</h4><p>1</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Tue</h4><p>2</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Wed</h4><p>3</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Thurs</h4><p>4</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Fri</h4><p>5</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Sat</h4><p>6</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Sun</h4><p>7</p></div>\r\n                \r\n                <div class=\"item lazyOwl\"><h4>Mon</h4><p>8</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Tue</h4><p>9</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Wed</h4><p>10</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Thurs</h4><p>11</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Fri</h4><p>12</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Sat</h4><p>13</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Sun</h4><p>14</p></div>\r\n                \r\n                <div class=\"item lazyOwl\"><h4>Mon</h4><p>15</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Tue</h4><p>16</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Wed</h4><p>17</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Thurs</h4><p>18</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Fri</h4><p>19</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Sat</h4><p>20</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Sun</h4><p>21</p></div>\r\n                \r\n                <div class=\"item lazyOwl\"><h4>Mon</h4><p>22</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Tue</h4><p>23</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Wed</h4><p>24</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Thurs</h4><p>25</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Fri</h4><p>26</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Sat</h4><p>27</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Sun</h4><p>28</p></div>\r\n                \r\n                <div class=\"item lazyOwl\"><h4>Mon</h4><p>29</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Tue</h4><p>30</p></div>\r\n                <div class=\"item lazyOwl\"><h4>Wed</h4><p>31</p></div>\r\n            </div>\r\n        </div>\r\n        <div id=\"timings\">\r\n            <ul class=\"date-timings\">\r\n                <li>8:00 am - 12:00 pm</li>\r\n                <li>1:00 pm - 4:00 pm</li>\r\n                <li>5:00 pm - 9:00 pm</li>\r\n            </ul>\r\n            <ul class=\"no-timings\">\r\n                <li>No times available</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"row cta-texts\">\r\n            <div class=\"start-button-class\">\r\n            <a href=\"#\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "startBtn"), env.opts.autoescape);
output += "</a>\r\n        </div>\r\n        <div class=\"start-button-class cancel\">\r\n            <a href=\"#\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cancelBtn"), env.opts.autoescape);
output += "</a>\r\n        </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();

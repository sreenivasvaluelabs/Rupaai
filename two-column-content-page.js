(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["two-column-content-page.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!-- two-column-content-page.njk -->\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width,  initial-scale=1.0, user-scalable=0\">\r\n    <meta name=\"format-detection\" content = \"telephone=no\">\r\n    <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\">\r\n    <link rel=\"stylesheet\" href=\"http://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css\">\r\n    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:400,700\">\r\n    <link rel=\"stylesheet\" href=\"../../../content/css/kitchensink.css\">\r\n    <link rel=\"stylesheet\" href=\"../../../content/css/style.css\"> \r\n    <title>Welcome | XD Studio</title>\r\n    </head>\r\n    <body>\r\n        \r\n        ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += "\r\n        <div class=\"main\">\r\n            <div class=\"two-column-container\">\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2 col-lg-2\">\r\n                            <p> Hidfsdfbh </p>\r\n                        </div>\r\n                        <div class=\"col-md-10 col-lg-10\">\r\n                            ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("midsection"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\r\n    <script src=\"../../../content/js/kitchensink/clipboard.min.js\"></script>\r\n    <script src=\"../../../content/js/vendor/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"></script>\r\n    <script src=\"../../../content/js/vendor/bootstrap.min.js\"></script>\r\n    ";
output += "\r\n    </body>\r\n</html><!-- /two-column-content-page.njk -->";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\r\n            \r\n        ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_midsection(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += " ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "            \r\n        ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_header: b_header,
b_midsection: b_midsection,
b_footer: b_footer,
root: root
};

})();
})();

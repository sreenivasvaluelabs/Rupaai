(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["indexpage.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width,  initial-scale=1.0, user-scalable=0\">\r\n    <meta name=\"format-detection\" content = \"telephone=no\"> \r\n    <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\">\r\n    <link rel=\"stylesheet\" href=\"http://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css\">\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\">\r\n    <link rel=\"stylesheet\" href=\"css/indexpagestyle.css\">\r\n<body>\r\n\r\n<div class=\"container-fluid p-0\">\r\n  <div class=\"header-section\">\r\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n          <a class=\"navbar-brand\" href=\"#\"></a>\r\n          <span class=\"navbar-text\">Sample Project </span>\r\n      </nav>\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n            <div class=\"col-md-12\"> \r\n                <div id=\"wrapper\">\r\n                    <div id=\"sidebar-wrapper\">    \r\n                        <div class=\"side-menu\">\r\n                            <ul class=\"sidebar-nav nav-pills nav-stacked \" id=\"menu\">\r\n                                <li class=\"active\">\r\n                                <a href=\"#dashboard\"><i class=\"fa fa-home pr-3\"></i> Dashboard </a>\r\n                                </li>\r\n                                <li>\r\n                                <a href=\"#\"><i class=\"fa fa-file pr-3\"></i> Project  <i class=\"fa fa-angle-right pr-4 pull-right mt-3\"></i></a>\r\n                                </li>\r\n                                <li>\r\n                                <a href=\"#\"><i class=\"fa fa-align-justify pr-3\"></i>Basic Components <i class=\"fa fa-angle-right pr-4 pull-right mt-3\"></i></a>\r\n                                    <ul style=\"display: none;\">\r\n                                        <li>\r\n                                            <a href=\"#nav\"><i class=\"fa fa-align-justify pr-3\"></i>Tabs<i class=\"fa fa-angle-right pr-4 pull-right mt-3\"></i></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#nav\"><i class=\"fa fa-align-justify pr-3\"></i>Alerts<i class=\"fa fa-angle-right pr-4 pull-right mt-3\"></i></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#nav\"><i class=\"fa fa-align-justify pr-3\"></i>Accordian<i class=\"fa fa-angle-right pr-4 pull-right mt-3\"></i></a>\r\n                                        </li>\r\n                                        <li class=\"active\">\r\n                                            <a href=\"#dropdownmenu-edit\"><i class=\"fa fa-align-justify pr-3\"></i>Dropdown<i class=\"fa fa-angle-right pr-4 pull-right mt-3\"></i></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>                               \r\n                            </ul>\r\n                        </div>  \r\n                    </div>\r\n                    <div id=\"page-content-wrapper\">\r\n                        ";
output += "\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n <script src=\"js/vendor/jquery.min.js\"></script>\r\n <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"></script>\r\n <script src=\"js/vendor/bootstrap.min.js\"></script>\r\n <script type=\"text/javascript\" src=\"js/vendor/jszip.js\"></script>\r\n <script src=\"js/download/download.js\"></script> \r\n</body>\r\n</html> \r\n";
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

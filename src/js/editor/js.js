var result,
  className,
  furl;
(function () {

  // Base template
  var base_tpl =
    "<!doctype html>\n" +
    "<html>\n\t" +
    "<head>\n\t\t" +
    "<meta charset=\"utf-8\">\n\t\t" +
    "<title>Test</title>\n\n\t\t\n\t" +
    "<link rel='stylesheet' href='css/editor/bootstrap.min.css'>" +
    "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>" +
    "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js'></script>" +
    "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js'></script>" +
    "</head>\n\t" +
    "<body>\n\t\n\t" +
    "</body>\n" +
    "</html>";

  var prepareSource = function () {
    var html = html_editor.getValue(),
      css = css_editor.getValue(),
      js = js_editor.getValue(),
      src = '';

    // HTML
    src = base_tpl.replace('</body>', html + '</body>');

    // CSS
    css = '<style>' + css + '</style>';
    src = src.replace('</head>', css + '</head>');

    // Javascript
    js = '<script>' + js + '<\/script>';
    src = src.replace('</body>', js + '</body>');

    return src;
  };

  var render = function () {
    var source = prepareSource();

    var iframe = document.querySelector('#output iframe'),
      iframe_doc = iframe.contentDocument;

    iframe_doc.open();
    iframe_doc.write(source);
    iframe_doc.close();
  };


  // EDITORS

  // CM OPTIONS
  var cm_opt = {
    mode: 'text/html',
    gutter: true,
    lineNumbers: false,

    onChange: function () {
      console.log('1')
      render();
    }
  };

  // HTML EDITOR
  var html_box = document.querySelector('#html textarea'); console.log(html_box);
  var html_editor = CodeMirror.fromTextArea(html_box, cm_opt); console.log(html_editor);
  html_editor.on("change", function (html_editor, change) {
    console.log(html_editor);
    // console.log("something changed! (" + change.origin + ")");
    render();
  });


  // CSS EDITOR
  cm_opt.mode = 'css';
  var css_box = document.querySelector('#css textarea');
  var css_editor = CodeMirror.fromTextArea(css_box, cm_opt);
  css_editor.on("change", function (css_editor, change) {
    // console.log("something changed! (" + change.origin + ")");
    render();
  });

  // JAVASCRIPT EDITOR
  cm_opt.mode = 'javascript';
  var js_box = document.querySelector('#js textarea');
  var js_editor = CodeMirror.fromTextArea(js_box, cm_opt);
  js_editor.on("change", function (js_editor, change) {
    // console.log("something changed! (" + change.origin + ")");
    render();
  });

  furl = '<p>sample text</p>';
  html_editor.setValue(furl);

  $(".arrow-circle").on("click", function () {
    $(this).parents('.components-toggle').hide();
    $(".editanddownload").show();
    var cardtitle = $(this).next().next(".card-body").find(".card-title").text();
    componentfilename = $(this).attr('id')
    componentId = $(this).attr('id').split("-");
    //alert(componentId);
    furl = "components/" + componentId[0] + "/" + componentfilename + ".html";
    cssurl = "css/components/" + componentId[0] + "/" + componentfilename + ".css";
    // alert(furl);
    // alert(cssurl);
    //$('.shows').load(furl);
    $.ajax({
      url: furl,
      success: function (data) {
        result = data;
        html_editor.setValue(result);
      }
    });
    $.ajax({
      url: cssurl,
      success: function (data) {
        result = data;
        // alert(result);
        css_editor.setValue(result);
      }
    });
    

    $('#tabs').hide();
    $('.live-editor').css("display", "block");
    $(".live-editshows span.component-title").text(cardtitle);
    $(".responsive-tiles span.component-title").text(cardtitle);
  });

  console.log(result);

  // SETTING CODE EDITORS INITIAL CONTENT

  //css_editor.setValue('body { color: red; }');

  // RENDER CALL ON PAGE LOAD
  // NOT NEEDED ANYMORE, SINCE WE RELY
  // ON CODEMIRROR'S onChange OPTION THAT GETS
  // TRIGGERED ON setValue
  // render();


  // NOT SO IMPORTANT - IF YOU NEED TO DO THIS
  // THEN THIS SHOULD GO TO CSS

  /*
    Fixing the Height of CodeMirror.
    You might want to do this in CSS instead
    of JS and override the styles from the main
    codemirror.css
  */
  var cms = document.querySelectorAll('.CodeMirror');
  for (var i = 0; i < cms.length; i++) {

    cms[i].style.position = 'absolute';
    cms[i].style.top = '30px';
    cms[i].style.bottom = '0';
    cms[i].style.left = '0';
    cms[i].style.right = '0';
  }
  cms = document.querySelectorAll('.CodeMirror-scroll');
  for (i = 0; i < cms.length; i++) {
    cms[i].style.height = '100%';
  }

}());
$(document).ready(function () {
  $(".panel-left").resizable({
    handleSelector: ".splitter",
    resizeHeight: false
  });
  $(".panel-top").resizable({
    handleSelector: ".splitter-horizontal",
    resizeWidth: false
  });
  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

  $(".liveedit").on("click", function () {
    $('.live-editshows').hide();
    $('.responsive-tiles').show();
    $('.live-panel-view').show();
    $('.CodeMirror-scroll').css('pointer-events', 'visible');
  });
});
var clipboard = new ClipboardJS('.cpy');
clipboard.on('success', function (e) {
  e.clearSelection();
});
clipboard.on('error', function (e) {
});

function resize(width) {
  document.querySelector(".myResponsiveWindow iframe").style.width = width + "px";
}

function reset() {
  document.querySelector(".myResponsiveWindow iframe").style.width = "100%";
}

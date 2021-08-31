$(".components-dropdown.dropdown-accordion").on("show.bs.dropdown",function(s){$(this).find($(this).data("accordion")).find(".components-collapse.panel-collapse.in").collapse("hide")}),$(".components-dropdown.dropdown-accordion").on("click",'a[data-toggle="collapse"]',function(s){s.preventDefault(),s.stopPropagation(),$($(this).data("parent")).find(".components-collapse.panel-collapse.in").collapse("hide"),$($(this).attr("href")).collapse("show")}),$(document).on("click",".components-display-link",function(s){s.preventDefault(),$(".component-section").hide();var e=$(this).data("section-id");$(".welcome-note").hide(),$(".common-component-wrapper #"+e).show()}),$(document).ready(function(){$("#comp-filter").keyup(function(){var s=document.getElementById("comp-search-results");""==$(this).val()?s.style.display="none":s.style.display="block"}),$(".no-results-kitchen").hide(),$(".no-results-kitchen").css("display","none"),$("#comp-filter").keyup(function(){$(".commentlist li").hide(),$(".no-results-kitchen").css("display","none");var s=$("#comp-filter").val(),e=0;$(".commentlist li").each(function(){-1!=$(this).text().toUpperCase().indexOf(s.toUpperCase())&&($(this).show(),e++)}),0==e&&$(".no-results-kitchen").css("display","block")})}),$("#customize").click(function(){$(".component-list").css("display","block")});var selectedComponentsPath=[],selectedComponentsIds=[];function merge_array(s,e){for(var n=[],o=s.concat(e),c=o.length,t={};c--;){var i=o[c];t[i]||(n.unshift(i),t[i]=!0)}return n}var selectedProjectId,selectedProjectComp=[],selectedComponentsList=[],selected_Components_array=[];function removeDuplicates(s){for(var e=0;e<s.length;e++)-1==selected_Components_array.indexOf(s[e])&&selected_Components_array.push(s[e]);return selected_Components_array}function downloadComponents(s){var o=new JSZip,e=document.getElementById("downloadjs"),n=document.getElementById("custom-d");if("downloadjs"===s){function c(n){return new Promise(function(s){var e=new XMLHttpRequest;e.open("GET",n),e.onload=function(){o.file(n,this.responseText),s()},e.send()})}Promise.all(["editor/css/style-editor.css","editor/js/js.js","editor/index.html","editor/sampl.html","config.json","gulpfile.js","package-lock.json","package.json","src/images/cta-img.png","src/images/share-avanade-logo.jpg","src/images/tile-img.jpg","src/js/vendor/bootstrap.min.js","src/js/vendor/jquery.min.js","src/js/vendor/jszip.js","src/js/components/ems-components/accordion.js","src/js/components/ems-components/cookie.js","src/js/components/nav/tab.js","src/js/components/popover/custom-popover.js","src/js/components/scrolltopbottom/scroll2topbottom.js","src/js/kitchensink/clipboard.js","src/js/kitchensink/clipboard.min.js","src/js/kitchensink/component-scroll.js","src/js/kitchensink/kitchensink-components.js","src/scss/common/_mixins.scss","src/scss/common/_variables.scss","src/scss/kitchensink.scss","src/scss/style.scss","src/scss/component/accordion/custom-accordion.scss","src/scss/component/banner-img/banner-img.scss","src/scss/component/breadcrumb/custom-breadcrumbs.scss","src/scss/component/carousel/custom-carousel.scss","src/scss/component/ems-components/accordion.scss","src/scss/component/ems-components/article.scss","src/scss/component/ems-components/cookie.scss","src/scss/component/nav/custom-nav-list.scss","src/scss/component/nav/custom-pills.scss","src/scss/component/nav/custom-tabs.scss","src/scss/component/pagenav/pagination.scss","src/scss/component/progressbar/progressbar.scss","src/scss/component/responsive-tab-accordion/responsive-tab-accordion.scss","src/scss/component/scrolltopbottom/scrolltopbottom.scss","src/scss/component/timeline/timeline-component.scss","src/scss/vendor/bootstrap.min.css","src/views/atoms/badge/custom-badge.njk","src/views/atoms/spinners/spinners.njk","src/views/components/accordion/accordion-picture.njk","src/views/components/accordion/custom-accordion.njk","src/views/components/banner-img/banner-img.njk","src/views/components/breadcrumb/custom-breadcrumbs.njk","src/views/components/cards/card-desc.njk","src/views/components/cards/card-img-overlay.njk","src/views/components/cards/card-img.njk","src/views/components/cards/card-tile.njk","src/views/components/carousel/custom-carousel.njk","src/views/components/ems-components/accordion.njk","src/views/components/ems-components/article.njk","src/views/components/ems-components/carousel.njk","src/views/components/ems-components/cookie.njk","src/views/components/ems-components/cta.njk","src/views/components/modalpopup/custom-modal.njk","src/views/components/nav/custom-nav-list.njk","src/views/components/nav/custom-pills.njk","src/views/components/nav/custom-tabs.njk","src/views/components/navbar/navbar.njk","src/views/components/pagenav/custom-pagination.njk","src/views/components/popover/custom-popover.njk","src/views/components/progressbar/custom-progressbar.njk","src/views/components/responsive-tab-accordion/tab-accordion.njk","src/views/components/scrolltopbottom/scrolltopbottom.njk","src/views/components/testimonial/testimonial.njk","src/views/components/timeline/timeline-component.njk","src/views/pages/sample.njk","src/views/_base.njk","src/views/_kitchensinkbase.pug","src/views/index.pug","readme.txt","src/views/components/kitchensink/component-search-results.pug","src/views/components/kitchensink/kitchensink-component-content.pug","src/views/components/kitchensink/kitchensink-footer.pug","src/views/components/kitchensink/kitchensink-header.pug","src/views/components/kitchensink/kitchensink-search-bar.pug","src/views/components/kitchensink/kitchensink-tabheading.pug","src/views/components/kitchensink/kitchensink-team1-content.pug","src/views/components/kitchensink/kitchensink-team1-nav.pug","src/views/components/kitchensink/kitchensink-welcome-note.pug","src/scss/component/kitchensink/_kitchensink-components.scss"].map(function(s){return c(s)})).then(function(){console.log(o),o.generateAsync({type:"blob"}).then(function(s){e.download="Reusuable-Components",e.href=URL.createObjectURL(s)})})}else{if("custom-d"!==s)return!1;var t=merge_array(["editor/css/style-editor.css","editor/js/js.js","editor/index.html","editor/sampl.html","config.json","gulpfile.js","package-lock.json","package.json","src/images/cta-img.png","src/images/share-avanade-logo.jpg","src/images/tile-img.jpg","src/js/vendor/bootstrap.min.js","src/js/vendor/jquery.min.js","src/js/vendor/jszip.js","src/js/kitchensink/clipboard.js","src/js/kitchensink/clipboard.min.js","src/js/kitchensink/component-scroll.js","src/js/kitchensink/kitchensink-components.js","src/scss/common/_mixins.scss","src/scss/common/_variables.scss","src/scss/kitchensink.scss","src/scss/style.scss","src/scss/vendor/bootstrap.min.css","src/views/pages/sample.njk","src/views/_base.njk","src/views/_kitchensinkbase.pug","src/views/index.pug","readme.txt","src/scss/component/kitchensink/_kitchensink-components.scss","src/views/components/kitchensink/kitchensink-team1-nav.pug","src/views/components/kitchensink/components-list.pug"],selectedComponentsPath);function c(n){return new Promise(function(s){var e=new XMLHttpRequest;e.open("GET",n),e.onload=function(){o.file(n,this.responseText),s()},e.send()})}Promise.all(t.map(function(s){return c(s)})).then(function(){console.log(o),o.generateAsync({type:"blob"}).then(function(s){n.download="custom-download",n.href=URL.createObjectURL(s),removeDuplicates(selectedComponentsList),selectedProjectComp.push(selected_Components_array),console.log(selectedProjectComp),localStorage.setItem("selectedComponentsIds",JSON.stringify(selected_Components_array)),localStorage.setItem("selectedProjectId",selectedProjectId),localStorage.setItem("selectedProjectComp",JSON.stringify(selected_Components_array)),$.ajaxSetup({cache:!1}),$.getJSON("https://api.myjson.com/bins/840uu",function(s){var e;e=s;var n=[],o=localStorage.getItem("selectedProjectId"),c=JSON.parse(localStorage.getItem("selectedProjectComp"));n.push(o),n.push(c);for(var t=e[0].project,i=0;i<t.length;i++){if(t[i].project_Name!==n[0])return!1;for(var r=t[i].project_component_list,a=0;a<r.length;a++)for(var p=0;p<c.length;p++)c[p]===r[a].comp_Name?console.log("success!!"):console.log("Best of luck next time!!!!")}})})})}}$(function(){$("[name=projectSelection]").click(function(){if($(".comp_item").hide(),$("#project-"+$(this).val()).show(),null==(selectedProjectId=$(this).attr("id")))return selectedProjectComp=[],!(selectedComponentsList=[]);$(".comp_item .custom-checkbox input:checkbox").change(function(){$(".comp_item .custom-checkbox input:checkbox").each(function(){if($(this).is(":checked")){var s=$(this).attr("pathhtml"),e=$(this).attr("pathscss"),n=$(this).attr("pathjs"),o=$(this).attr("id");return selectedComponentsList.push(o),selectedComponentsPath.push(s),selectedComponentsPath.push(e),void selectedComponentsPath.push(n)}})})})}),window.onload=function(){downloadComponents(void 0)};
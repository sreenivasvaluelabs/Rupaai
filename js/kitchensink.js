$(".component-base .mega-dropdown-menu li a").on('click', function(event) {
    if (this.hash !== "") {
        var hash = this.hash;
        $(".navbar-toggle").click();
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800, function(){
            window.location.hash = hash;
        });
    } 
});
// Collapse accordion every time dropdown is shown
$('.components-dropdown.dropdown-accordion').on('show.bs.dropdown', function (event) {
    var accordion = $(this).find($(this).data('accordion'));
    accordion.find('.components-collapse.panel-collapse.in').collapse('hide');
});

// Prevent dropdown to be closed when we click on an accordion link
$('.components-dropdown.dropdown-accordion').on('click', 'a[data-toggle="collapse"]', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $($(this).data('parent')).find('.components-collapse.panel-collapse.in').collapse('hide');
    $($(this).attr('href')).collapse('show');
})

$(document).on('click', '.components-display-link', function (e) {
    e.preventDefault();
    $(".component-section").hide();
    var dataValue = $(this).data("section-id");
    $(".welcome-note").hide();
    $(".common-component-wrapper #" + dataValue).show();
})

$(document).ready(function () {
    $("#comp-filter").keyup(function () {
        var x = document.getElementById('comp-search-results');
        if ($(this).val() == "") {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }
    });

    $('.no-results-kitchen').hide();
    $('.no-results-kitchen').css("display", "none");
    $('#comp-filter').keyup(function () {
        $('.commentlist li').hide();
        $('.no-results-kitchen').css("display", "none");
        var txt = $('#comp-filter').val();
        var resultCount = 0;
        $('.commentlist li').each(function () {
            if ($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1) {
                $(this).show();
                resultCount++;
            }
        });

        if (resultCount == 0) {
            $('.no-results-kitchen').css("display", "block");
        }

    });
    
});
// var customclicked = false;

// $(document).ready(function() {
//     selectedComponentsIds = [];
//  var a = localStorage.getItem('selectedComponentsIds');
//  var b = localStorage.getItem('selectedProjectComp');
//     selectedComponentsIds.push(a);
//     console.log(selectedComponentsIds);
//     console.log(b);
//     getComponentListFromMenu(selectedComponentsIds);
                   
//     var dataSelectionId = components_list =  [];  
//     function getComponentListFromMenu(selectedComponentsIds) {
//         console.log(selectedComponentsIds); 
//         components_list = [];     
//         dataSelectionId = document.querySelectorAll('[data-section-id]');
//         console.log(dataSelectionId);
//         for(var i=0; i < dataSelectionId.length; i++){
//             components_list.push(dataSelectionId[i].innerText);
//         }
//         console.log(components_list);
//         getMatch(selectedComponentsIds,components_list); 
//     }

    // function getMatch(a, b) { 
    //     for ( var i = 0; i < a.length; i++ ) {
    //         for ( var e = 0; e < b.length; e++ ) {
    //             if ( a[i] === b[e] ) {
    //                 console.log(dataSelectionId[e]);
    //                 $(dataSelectionId[e]).parents('.card').addClass("show-comp");
    //             }
    //             else {
    //                 $(dataSelectionId[e]).parents('.card').addClass("hide-comp");
    //             }
    //         }
    //     }    
    // }

    // function dispSelected(selectedComponent_array) {
    //     for(var i=0; i<selectedComponent_array.length; i++){
    //       var thisParent = dataSelectionId[i].parentNode.parentNode.parentNode.parentNode.parentNode;
    //       $(thisParent).addClass("show-comp");
    //     }
    //     // for(var j=0; j<array_2.length; j++){
    //     //     var otherParent = dataSelectionId[j].parentNode.parentNode.parentNode.parentNode.parentNode;
    //     //     $(otherParent).addClass("hide-comp");
    //     //   }
    // }


// });


$('#customize').click(function(){
    $(".component-list").css("display", "block");   
});

  var selectedComponentsPath = [];
  var selectedComponentsIds=[];
function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}

//show components  on click of radio btn
var selectedProjectComp =[];
var selectedComponentsList=[];
var selected_Components_array = [];
var selectedProjectId;
function removeDuplicates(arr){
    
    for(var i = 0;i < arr.length; i++){
        if(selected_Components_array.indexOf(arr[i]) == -1){
            selected_Components_array.push(arr[i])
        }
    }
    return selected_Components_array;
}

$(function() {    
    $("[name=projectSelection]").click(function(){
            $('.comp_item').hide();
            $("#project-"+$(this).val()).show();
            selectedProjectId = $(this).attr('id');
            if(selectedProjectId != null) {
                $(".comp_item .custom-checkbox input:checkbox").change(function() {   
                    $(".comp_item .custom-checkbox input:checkbox").each(function() {                   
                        if ($(this).is(":checked")) {                                 
                            var selectedPath1 = $(this).attr("pathhtml");
                            var selectedPath2 = $(this).attr("pathscss");
                            var selectedPath3 = $(this).attr("pathjs");
                            var selectedid = $(this).attr("id");
                            //selectedComponentsIds.push(selectedid);
                            selectedComponentsList.push(selectedid);
                            selectedComponentsPath.push(selectedPath1);selectedComponentsPath.push(selectedPath2);selectedComponentsPath.push(selectedPath3);
                            return;
                            
                        } 
                        else {
                            return ;
                        }                                       
                    });                                 
                });                                                              
            }       
            else {        
                selectedProjectComp =[];
                selectedComponentsList=[];
                return false;
            }
    });
    
 });


    window.onload = function(){              
        var clicked_id;
      
        downloadComponents(clicked_id);

    }
    function downloadComponents(clicked_id) {            
        var zip = new JSZip();
        var a = document.getElementById("downloadjs");
        var b = document.getElementById("custom-d"); 
        if(clicked_id === "downloadjs") {  
            //$(".components-dropdown .dropdown-menu .card").addClass("custom-display");       
        var urls = [    
            "editor/css/style-editor.css", "editor/js/js.js", "editor/index.html", "editor/sampl.html", "config.json", "gulpfile.js", "package-lock.json","package.json",
            "src/images/cta-img.png", "src/images/share-avanade-logo.jpg", "src/images/tile-img.jpg", "src/js/vendor/bootstrap.min.js", "src/js/vendor/jquery.min.js", "src/js/vendor/jszip.js",
            "src/js/components/ems-components/accordion.js", "src/js/components/ems-components/cookie.js",
            "src/js/components/nav/tab.js", "src/js/components/popover/custom-popover.js", "src/js/components/scrolltopbottom/scroll2topbottom.js",
            "src/js/kitchensink/clipboard.js", "src/js/kitchensink/clipboard.min.js", "src/js/kitchensink/component-scroll.js", "src/js/kitchensink/kitchensink-components.js",
            "src/scss/common/_mixins.scss","src/scss/common/_variables.scss","src/scss/kitchensink.scss", "src/scss/style.scss",
            "src/scss/component/accordion/custom-accordion.scss", "src/scss/component/banner-img/banner-img.scss", "src/scss/component/breadcrumb/custom-breadcrumbs.scss",
            "src/scss/component/carousel/custom-carousel.scss", "src/scss/component/ems-components/accordion.scss","src/scss/component/ems-components/article.scss","src/scss/component/ems-components/cookie.scss",
            "src/scss/component/nav/custom-nav-list.scss","src/scss/component/nav/custom-pills.scss","src/scss/component/nav/custom-tabs.scss",
            "src/scss/component/pagenav/pagination.scss",
            "src/scss/component/progressbar/progressbar.scss", "src/scss/component/responsive-tab-accordion/responsive-tab-accordion.scss",
            "src/scss/component/scrolltopbottom/scrolltopbottom.scss", "src/scss/component/timeline/timeline-component.scss",
            "src/scss/vendor/bootstrap.min.css",
            "src/views/atoms/badge/custom-badge.njk", "src/views/atoms/spinners/spinners.njk", "src/views/components/accordion/accordion-picture.njk",
            "src/views/components/accordion/custom-accordion.njk", "src/views/components/banner-img/banner-img.njk",
            "src/views/components/breadcrumb/custom-breadcrumbs.njk", "src/views/components/cards/card-desc.njk",
            "src/views/components/cards/card-img-overlay.njk", "src/views/components/cards/card-img.njk", "src/views/components/cards/card-tile.njk",
            "src/views/components/carousel/custom-carousel.njk",
            "src/views/components/ems-components/accordion.njk", "src/views/components/ems-components/article.njk", "src/views/components/ems-components/carousel.njk",
            "src/views/components/ems-components/cookie.njk", "src/views/components/ems-components/cta.njk", "src/views/components/modalpopup/custom-modal.njk",
            "src/views/components/nav/custom-nav-list.njk", "src/views/components/nav/custom-pills.njk", "src/views/components/nav/custom-tabs.njk",
            "src/views/components/navbar/navbar.njk",
            "src/views/components/pagenav/custom-pagination.njk","src/views/components/popover/custom-popover.njk",
            "src/views/components/progressbar/custom-progressbar.njk","src/views/components/responsive-tab-accordion/tab-accordion.njk",
            "src/views/components/scrolltopbottom/scrolltopbottom.njk", "src/views/components/testimonial/testimonial.njk",
            "src/views/components/timeline/timeline-component.njk","src/views/pages/sample.njk","src/views/_base.njk","src/views/_kitchensinkbase.pug","src/views/index.pug","readme.txt",
            "src/views/components/kitchensink/component-search-results.pug","src/views/components/kitchensink/kitchensink-component-content.pug",
            "src/views/components/kitchensink/kitchensink-footer.pug", "src/views/components/kitchensink/kitchensink-header.pug",
            "src/views/components/kitchensink/kitchensink-search-bar.pug", "src/views/components/kitchensink/kitchensink-tabheading.pug",
            "src/views/components/kitchensink/kitchensink-team1-content.pug","src/views/components/kitchensink/kitchensink-team1-nav.pug",
            "src/views/components/kitchensink/kitchensink-welcome-note.pug", "src/scss/component/kitchensink/_kitchensink-components.scss"];
            
            function request(url) {
                return new Promise(function(resolve) {
                var httpRequest = new XMLHttpRequest();
                httpRequest.open("GET", url);
                httpRequest.onload = function() {
                    zip.file(url, this.responseText);
                    resolve()
                }
                httpRequest.send()
                })
            }
        
            Promise.all(urls.map(function(url) {
                return request(url)
                }))
                .then(function() {
                console.log(zip);
                zip.generateAsync({
                    type: "blob"
                    })
                    .then(function(content) {
                    a.download = "Reusuable-Components";
                    a.href = URL.createObjectURL(content);
                    });
                })
            }
        else if(clicked_id === "custom-d"){
            var customurls= ["editor/css/style-editor.css", "editor/js/js.js", "editor/index.html", "editor/sampl.html", "config.json", "gulpfile.js", "package-lock.json","package.json",
            "src/images/cta-img.png", "src/images/share-avanade-logo.jpg", "src/images/tile-img.jpg", "src/js/vendor/bootstrap.min.js", "src/js/vendor/jquery.min.js", "src/js/vendor/jszip.js",
            "src/js/kitchensink/clipboard.js", "src/js/kitchensink/clipboard.min.js", "src/js/kitchensink/component-scroll.js", "src/js/kitchensink/kitchensink-components.js",
            "src/scss/common/_mixins.scss","src/scss/common/_variables.scss","src/scss/kitchensink.scss", "src/scss/style.scss","src/scss/vendor/bootstrap.min.css",
            "src/views/pages/sample.njk","src/views/_base.njk","src/views/_kitchensinkbase.pug","src/views/index.pug","readme.txt",
            "src/scss/component/kitchensink/_kitchensink-components.scss","src/views/components/kitchensink/kitchensink-team1-nav.pug", "src/views/components/kitchensink/components-list.pug"
            ];
            
            var updatedcustomUrls = merge_array(customurls, selectedComponentsPath);
                function request(url1) {
                    return new Promise(function(resolve) {
                    var httpRequest = new XMLHttpRequest();
                    httpRequest.open("GET", url1);
                    httpRequest.onload = function() {
                        zip.file(url1, this.responseText);
                        resolve()
                    }
                    httpRequest.send()
                    })
                }
            
                Promise.all(updatedcustomUrls.map(function(url1) {
                    return request(url1)
                    }))
                    .then(function() {
                    console.log(zip);
                    zip.generateAsync({
                        type: "blob"
                        })
                        .then(function(content) {
                        b.download = "custom-download";
                        b.href= URL.createObjectURL(content); 
                        //var checkedComponnetIds = selectedComponentsIds;
                        //selectedProjectComp.push(selectedProjectId);
                        removeDuplicates(selectedComponentsList);
                        selectedProjectComp.push(selected_Components_array);                                                
                        console.log(selectedProjectComp);
                        localStorage.setItem('selectedComponentsIds', JSON.stringify(selected_Components_array)); 
                        localStorage.setItem('selectedProjectId', selectedProjectId);
                        localStorage.setItem('selectedProjectComp', JSON.stringify(selected_Components_array));
                        
                        $.ajaxSetup({ cache: false });
                        $.getJSON("https://api.myjson.com/bins/840uu", function(data){ 
                            var jsonData = [];
                            jsonData = data;
                            var selectedProjectWiseComp = [];
                            var projectId= localStorage.getItem('selectedProjectId');
                            var getStoragePrjctComp = (JSON.parse(localStorage.getItem('selectedProjectComp')));                          
                            selectedProjectWiseComp.push(projectId);
                            selectedProjectWiseComp.push(getStoragePrjctComp);
                            var jsonprojectArray =  jsonData[0].project; 
                            for(var i=0; i< jsonprojectArray.length; i++) {
                                if(jsonprojectArray[i].project_Name === selectedProjectWiseComp[0]) {                                    
                                    var jsonProjectComp_List = jsonprojectArray[i].project_component_list;
                                    for(var j=0; j< jsonProjectComp_List.length; j++){
                                        for(var k=0;k < getStoragePrjctComp.length; k++){
                                            if(getStoragePrjctComp[k] === jsonProjectComp_List[j].comp_Name) {
                                              console.log('success!!');
                                             // $('#').append
                                            }
                                            else {
                                                console.log('Best of luck next time!!!!');
                                            }
                                        }
                                    }
                                    
                                }
                                else {
                                    return false;
                                }
                            }                                               
                            
                        });

                        });
                    })
                }
                else {
                    return false;
                }
            }

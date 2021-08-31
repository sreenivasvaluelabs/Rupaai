var clicked_id; 
var selectedComponentsPath = [];
var selectedComponentsIds=[];
var selectedPrjctComponentsIds=[];
var selectedPrjctComponentsPath =[];
var selected_Components_array = [];
var selected_project_Components = [];
var selected_njkfile_array =[];
var selectedProject;
var selectednjkfiles= [];
$(function(){
    selectedComponentsList = (JSON.parse(localStorage.getItem('selectedComponentsList')));
    selectedPrjctComponentsList = (JSON.parse(localStorage.getItem('selectedPrjctComponentsList')));
    selectednjkList=(JSON.parse(localStorage.getItem('selectednjkList'))); 
    selectedProject= localStorage.getItem('selectedProject');
    console.log(selectedComponentsList);
    console.log(selectedPrjctComponentsList);
    console.log(selectednjkList);
    console.log(selectedProject);
    if(selectedComponentsList!==null){
        for(var i=0; i < selectedComponentsList.length; i++) {
            var x = selectedComponentsList[i];
            // $("#basic-comp ul").css('display', 'block');
            $("#basic-comp ul").append('<li><a href ="#'+x+'" id="'+x+'">'+x+'</a></li>');
            $("#index-page-content").append('<div class="indexcontent" id ='+x+'></div>');
        }
    }
    if(selectedPrjctComponentsList!==null){
        var selcetedProjectvalue = selectedProject;
        $("#project-comp ul").append('<li><a data-toggle="collapse" href ="#'+selcetedProjectvalue+'">'+selcetedProjectvalue+' </a><ul></ul></li>');
        for(var i=0; i < selectedPrjctComponentsList.length; i++) {
            var y = selectedPrjctComponentsList[i];           
            $("#project-comp ul li ul").append('<li><a href ="#'+y+'" id="'+y+'">'+y+'</a></li>');
            $("#index-page-content").append('<div class="indexcontent" id ='+y+'></div>');
        }
    } 
    $('#basic-comp ul li a').on("click",function (){
        var compId = [];        
        compId = $(this).attr('id').split("-");
        var componentfilename =  compId[1]+'-'+ compId[2];
        hltmurl = "components/" + compId[1] + "/" + componentfilename + ".html";
        $("#page-content-wrapper").load(hltmurl);
    });
    $('#project-comp ul li a').on("click",function (){
        var compId = [];        
        compId = $(this).attr('id').split("-");
        var componentfilename =  compId[0]+'-'+ compId[2];
        hltmurl = "components/" + compId[0] + "/" + componentfilename + ".html";
        $("#page-content-wrapper").load(hltmurl);
    });
});

//Remove duplicate values
function removeDuplicatesnjkfiles(x){    
    for(var i = 0;i < x.length; i++){
        if(selected_njkfile_array.indexOf(x[i]) == -1){
            selected_njkfile_array.push(x[i])
        }
    }
    return selected_njkfile_array;
}
function removeDuplicatescomp(a){    
    for(var i = 0;i < a.length; i++){
        if(selected_Components_array.indexOf(a[i]) == -1){
            selected_Components_array.push(a[i])
        }
    }
    return selected_Components_array;
}
function removeDuplicatesPrjctComp(b){    
    for(var i = 0;i < b.length; i++){
        if(selected_project_Components.indexOf(b[i]) == -1){
            selected_project_Components.push(b[i])
        }
    }
    return selected_project_Components;
}
//end

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


$(".comp-list .basic-comp-card .custom-checkbox input:checkbox").change(function() {   
    $(".comp-list .basic-comp-card .custom-checkbox input:checkbox").each(function() {                   
        if ($(this).is(":checked")) {                                 
            var selectedPath1 = $(this).attr("pathhtml");
            var selectedPath2 = $(this).attr("pathscss");
            var selectedPath3 = $(this).attr("pathjs");
            var selectedid = $(this).attr("id");
            selectedComponentsIds.push(selectedid);
            selectednjkfiles.push(selectedPath1);
            selectedComponentsPath.push(selectedPath1);selectedComponentsPath.push(selectedPath2);selectedComponentsPath.push(selectedPath3);
            console.log(selectedComponentsPath);            
        } 
        else {           
            return ;
        }                                       
    });                                 
}); 
$('.project-components-select').change(function(){
  selectedProject= $('.project-components-select option:selected').text();
  $(".project-wise-comp .basic-comp-card .custom-checkbox input:checkbox").change(function() {   
    $(".project-wise-comp .basic-comp-card .custom-checkbox input:checkbox").each(function() {                   
        if ($(this).is(":checked")) {                                 
            var selectedPath1 = $(this).attr("pathhtml");
            var selectedPath2 = $(this).attr("pathscss");
            var selectedPath3 = $(this).attr("pathjs");
            var selectedid = $(this).attr("id");
            selectedPrjctComponentsIds.push(selectedid);
            selectednjkfiles.push(selectedPath1);
            console.log(selectednjkfiles);
            selectedPrjctComponentsPath.push(selectedPath1);selectedPrjctComponentsPath.push(selectedPath2);selectedPrjctComponentsPath.push(selectedPath3);
            console.log(selectedPrjctComponentsPath);            
        } 
        else {           
            return ;
        }                                       
    });                                 
}); 
  
});

function downloadComponentslist(clicked_id) { 
    // preventDefault();          
    var zip = new JSZip();
    var a = document.getElementById("setup-download");
    var b = document.getElementById("components-download"); 
    if(clicked_id === "setup-download") {       
        var urls = ["src/views/_base.njk","src/views/one-column-content-page.njk","src/views/two-column-content-page.njk","src/views/indexpage.njk","src/views/components/dashboard/indexpage-header.njk","src/scss/indexpagestyle.scss","src/js/vendor/bootstrap.min.js",
        "src/js/vendor/jquery.min.js","src/scss/vendor/bootstrap.min.css","src/scss/common/_font.scss", "src/scss/common/_mixins.scss", "src/scss/common/_variables.scss", "src/scss/common/global.scss","src/js/vendor/jszip.js","src/js/download/download.js", "config.json", "gulpfile.js", "package-lock.json","package.json","readme.txt"];  
    // var urls = ["src/views/indexpage.njk"]
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
                a.download = "Environemntal_setup";
                a.href = URL.createObjectURL(content);
                });
            })
        }
    else if(clicked_id === "components-download"){
        var customurls = ["src/views/_base.njk","src/views/one-column-content-page.njk","src/views/two-column-content-page.njk","src/views/indexpage.njk","src/views/components/dashboard/indexpage-header.njk","src/scss/indexpagestyle.scss","src/js/vendor/bootstrap.min.js",
        "src/js/vendor/jquery.min.js","src/scss/vendor/bootstrap.min.css", "src/scss/common/_font.scss", "src/scss/common/_mixins.scss", "src/scss/common/_variables.scss","src/scss/common/global.scss","src/js/vendor/jszip.js","src/js/download/download.js", "config.json", "gulpfile.js", "package-lock.json","package.json","readme.txt"];
        
        var newarray = merge_array(customurls, selectedComponentsPath);
        var updatedcustomUrls = merge_array(newarray, selectedPrjctComponentsPath);
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
                    removeDuplicatescomp(selectedComponentsIds);
                    removeDuplicatesPrjctComp(selectedPrjctComponentsIds);
                    removeDuplicatesnjkfiles(selectednjkfiles);
                    localStorage.setItem('selectedComponentsList', JSON.stringify(selected_Components_array)); 
                    localStorage.setItem('selectedPrjctComponentsList', JSON.stringify(selected_project_Components));
                    localStorage.setItem('selectednjkList', JSON.stringify(selected_njkfile_array));
                    localStorage.setItem('selectedProject', selectedProject); 
                    selectedComponentsList = (JSON.parse(localStorage.getItem('selectedComponentsList')));
                    selectedPrjctComponentsList = (JSON.parse(localStorage.getItem('selectedPrjctComponentsList')));
                    selectednjkList=(JSON.parse(localStorage.getItem('selectednjkList')));
                    selectedProject= localStorage.getItem('selectedProject');           
                   
                    });
                })
            }
            else {
                return false;
            }
        }

$(document).ready(function(){
    renderBillingHistory();
});
var $sampleTable = $('#sample-table');    
var _billingHistoryUrl = '../../../data/tabledata.json'; 
var _billingDataLength = "", _searchString = "", _searchActivity = "", _filterLength = 0; 
var uniqueType = [], uniqueActivity = [], docFilterArr = [], payFilterArr = [];
    function renderBillingHistory() {        
        $.ajax({
            url: _billingHistoryUrl,
            success:function(data) {
                _billingDataLength = data.billingPayment.length;      
            }
        });
        $sampleTable.DataTable({                       
            dom: 'Bfrtip',
            "destroy":true,
            "responsive": true,               
            ajax: {
                url: _billingHistoryUrl,
                dataSrc: 'billingPayment',                
            },                                 
            "language": {
                "loadingRecords": "Please wait - loading...",                
                "zeroRecords": "No records available",
                "info": " _START_ - _END_ of _TOTAL_ transactions",
                "infoEmpty": "No records available",
                "infoFiltered":" ( filtered from _MAX_ entries )"                
            },            
            "order": [[ 0, "desc" ]],    
            "aoColumnDefs": [
                { 'bSortable': false, 'aTargets': [ 4 ] }
            ],                  
            columns: [                                                              
                {                     
                    "data": "ConvertedActivityDate",
                    "sType": "date"                                  
                },
                {
                    "data":"DocumentType",
                    "render": function(data, type, row, meta) {
                        switch(data.toLowerCase()) {
                            case 'deferral' : 
                                return '<i class="activity-icon fa fa-clock-o"></i>'+ data;
                                break;
                            case 'budgetbill' : 
                                return '<i class="activity-icon fa fa-money"></i>'+ data;
                                break;
                            case 'payment' : 
                                return '<i class="activity-icon fa fa-check"></i>'+ data;
                                break;
                            case 'bill due' : 
                                return '<i class="activity-icon fa fa-dollar"></i>'+ data; 
                                break; 
                            case 'payment arrangement enrollment' : 
                                return '<i class="activity-icon fa fa-handshake-o"></i>'+ data; 
                                break;                           
                            default  : 
                                return '';
                        }                        
                    }
                },
                {                    
                    "data":"Amount",
                    "render": function(data, type, row, meta) {                   
                        if(data >= 0) {
                            return "$" + (row.Amount).toLocaleString();
                        }
                        else {
                            var txt = (row.Amount).toLocaleString();
                            txt = txt.replace("-","-$");                            
                            return txt;
                        }
                    }
                },                 
                {   
                    "data": "Channel",
                    "render": function(data, type, row, meta) {                                   
                        if(data === "Autopay") {
                            return '<a href="#" class="tooltip-wrap">'+ data + '<i  rel="tooltip" title="This account is enrolled in autopay."  class="fa fa-info-circle"></i></a>'; 
                        }
                        else {
                            return data;
                        }
                    }
                },
                {
                    "data":"BillPdfUrl",
                    "render": function(data, type, row, meta) {
                        return '<a target="_blank" href='+ row.BillPdfUrl +'>Bill PDf<i class="fa fa-file-pdf-o"></i></a> <a target="_blank" href='+ row.InsertUrl +'>Insert<i class="fa fa-external-link"></i></a>'
                    }
                }                        
            ],                  
            initComplete: function (settings, json) {    
                if($(".custom-filter").length > 0) {$(".custom-filter").remove();}
                configFilter(this, [0,1,2,3]);                         
                this.api().columns(1).every( function () {
                    var column = this;                    
                    $('div[data-activity-filter] select').remove();
                    var select = $('<select class="form-control"><option value="">Select One..</option></select>')
                    .insertAfter( $('div[data-activity-filter] .filter-header'));                    
                    var columnName = $(this.header()).text().replace(/\s+/g, "_");                      
                    column.data().unique().sort().each( function ( d, j ) {
                        if(d !== "" && d !== null) {                             
                            var uniqueData = d.toLowerCase();
                            uniqueActivity.push(uniqueData); 
                            uniqueActivity =  $.unique(uniqueActivity);
                        }                                            
                    });
                    for(var i = 0; i < uniqueActivity.length; i++) {
                        select.append( '<option value="'+ uniqueActivity[i] +'" id="'+ columnName+"_"+i +'">'+ uniqueActivity[i] +'</option>' );
                    }      
                    uniqueActivity = [];              
                }); 
                this.api().columns(3).every( function () {
                    var column = this;                        
                    var columnName = $(this.header()).text().replace(/\s+/g, "_");                      
                    $('div[data-payment-filter] .checkbox').remove();                  
                    column.data().unique().sort().each( function ( d, j ) {                            
                        if(d !== "" && d !== null) {                             
                            var uniqueData = d.toLowerCase();
                            uniqueType.push(uniqueData); 
                            uniqueType = $.unique(uniqueType);                            
                        }             
                    });
                    for(var i = 0; i < uniqueType.length; i++) {
                        $('div[data-payment-filter] .filter-header').after( '<div class="checkbox"><label for="' + columnName+"_"+i + '"><input type="checkbox" value="' + uniqueType[i] + '" id="' + columnName+"_"+i +'" />' + uniqueType[i] + '</label></div>' );
                    }              
                    uniqueType = [];       
                });                
            },
            buttons: [{
                extend: 'csv',
                className:"d-none",                            
                filename:"pse billing and payment history",
                exportOptions: {                    
                    columns: [0,1,2,3]  
                }
            }],
            drawCallback: function() {    
                $('#billing-load-more').toggle(this.api().page.hasMore());
            }                       
        }); 
    }   
    $('#billing-export-csv').on('click', function(){  
        $sampleTable.parent("div").find(".buttons-csv").click();
    });
    $('#billing-load-more').on('click', function(){              
        $sampleTable.DataTable().page.loadMore();
    });        
    $('[data-update-activity]').on('click', function(e){
        e.preventDefault();
        _searchActivity = "";
        _searchActivity = $(this).parents("div[data-activity-filter]").find('select').val();              
        $sampleTable.DataTable().column(1).search(
            _searchActivity,
            true, false
        ).draw();                    
        $(this).parents("div[data-customfilter-dropdown]").addClass('d-none');                
        billingFilterResult(e);     
    });
    $('[data-update-payment]').on('click', function(e){            
        e.preventDefault();         
        var counter = 0;  
        _searchString = "";
        $(this).parents("div[data-payment-filter]").find('input:checkbox').each(function (index, checkbox) {
            if (checkbox.checked) {
                _searchString += (counter == 0) ? checkbox.value : '|' + checkbox.value;
                counter++;
            }
        });                                
        $sampleTable.DataTable().column(3).search(_searchString,
            true, false
        ).draw();           
        $(this).parents("div[data-customfilter-dropdown]").addClass('d-none');   
        billingFilterResult(e);
    });
    $('[data-update-amount]').on( "click",function(e){   
        var minAmount ="", maxAmount ="";
             minAmount =  $('#minAmount').val();
            maxAmount = $('#maxAmount').val();          
        if(minAmount && maxAmount) {  
            amountrangefilter(minAmount,maxAmount);
            $sampleTable.dataTable().fnDraw();
        }                    
        $(this).parents("div[data-customfilter-dropdown]").addClass('d-none');   
        billingFilterResult(e);     
    }); 
    $('[data-update-activitydate]').on('click', function(e){            
        var startDate = $('#billingFromDate input[type=text]').val(),
            endDate = $('#billingToDate input[type=text]').val();            
        filterByDate(0, startDate, endDate);              
        $(this).parents("div[data-customfilter-dropdown]").addClass('d-none');        
        $sampleTable.dataTable().fnDraw();             
        billingFilterResult(e);
    });
    
    $('.clear-billing-date').on('click',function(e){
        e.preventDefault();            
        $(this).parents("div[data-customfilter-dropdown]").addClass('d-none');
        $(this).parents("div[data-customfilter-dropdown]").find('input[type=text]').val('');
        $.fn.dataTableExt.afnFiltering.length = 0;                           
        $sampleTable.dataTable().fnDraw();
        _filterLength = $sampleTable.DataTable().rows( { filter : 'applied'} ).nodes().length;
        if(_billingDataLength == _filterLength) {
            _searchActivity = "";_searchString = "";
            billingFilterResult(e);
        }
    }); 
    $('.clear-activity').on('click',function(e){        
        e.preventDefault();            
        $(this).parents("div[data-customfilter-dropdown]").addClass('d-none');        
        $(this).parents("div[data-customfilter-dropdown]").find('select').val('');        
        $sampleTable.DataTable().column(1).search('', true, false).draw();       
        $sampleTable.dataTable().fnDraw(); 
        _filterLength = $sampleTable.DataTable().rows( { filter : 'applied'} ).nodes().length;
        if(_billingDataLength == _filterLength) {
            _searchActivity = "";_searchString = "";
            billingFilterResult(e);
        }              
    });
    $('.clear-amount').on('click',function(e){
        e.preventDefault();            
        $(this).parents("div[data-customfilter-dropdown]").addClass('d-none');
        $(this).parents("div[data-customfilter-dropdown]").find('input[type=text]').val('');        
        amountrangefilter($('#minAmount').val(),$('#maxAmount').val());
        $sampleTable.dataTable().fnDraw();
        _filterLength = $sampleTable.DataTable().rows( { filter : 'applied'} ).nodes().length;
        if(_billingDataLength == _filterLength) {
            _searchActivity = "";_searchString = "";
            billingFilterResult(e);
        }
    });    
    $('.clear-payment').on('click',function(e){        
        e.preventDefault();            
        $(this).parents("div[data-customfilter-dropdown]").addClass('d-none');               
        $(this).parents("div[data-customfilter-dropdown]").find('input:checkbox').each(function (index, checkbox) {
            if (checkbox.checked) {
                checkbox.checked = false;
            }
        });                    
        $sampleTable.DataTable().column(3).search('', true, false).draw();  
        $sampleTable.dataTable().fnDraw();    
        _filterLength = $sampleTable.DataTable().rows( { filter : 'applied'} ).nodes().length;
        if(_billingDataLength == _filterLength) {
            _searchActivity = "";_searchString = "";
            billingFilterResult(e);
        }        
    });
    $('[data-customfilter-dropdown] .close-menu').on( "click",function(e){
        e.stopPropagation();        
        $(this).parents("div[data-customfilter-dropdown]").addClass('d-none');
    });    
    
    $('#billingFromDate,#billingToDate').datepicker({        
        autoclose: true
    }); 

function amountValidate(e){
    if (e.which != 46 && e.which != 45 && e.which != 46 && !(e.which >= 48 && e.which <= 57)) {
        return false;
    }
}
function billingFilterResult(e){
    var _filterArr = [], _filterData = [], _uniqueFilterData = [], _targetfilter = ""; 
    _targetfilter = $(e.target.attributes)[1].name;        
    $sampleTable.DataTable().rows( { search:'applied' } ).data().each(function(value, index) {
        _filterArr.push(value);            
    });            
    if(_targetfilter === "data-update-amount" || _targetfilter === "data-update-activity" || _targetfilter === "data-update-activitydate" || _targetfilter === "data-clear-filter") {
        $('div[data-payment-filter] .checkbox').remove();   
        for(var i = 0; i < _filterArr.length; i++) {         
            if(_filterArr[i].Channel !== "" && _filterArr[i].Channel !== null) {       
                _filterData.push((_filterArr[i].Channel).toLowerCase());   
            }
        }        
        for(var j = 0; j < _filterData.length; j++){
            if(_uniqueFilterData.indexOf(_filterData[j]) == -1)
            _uniqueFilterData.push(_filterData[j]);  
        }        
        for(var k = 0; k < _uniqueFilterData.length; k++) {
            $('div[data-payment-filter] .filter-header').after( '<div class="checkbox"><label for="' +"Channel_"+ k + '"><input type="checkbox" value="' + _uniqueFilterData[k] + '" id="' +"Channel_" + k +'" />' + _uniqueFilterData[k] + '</label></div>' );
        }   
        var searchArr = _searchString.split("|");
        
        for (var l = 0; l < searchArr.length; l++){
            $('div[data-payment-filter]').find('input[type=checkbox][value="'+ searchArr[l] +'"]').prop('checked', true);
        }
        _filterData= []; _uniqueFilterData = [];
    }
    if (_targetfilter === "data-update-amount" || _targetfilter === "data-update-payment" || _targetfilter === "data-update-activitydate" || _targetfilter === "data-clear-filter") {
        $('div[data-activity-filter] select').remove();    
        var select = $('<select class="form-control"><option value="">Select One..</option></select>')
                        .insertAfter( $('div[data-activity-filter] .filter-header'));
        for(var _i = 0; _i < _filterArr.length; _i++) {
            if(_filterArr[_i].DocumentType !== "" && _filterArr[_i].DocumentType !== null) {
                _filterData.push((_filterArr[_i].DocumentType).toLowerCase());      
            }              
        }
        for(var _j=0; _j < _filterData.length; _j++){
            if(_uniqueFilterData.indexOf(_filterData[_j]) == -1)
            _uniqueFilterData.push(_filterData[_j]);  
        }
        for(var _k = 0; _k < _uniqueFilterData.length; _k++) {         
            select.append('<option value="'+ _uniqueFilterData[_k] +'" id="'+"DocumentType_"+ _k +'">'+ _uniqueFilterData[_k] +'</option>' )
        }       
        $('div[data-activity-filter] select').val(_searchActivity);        
        _filterData = []; _uniqueFilterData = [];
    }        
}






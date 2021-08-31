$('body').tooltip({
    selector: '[rel=tooltip]'
});
function showFilter(e, index) {                 
    var _th = $(e.target).parent();    
    var _targetFilter = _th.attr("data-filter");       
    var _thPos = _th.offset(); 
    var _thHight = _th.outerHeight();        
    $('div['+ _targetFilter+']').removeClass("d-none").siblings("div[data-customfilter-dropdown]").addClass("d-none");        
    $('div['+_targetFilter+']').width(_th.width());  
    $('div['+_targetFilter+']').css({ 'left': _thPos.left, 'top': (_thPos.top + _thHight) });                          
    e.stopPropagation();
}
function configFilter($this, colArray) {
    setTimeout(function () {
        var _tableName = $this[0].id;        
        $.each(colArray, function (i, arg) {                
            $('#' + _tableName + ' th:eq(' + arg + ')').append('<div class="fa fa-filter custom-filter" onclick="showFilter(event,\'' + _tableName + '_' + arg + '\')" ></div>');                                 
        });             
    });        
}
function amountrangefilter(min,max){
    $.fn.dataTableExt.afnFiltering.pop();
    $.fn.dataTableExt.afnFiltering.push(        
        function( oSettings, aData, iDataIndex ) {
            var _iColumn = 2;
            var _iMin = parseFloat(min) * 1;            
            var _iMax = parseFloat(max) * 1;                       
            var _columnVal = aData[_iColumn];
            _columnVal = _columnVal.replace("$","");
            _columnVal = _columnVal.replace(",","");
            var _iAmount = _columnVal * 1;             
                
                if ( isNaN(_iMin) && isNaN(_iMax) )
                {
                    return true;
                }
                else if ( isNaN(_iMin) && _iAmount <= _iMax )
                {
                    return true;
                }
                else if ( _iMin < _iAmount && isNaN(_iMax))
                {
                    return true;
                }
                else if ( _iMin <= _iAmount && _iAmount <= _iMax )
                {
                    return true;
                }
                return false;
        }
    );
}
function filterByDate(column, startDate, endDate) {               
        $.fn.dataTableExt.afnFiltering.pop();     
        $.fn.dataTableExt.afnFiltering.push(
                function( oSettings, aData, iDataIndex ) {
                    var _rowDate = normalizeDate(aData[column]),
                _start = normalizeDate(startDate),
                _end = normalizeDate(endDate);                                
            if (_start <= _rowDate && _rowDate <= _end) {
            return true;
            } else if (_rowDate >= _start && _end === '' && _start !== ''){
            return true;
            } else if (_rowDate <= _end && _start === '' && _end !== ''){
            return true;
            } else {
            return false;
            }
        }
        );
}
        
var normalizeDate = function(dateString) {
    var _date = new Date(dateString);
    var _normalized = _date.getFullYear() + '' + (("0" + (_date.getMonth() + 1)).slice(-2)) + '' + ("0" + _date.getDate()).slice(-2);
    return _normalized;
}      
$("div[data-customfilter-dropdown]").click(function(e){
    e.stopPropagation();
});
$(document).click(function(){
    $("div[data-customfilter-dropdown]").addClass("d-none");
});    


function showFilter(t,a){var e=$(t.target).parent(),i=e.attr("data-filter"),n=e.offset(),o=e.outerHeight();$("div["+i+"]").removeClass("d-none").siblings("div[data-customfilter-dropdown]").addClass("d-none"),$("div["+i+"]").width(e.width()),$("div["+i+"]").css({left:n.left,top:n.top+o}),t.stopPropagation()}function configFilter(t,a){setTimeout(function(){var e=t[0].id;$.each(a,function(t,a){$("#"+e+" th:eq("+a+")").append('<div class="fa fa-filter custom-filter" onclick="showFilter(event,\''+e+"_"+a+"')\" ></div>")})})}function amountrangefilter(l,d){$.fn.dataTableExt.afnFiltering.pop(),$.fn.dataTableExt.afnFiltering.push(function(t,a,e){var i=1*parseFloat(l),n=1*parseFloat(d),o=a[2],r=1*(o=(o=o.replace("$","")).replace(",",""));return!(!isNaN(i)||!isNaN(n))||(!!(isNaN(i)&&r<=n)||(!!(i<r&&isNaN(n))||i<=r&&r<=n))})}function filterByDate(r,l,d){$.fn.dataTableExt.afnFiltering.pop(),$.fn.dataTableExt.afnFiltering.push(function(t,a,e){var i=normalizeDate(a[r]),n=normalizeDate(l),o=normalizeDate(d);return n<=i&&i<=o||(n<=i&&""===o&&""!==n||i<=o&&""===n&&""!==o)})}$("body").tooltip({selector:"[rel=tooltip]"});var normalizeDate=function(t){var a=new Date(t);return a.getFullYear()+""+("0"+(a.getMonth()+1)).slice(-2)+("0"+a.getDate()).slice(-2)};$("div[data-customfilter-dropdown]").click(function(t){t.stopPropagation()}),$(document).click(function(){$("div[data-customfilter-dropdown]").addClass("d-none")});
$("ul.tabs li").click(function(){var s=$(this).attr("data-tab");$("ul.tabs li").removeClass("current"),$(".tab-content").removeClass("current"),$(this).addClass("current"),$("#"+s).addClass("current")}),$("#nav").children("li").first().children("a").addClass("active").next().addClass("is-open").show(),$("#nav").on("click","li > a",function(){$(this).hasClass("active")?($("#nav .is-open").removeClass("is-open").hide(),$(this).removeClass("active")):($("#nav .is-open").removeClass("is-open").hide(),$(this).next().toggleClass("is-open").toggle(),$("#nav").find(".active").removeClass("active"),$(this).addClass("active"))});
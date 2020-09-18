$("#allmenu button").click(function () {
    $("#allmenu button").next().stop().slideUp()
    $(this).next().stop().slideToggle()
})

$("#tabmenu button").click(function () {
    var btnindex = $(this).index()
    $("#tabmenu p").stop().slideUp()
    $("#tabmenu p").eq(btnindex).stop().slideDown()
})
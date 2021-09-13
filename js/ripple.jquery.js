

function rippleListener () {

    $(".ripple").mouseup(function(e) {
        $(this).find(".ink").addClass("end");
    });
    $(".ripple").mousedown(function(e) {
        var d, x, y;
        var item = $(this);

        parent = item.parent();
        //create .ink element if it doesn't exist
        if ($(this).find(".ink").length == 0)
            $(this).prepend("<div class='ink'></div>");

        //incase of quick double clicks stop the previous animation
        $(this).find(".ink").removeClass("animate");
        $(this).find(".ink").removeClass("end");
        //set size of .ink
        if (!$(this).find(".ink").height() && !$(this).find(".ink").width()) {
            //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            $(this).find(".ink").css({
                height: d,
                width: d
            });
        }

        //get click coordinates
        //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
        x = e.pageX - $(this).offset().left - $(this).find(".ink").width() / 2;
        y = e.pageY - $(this).offset().top - $(this).find(".ink").height() / 2;

        //set the position and add class .animate
        $(this).find(".ink").css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");

    });
}
rippleListener();

function toggle() {
    $("#agenda .row.talk").click(function() {
        var isHidden = $(this).find('.details').hasClass('hidden');
        $('#agenda .row.talk .details').each(function() {
            if (!$(this).hasClass('hidden')) {
                $(this).addClass('hidden');
            }
        });
        $("#agenda .row.talk .summary .read-more").each(function() {
            $(this).text("Read more...");
        });
        var readMore = $(this).find('.read-more');
        if (isHidden) {
            $(this).find('.details').removeClass('hidden');
            readMore.text("Less");
        } else {
            $(this).find('.details').addClass('hidden');
            readMore.text("Read more...");
        }
    });
}
$(function() {
    var ele = $(location.hash).find('.details');
    if (ele.hasClass('hidden')) {
        ele.removeClass('hidden');
    }
    toggle();
});

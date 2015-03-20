/**
 * Created by Justin M on 3/10/2015.
 */
$(document).ready(function() {
    var date = new Date();
    var year = date.getFullYear();
    $("#copyright").text("Copyright " + year +" Swiy Lab")

    $("#research_list a").each(function() {
        var id = $(this).data("topic");
        $(this).click(function(e) {
            e.preventDefault();
            if(!$("#"+id).hasClass("show")) {
                $("#research section").each(function() {
                    if($(this).hasClass("show")) {
                        $(this).toggleClass("show");
                    }
                });
            }

            $("#"+id).toggleClass("show");
        });


    });
});
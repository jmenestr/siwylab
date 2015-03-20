/**
 * Created by Justin M on 3/10/2015.
 */
$(document).ready(function() {
    var date = new Date();
    var year = date.getFullYear();
    $("#copyright").text("Copyright " + year +" Swiy Lab")

    $("#research_list a").each(function() {
        var id = $(this).data("topic");
        console.log(id);
        console.log($(this));
        $(this).click(function(e) {
            e.preventDefault();
            $("#research_list a").each(function() {

            })
            $("#"+id).toggleClass("show");
        });


    });
});
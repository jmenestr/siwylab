/**
 * Created by Justin M on 3/10/2015.
 */
$(document).ready(function() {
    var date = new Date();
    var year = date.getFullYear();
    $("#copyright").text("Copyright " + year +" Swiy Lab")

    $("#research_list a").each(function() {
        var id = $(this).data("topic"); //Get data id tag to assign correct #id
        $(this).click(function(e) { //Assign click handeler
            e.preventDefault();
            if(!$("#"+id).hasClass("show")) { //If different topic clicked than one currently showed, hides current
                $("#research section").each(function() {
                    if($(this).hasClass("show")) {
                        $(this).toggleClass("show"); //Togglles show class
                    }
                });
            }

            $("#"+id).toggleClass("show");
        });


    });
});

/**
 * Created by Justin M on 3/10/2015.
 */
$(document).ready(function() {
    var date = new Date();
    var year = date.getFullYear();
    $("#copyright").text("Copyright " + year +" Swiy Lab")
    
    function hide_other_topics(selected_topic) { //Hides old topic if the new selected topic is different from old
        if(!$(selected_topic).hasClass("show")){
            $("#research section").each(function() {
                if($(this).hasClass("show")) {
                    $(this).toggleClass("show");
                }
            });
        }
    }
    $("#research_list a").each(function() {
        var id = $(this).data("topic"); //Get data id tag to assign correct #id
        $(this).click(function(e) { //Assign click handeler
            e.preventDefault();
            hide_other_topics("#"+id);
            $("#"+id).toggleClass("show");
        });


    });
});

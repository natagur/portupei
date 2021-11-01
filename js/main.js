$(document).ready(function(){
    $(".popup .close").click(function(event){
        $(".popup").hide();
        event.preventDefault();
    });
    $(document).on("click",".model button",function(event){
        $(".popup").show();
        event.preventDefault();
    });
});
$(document).ready(function(){
    $("#sameAddress").click(function(){
      if ($("#sameAddress").is(":checked")) {
        $("#home").val($("#bill").val());
        $("#home").attr("disabled", true);
        $("#home").css("background", "#d1d1d1");
      }else{
        $("#home").css("background","#ffffff");
        $("#home").removeAttr("disabled");
        $("#home").val(" ");
      }
    });
});

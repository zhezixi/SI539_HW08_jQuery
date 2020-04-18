$(document).ready(function(){
  $(this).mouseover(function(){
    $("#display").css("background-image", "url('" + this.src + "')");
    $("#display").text($(this).attr("alt"));
    console.log("image hovered");
  });

});

$(document).ready(function(){

  $("img").mouseover(function(){
    $("#display").css("background-image", "url('" + this.src + "')");
    $("#display").text(this.alt);
    console.log("image hovered");
  });

  $("img").mouseleave(function(){
    $("#display").css("background-image", "url('')");
    $("#display").text("Hover over an image below to display the image and the alt text.");
    console.log("image left");
  });

  $("img").focus(function(){
    $("#display").css("background-image", "url('" + this.src + "')");
    $("#display").text(this.alt);
    console.log("focus");
  });

  $("img").blur(function(){
    $("#display").css("background-image", "url('')");
    $("#display").text("Hover over an image below to display the image and the alt text.");
    console.log("blur");
  });
});

$(document).ready(function(){

    $("#challenge4_form").click(function(event){
      if ($("#name").val().length == 0){
        $("#nameError").css("display","block");
        event.preventDefault();
      }
      else{
        $("#nameError").css("display","none");
      }

      if ($("#addr").val().length == 0){
        $("#addrError").css("display","block");
        event.preventDefault();
      }
      else{
        $("#addrError").css("display","none");
      }
     });
});

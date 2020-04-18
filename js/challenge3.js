$(document).ready(function(){
    $("#ch3form").submit(function(){
      if ($("input[name = standing]:checked").length !== 1
       || $("input[name = gradDate]:checked").length !== 1) {
         alert("You must pick one of the class standings and one of the graduate years to proceed!");
         return false;
       }else{
         return true;
       }
     });
});

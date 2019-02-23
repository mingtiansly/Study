$(document).ready(function(){
   $(".owul1").click(function(){
      $(".owtu1").fadeIn("slow");
      $(".owtu2").fadeIn("slow");
      $(".owtu3").fadeIn("slow");
      $(".owtu4").fadeIn("slow");
      $(".owtu5").fadeIn("slow");
      
     
    })  ;
   $(".owul2").click(function(){
      $(".owtu3").slideUp("slow");
      $(".owtu4").slideUp("slow");
      $(".owtu5").slideUp("slow");
      $(".owtu2").slideUp("slow");
      $(".owtu1").fadeIn("slow");
   }) ;
   $(".owul3").click(function(){
     $(".owtu2").fadeIn("slow");
     $(".owtu1").slideUp("slow");
     $(".owtu3").slideUp("slow");
     $(".owtu4").slideUp("slow");
     $(".owtu5").fadeIn("slow");
   }) ;
   $(".owul4").click(function(){
     $(".owtu1").slideUp("slow");
     $(".owtu2").slideUp("slow");
     $(".owtu3").fadeIn("slow");
     $(".owtu4").fadeIn("slow");
     $(".owtu5").slideUp("slow");
   }) ;
   $(".owul5").click(function(){
    $(".owtu1").fadeIn("slow");
    $(".owtu2").slideUp("slow");
    $(".owtu3").slideUp("slow");
    $(".owtu4").slideUp("slow");
    $(".owtu5").fadeIn("slow");
   }) ;
   });
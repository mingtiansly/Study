$(document).ready(function(){
  
    $(".lantu-img1").fadeIn();
    $(".lantu-img2").fadeIn("slow");
    $(".lantu-img3").fadeIn(3000);
    $(".lantu-img4").fadeIn(5000);
    $(".lantu-img5").fadeIn(7000);
    $(".lantu-img6").fadeIn(8000);
 
});
 $(document).ready(function(){
    $(".feat-a").click(function(e){
      
      $(".feat-abc-1").slideToggle("slow");
      
      e.preventDefault();
       
      
    });
    $(".feat-a2").click(function(e){
      
      $(".feat-abc-2").slideToggle("slow");
      
      e.preventDefault();
       
      
    });
    $(".feat-a3").click(function(e){
      
      $(".feat-abc-3").slideToggle("slow");
      
      e.preventDefault();
       
      
    });
    $(".feat-a4").click(function(e){
      
      $(".feat-abc-4").slideToggle("slow");
      
      e.preventDefault();
       
      
    });
}); 
$(document).ready(function(){
    $(document).off('click.bs.dropdown.data-api');
});//让导航中的菜单不是点击出现
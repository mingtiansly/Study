$(document).ready(function(){
   $(".ser-our-top1").click(function(){
      $(".ser-our-bp1").slideToggle("slow");
      $(".ser-our-bp2").css("display","none");
      $(".ser-our-bp3").css("display","none");
    })  ;
   $(".ser-our-top2").click(function(){
      $(".ser-our-bp1").css("display","none");
      $(".ser-our-bp2").slideToggle("slow");
      $(".ser-our-bp3").css("display","none");
   }) ;
   $(".ser-our-top3").click(function(){
      $(".ser-our-bp1").css("display","none");
      $(".ser-our-bp2").css("display","none");
      $(".ser-our-bp3").slideToggle("slow");
   }) ;
});
/* 首页图片淡入 */
$(document).ready(function(){
  
    $(".pro-i1").fadeIn();
    $(".pro-i2").fadeIn("slow");
    $(".pro-i3").fadeIn(3000);
    $(".pro-i4").fadeIn(5000);
    $(".pro-i5").fadeIn(7000);
    $(".pro-i6").fadeIn(8000);
 
});
/* 首页图片切换 */
$(document).ready(function(){
   $(".owul1").click(function(){
      $("#owtu1").slideToggle("slow");
      $("#owtu2").slideToggle("slow");
      $("#owtu3").slideToggle("slow");
      $("#owtu4").slideToggle("slow");
      $("#owtu5").slideToggle("slow");
      $("#owtu6").slideToggle("slow");
      $("#owtu7").slideToggle("slow");
      $("#owtu8").slideToggle("slow");
     
    })  ;
   $(".owul2").click(function(){
      $("#owtu3").slideToggle("slow");
      $("#owtu4").slideToggle("slow");
      $("#owtu5").slideToggle("slow");
      $("#owtu6").slideToggle("slow");
   }) ;
   $(".owul3").click(function(){
     $("#owtu2").slideToggle("slow");
     $("#owtu5").slideToggle("slow");
     $("#owtu6").slideToggle("slow");
     $("#owtu7").slideToggle("slow");
     $("#owtu8").slideToggle("slow");
   }) ;
   $(".owul4").click(function(){
     $("#owtu3").slideToggle("slow");
     $("#owtu4").slideToggle("slow");
     $("#owtu5").slideToggle("slow");
     $("#owtu6").slideToggle("slow");
   }) ;
   $(".owul5").click(function(){
     $("#owtu4").slideToggle("slow");
     $("#owtu3").slideToggle("slow");
   }) ;
   
  /* 第二子页数字增长 */
  
   //第一个数字滚动
    var numBox = document.getElementById('nm');
    /**
    * 数字滚动
    * @param {Object} num 		开始值
    * @param {Object} maxNum	最大值,最终展示的值
    */
    function numRunFun(num,maxNum){
    var numText = num;
    var golb; // 为了清除requestAnimationFrame
    function numSlideFun(){
        numText+=300; // 速度的计算可以为小数
        if(numText >= maxNum){
             	numText = maxNum;	
             	cancelAnimationFrame(golb);
            }else {
             		golb = requestAnimationFrame(numSlideFun);
                  }
            numBox.innerHTML = ~~(numText)
            }
             numSlideFun();
        }
             // 运行
        numRunFun(0,11700)
             
       //第二个数字滚动
        var numBox1 = document.getElementById('nm1');
        /**
        * 数字滚动
        * @param {Object} num 		开始值
        * @param {Object} maxNum	最大值,最终展示的值
        */
         function numRunFun1(num,maxNum){
        var numText = num;
        var golb; // 为了清除requestAnimationFrame
        function numSlideFun(){
            numText+=100; // 速度的计算可以为小数
            if(numText >= maxNum){
                numText = maxNum;	
                cancelAnimationFrame(golb);
                }else {
                   		golb = requestAnimationFrame(numSlideFun);
                   	}
                numBox1.innerHTML = ~~(numText)   		
                   	}
                numSlideFun();
                   }
                   // 运行
                numRunFun1(0,5700)
                    
          //第三个数字滚动
        var numBox2 = document.getElementById('nm2');
         /**
         * 数字滚动
         * @param {Object} num 		开始值
         * @param {Object} maxNum	最大值,最终展示的值
         */
        function numRunFun2(num,maxNum){
        var numText = num;
        var golb; // 为了清除requestAnimationFrame
        function numSlideFun(){
            numText+=100; // 速度的计算可以为小数
            if(numText >= maxNum){
                numText = maxNum;	
                cancelAnimationFrame(golb);
            }else {
                    golb = requestAnimationFrame(numSlideFun);
                  }
            numBox2.innerHTML = ~~(numText)
                        		
                }
                numSlideFun();
            }
            // 运行
            numRunFun2(0,4800)
                          
           //第三个数字滚动
        var numBox3 = document.getElementById('nm3');
         /**
        * 数字滚动
        * @param {Object} num 		开始值
        * @param {Object} maxNum	最大值,最终展示的值
        */
        function numRunFun3(num,maxNum){
            var numText = num;
            var golb; // 为了清除requestAnimationFrame
            function numSlideFun(){
            numText+=400; // 速度的计算可以为小数
             if(numText >= maxNum){
                numText = maxNum;	
                cancelAnimationFrame(golb);
                }else {
                    golb = requestAnimationFrame(numSlideFun);
                }
                numBox3.innerHTML = ~~(numText)
                        		
             }
                 numSlideFun();
        }
            // 运行
             numRunFun3(0,25900)
});


$(document).ready(function(){
        $(".index-img-yue").click(function(){
            $(".index-tan").css("display","block");
        });
        $(".err").click(function(){
             $(".index-tan").css("display","none");
        });
        /* 图片点击 */
        $(".err1").click(function(){
              $(".index-pho-tu").css("display","none");
              
              $(".index-pho-tu1").css("display","block");
              
         }); 
          $(".err3").click(function(){
              $(".index-pho-tu1").css("display","none");
              
              $(".index-pho-tu").css("display","block");
              
         }); 
         $(".err2").click(function(){
             $(".index-pho-zhe").css("display","none");
             $(".index-pho-tu").css("display","block");
             $(".index-pho-tu1").css("display","none");
            
             
         }); 
        $(function(){  
        $(".index-pho-img").click(function(){  
            
            var _this = $(this);//将当前的index-pho-img元素作为_this传入函数  
            imgShow("#bigimg", _this);
        });  
    }); 
    function imgShow(bigimg, _this){  
        var src = _this.attr("src");//获取当前点击的img元素中的src属性  
        $(bigimg).attr("src", src);//设置#bigimg元素的src属性
         $(".index-pho-zhe").css("display","block");
          $(bigimg1).attr("src", src)
        }
        
       /* $(".index-pho-img").click(function(){
            
            $(".index-pho-zhe").css("display","block");
            
            $(".index-pho-tu1").css("display","none");
            
        }); */
       
        
        /* 折叠 */
        $(".show1").click(function(){
          $(this).siblings().css("display","block");
          $(this).css("display","none");
        });
         $(".push1").click(function(){
          $(this).siblings().css("display","block");
          $(this).css("display","none");
        });
        /* 侧面隐藏 */
        $(".fa-bars").click(function(){
            $(".index-right-none").css("display","block");
        });
        $(".error").click(function(){
            $(".index-right-none").css("display","none");
        })
});

/* 数字增长*/
 var fg = true;
        window.onscroll= function(){
   
        var t = document.documentElement.scrollTop||document.body.scrollTop;//获取滚动条的位置
            function gundong(){
               var numBox1 = document.getElementById('nm');
              var numBox2 = document.getElementById('nm1');
              var numBox3 = document.getElementById('nm2');
              var numBox4 = document.getElementById('nm3');
              function numRunFun(num,maxNum,numBox){
              var numText = num;
              var golb; // 为了清除requestAnimationFrame
              
              function numSlideFun(){
                  numText+=10; // 速度的计算可以为小数
                  if(numText >= maxNum){
                        numText = maxNum;	
                        cancelAnimationFrame(golb);
                      }else {
                            golb = requestAnimationFrame(numSlideFun);
                            }
                      numBox.innerHTML = ~~(numText);
                      }
                       numSlideFun();
                  }
                           // 运行
                      numRunFun(0,850,numBox1);
                      numRunFun(0,152,numBox2);
                      numRunFun(0,554,numBox3);
                      numRunFun(0,25,numBox4);
              }
             if(t>=300 && fg == true){ 
                  gundong();
                  fg=false;
                   
            }
    
}
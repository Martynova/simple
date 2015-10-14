    ;($(function(e) {
        var hwSlideSpeed = 700; //Скорость анимации перехода слайда
        var hwTimeOut = 1000;   //время до автоматического перелистывания слайдов
        $('.slide').css(
            {"position" : "absolute",
                "top":'0',
                "left": '0'}).hide().eq(0).show();
        var slideNum = 0;
        var slideTime;
        var slideCount = $("#slider").find(".slide").length;// кол-во элементов слайдера

//*****************функция запуск слайдера ****************************************************

        var animSlide = function(arrow){
            clearTimeout(slideTime);                            // остаенавливаем выполнения кода
            $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);     //скрывает нулевой слайд элемент
            if(arrow == "next"){
                if(slideNum == (slideCount-1)) {
                    slideNum=0;
                }
                else{slideNum++}
            }
            else if(arrow == "prev")
            {
                if(slideNum == 0) {
                    slideNum=slideCount-1;
                }
                else{slideNum-=1}
            }
            else{
                slideNum = arrow;
            }
            $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);

        };
//********************************************************************************************


            $('.next').click(function(){
                animSlide("next");
                return false;
            });
            $('.prev').click(function(){
                animSlide("prev");
                return false;
            });

//****************** запуск функции animSlide()***********************************************
        var pause = false;
        var rotator = function(){
            if(!pause){
                slideTime = setTimeout(function(){
                    animSlide('next')}, hwTimeOut);
            }
        };
        // при наведении на слайдер останавливается пролистывание слайда, при уводе начинает листать
        $('.slider-box').hover(
            function(){
                clearTimeout(slideTime);
                pause = true;
            },
            function(){
                pause = false;
                rotator();
            });
        rotator();
    }));




$(function petspages() {
    //переменная из контейнера для изображений
    var sldr = $('.sldr'),
    // ширина слайдера
    slideWidth = $('.sl_ctr').outerWidth(),
    //определение количества слайдов
    slideCount = $('.sldr img').length,
    //блок с кнопкой назад
    prv_b = $('.prv_b'),
    //блок с кнопкой вперед
    nxt_b = $('.nxt_b'),
    //направление движения слайдов (1-влево, -1-вправо)
    course = 1,
    //первоначальное смещение слайдов
    margin = - slideWidth;
    $('.sldr img:last').clone().prependTo('.sldr');
    $('.sldr img').eq(1).clone().appendTo('.sldr');
    $('.sldr').css('margin-left',-slideWidth);
    function animate()
    {
        //установка смещения изображения на ширину изображения
        if(margin==-slideCount*slideWidth-slideWidth)
        {
            sldr.css({'marginLeft':-slideWidth});
        margin=-slideWidth*2
    }
        else 
        if(margin==0&&course==-1)
    {
        sldr.css({'marginLeft':-slideWidth*slideCount});
        margin=-slideWidth*slideCount+slideWidth
    }
        else
        {
            margin=margin-slideWidth*(course)
        }
        sldr.animate({'marginLeft':margin})
    }
        //при нажатии по кнопке движение слайда вправо
        prv_b.click(function()
        {
                if(sldr.is(':animated'))
                {
                    return false
                }
                var course2=course;
                course=-1;
                animate();
                course=course2
        });
                //при нажатии по кнопке движение слайда влево
                nxt_b.click(function()
                {
                    if(sldr.is(':animated'))
                    {
                        return false
                    }
                    var course2=course;
                    course=1;
                    animate();
                    course=course2
                });
            });
$(function() {
  function getCurrentPage() {
    var current = 0;
    var screenClassStr = $('.screen').attr('class');
    console.log(screenClassStr);
    if(screenClassStr.indexOf('screen_')<0) {
      current = 0;
    } else if(screenClassStr.indexOf('screen_x90')>=0) {
      current = 1;
    } else if(screenClassStr.indexOf('screen_x180')>=0) {
      current = 2;
    } else if(screenClassStr.indexOf('screen_x270')>=0) {
      current = 3;
    }
    return current;
  }
  
  var translateZ = window.innerHeight / 2 + 'px';

    $('.layer,.screen,.storyboard').css('width',window.innerWidth);
    $('.layer,.screen,.storyboard').css('height',window.innerHeight);
    var layer1 = document.getElementById('layer1');
    var layer2 = document.getElementById('layer2');
    var layer3 = document.getElementById('layer3');
    var layer4 = document.getElementById('layer4');

    document.querySelector('.global').style.transform = 'translateZ(' + '-' + translateZ + ')';
    layer1.style.transform = 'rotateX(0deg) translateZ(' + translateZ +')';
    layer2.style.transform = 'rotateX(-90deg) translateZ(' + translateZ +')';
    layer3.style.transform = 'rotateX(180deg) translateZ(' + translateZ +')';
    layer4.style.transform = 'rotateX(-270deg) translateZ(' + translateZ +')';
    
  setTimeout(function() {
    $('.load').css('display','none');
    $('.global').css('display','block');
  },0);

  $('#js_tab_menu li').click(function() {
    $('#js_tab_menu li').removeClass('on');
    $(this).addClass('on');
    $('.inner').addClass('animate');
    var liIndex = $('#js_tab_menu li').index(this);
    $('.conitem').css('display','none');
    var index = $(this).index();
    $('.conitem').css('display','none');
    $('.conitem').eq(index).css('display','block');

  });

  $('.btn').click(function() {
    $(this).addClass('btnAnimate');
    $('.layer3 .inner').removeClass('animate');
    if($(this).hasClass('btn1')) {
      $('.screen').attr('class','screen ease screen_x90');
    } else if($(this).hasClass('btn2')) {
      $('.screen').attr('class','screen ease screen_x180');
      $('.layer3 .inner').addClass('animate');
    } else if($(this).hasClass('btn3')) {
      $('.screen').attr('class','screen ease screen_x270');
    }

    if($(this).hasClass('btn4')) {
      $('.story').css('display','block');
      $('.storyshadow').css('display','block');
      $('.full_screen').addClass('animated').addClass('bounceIn');
    }
  });

  $('.close').click(function() {
    $('.story').css('display','none');
    $('.storyshadow').css('display','none');
  });

  var screen = document.querySelector('.screen');
  // Transform(section1);
  var gesture = new AlloyFinger(screen, {
    swipe:function(evt) {
      // console.log('swipe' + evt.direction);
      var direction = evt.direction;
      var current = getCurrentPage();
      // alert(direction);

      console.log(current);
      if(direction == 'Up') {
        switch (current) {
          case 0:
            $('.btn1').click();
            break;
          case 1:
            $('.btn2').click();
            break;
          case 2:
            $('.btn3').click();
            break;
          case 3:
            $('.screen').attr('class','screen ease');
            break;
        }
        // $('.btn1').click();
        // console.log('up');
      } else if(direction == 'Down') {
        // console.log('down');
        switch (current) {
          case 0:
            $('.btn3').click();
            break;
          case 1:
            $('.screen').attr('class','screen ease');
            break;
          case 2:
            $('.btn1').click();
            break;
          case 3:
            $('.btn2').click();
            break;
        }
      }
      // if($('.screen').hasClass('.screen_x90'))
    }
  });
  // $('.layer1 .btn').click(function() {
  //   if($(this).hasClass('btn4')) {
  //     return;
  //   }
  //   $(this).addClass('btnAnimate');
  //   var self = this;
  //   setTimeout(function() {
  //     $(self).removeClass('btnAnimate');
  //   },2000);
  // })
});

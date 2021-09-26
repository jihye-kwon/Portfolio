$(function () {
    var winWidth = $(window).width();
    //fullpage
    if (winWidth >= 1000) {
        $('#fullpage').fullpage({
            loopTop: true,
            loopBottom: true,
            menu: '#menu',
            lockAnchors: false,
            anchors: ['Intro', 'Profile', 'Web', 'Editable', 'Contact'],
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['Intro', 'Profile', 'Web', 'Editable', 'Contact'],
            showActiveTooltip: true,
            afterLoad: function (anchorLink, index, direction) {
                //3번째 section(index==3 || index==4), 4번째 section의 메뉴는 검정색 글자
                if (index == 4) {
                    $('header nav ul li a').addClass('active');
                    $('#fp-nav ul li a span').addClass('active');
                    $('#fp-nav ul li .fp-tooltip').addClass('active');
                    $('.s4 h1').addClass('active');
                    $('.cancle').css('background-image', 'url(img/close_navy.png)');
                    $('.logo img:nth-child(1)').attr('src', 'img/logo_box1_navy.png');
                    $('.logo img:nth-child(2)').attr('src', 'img/logo_box2_navy.png');
                    $('.logo img:nth-child(3)').attr('src', 'img/logo1_navy.png');
                    
                } else {
                    $('header nav ul li a').removeClass('active');
                    $('#fp-nav ul li a span').removeClass('active');
                    $('#fp-nav ul li .fp-tooltip').removeClass('active');
                    $('.s4 h1').removeClass('active');
                    $('.cancle').css('background-image', 'url(img/close_w.png)');
                    $('.logo img:nth-child(1)').attr('src', 'img/logo_box1_w.png');
                    $('.logo img:nth-child(2)').attr('src', 'img/logo_box2_w.png');
                    $('.logo img:nth-child(3)').attr('src', 'img/logo1_w.png');
                    
                }
                if (index == 1) {
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s5 .box .con_wrap .con_left .con_left_text p').removeClass('active');
                }
                //2번째 section 에서 자식 콘텐츠에 active설정
                if (index == 2) {
                    $('.s2 .box > div').addClass('active');
                    //1초 기다렸다가 barAnimation 함수 호출 (1번 실행)
                    setTimeout(barAnimation, 1000);
                    $('.s5 .box .con_wrap .con_left .con_left_text p').removeClass('active');
                }
                if (index == 3) {
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s5 .box .con_wrap .con_left .con_left_text p').removeClass('active');
                }
                if (index == 4) {
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s5 .box .con_wrap .con_left .con_left_text p').removeClass('active');
                }
                if (index == 5) {
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s5 .box .con_wrap .con_left .con_left_text p').addClass('active');
                }

            }
        });
    }else{
        $('#fullpage').fullpage({
            loopTop:true,
            loopBottom:true,
            anchors: ['Intro', 'Profile', 'Web', 'Editable', 'Contact'],
            afterLoad: function ( anchorLink, index, direction){
                if (index == 4) {
                    $('header nav ul li a').addClass('active');
                    $('#fp-nav ul li a span').addClass('active');
                    $('#fp-nav ul li .fp-tooltip').addClass('active');
                    $('.s4 h1').addClass('active');
                    $('.mo_logo img:nth-child(1)').attr('src', 'img/logo_box1_navy.png');
                    $('.mo_logo img:nth-child(2)').attr('src', 'img/logo_box2_navy.png');
                    $('.mo_logo img:nth-child(3)').attr('src', 'img/logo1_navy.png');
                    $('#hamburger span').css('background','#030c19');
                } else {
                    $('header nav ul li a').removeClass('active');
                    $('#fp-nav ul li a span').removeClass('active');
                    $('#fp-nav ul li .fp-tooltip').removeClass('active');
                    $('.s4 h1').removeClass('active');
                    $('.mo_logo img:nth-child(1)').attr('src', 'img/logo_box1_w.png');
                    $('.mo_logo img:nth-child(2)').attr('src', 'img/logo_box2_w.png');
                    $('.mo_logo img:nth-child(3)').attr('src', 'img/logo1_w.png');
                    $('#hamburger span').css('background','#efefef');
                }
                if (index == 1) {
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s5 .box .con_wrap .con_left .con_left_text p').removeClass('active');
                }
                //2번째 section 에서 자식 콘텐츠에 active설정
                if (index == 2) {
                    $('.s2 .box > div').addClass('active');
                    //1초 기다렸다가 barAnimation 함수 호출 (1번 실행)
                    setTimeout(barAnimation, 1000);
                    $('.s5 .box .con_wrap .con_left .con_left_text p').removeClass('active');
                }
                if (index == 3) {
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s5 .box .con_wrap .con_left .con_left_text p').removeClass('active');
                }
                if (index == 4) {
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s5 .box .con_wrap .con_left .con_left_text p').removeClass('active');
                }
                if (index == 5) {
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s5 .box .con_wrap .con_left .con_left_text p').addClass('active');
                }
            }
        });
    }
    //skills bar
    function barAnimation() {
        $('.skillbar').each(function () {
            $(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 2000);
        });
    }

    function barStop() {
        $('.skillbar').each(function () {
            $(this).find(".skillbar-bar").animate({
                width: 0
            }, 2000)
        });
    }

    //cursor
    const cursor = document.querySelector('.cursor');
    const s1 = document.querySelector('.s1');
    const s2 = document.querySelector('.s2');
    const s3 = document.querySelector('.s3');
    const s4 = document.querySelector('.s4');
    const s5 = document.querySelector('.s5');
    const links = Array.from(document.querySelectorAll("a"));

    const setCursorLocation = e => {
        let cursorLocation = `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`;
        cursor.setAttribute("style", cursorLocation);
    }

    document.addEventListener("mousemove", setCursorLocation);

    links.forEach(item => {

        item.addEventListener("mouseover", () => {
            cursor.classList.add("focus");
        });

        item.addEventListener("mouseleave", () => {
            cursor.classList.remove("focus");
        });

    });

    //swiper
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //canvas star
    var n_stars = 150
    var colors = ['#176ab6', '#fb9b39']
    for (let i = 0; i < 98; i++) {
        colors.push('#fff')
    }

    var canvas = document.querySelector('canvas')
    canvas.width = innerWidth
    canvas.height = innerHeight

    addEventListener('resize', () => {
        canvas.width = innerWidth
        canvas.height = innerHeight
        stars = []
        init()
    })

    canvas.style.background = '#000'
    var c = canvas.getContext('2d')

    const randomInt = (max, min) => Math.floor(Math.random() * (max - min) + min)

    var bg = c.createRadialGradient(canvas.width / 2, canvas.height * 3, canvas.height, canvas.width / 2, canvas.height, canvas.height * 4);
    bg.addColorStop(0, "#32465E");
    bg.addColorStop(.4, "#000814");
    bg.addColorStop(.8, "#000814");
    bg.addColorStop(1, "#000");

    class Star {
        constructor(x, y, radius, color) {
            this.x = x || randomInt(0, canvas.width)
            this.y = y || randomInt(0, canvas.height)
            this.radius = radius || Math.random() * 1.1
            this.color = color || colors[randomInt(0, colors.length)]
            this.dy = -Math.random() * .3
        }
        draw() {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
            c.shadowBlur = randomInt(3, 15)
            c.shadowColor = this.color
            c.strokeStyle = this.color
            c.fillStyle = 'rgba( 255, 255, 255, .5)'
            c.fill()
            c.stroke()
            c.closePath()
        }
        update(arrayStars = []) {
            if (this.y - this.radius < 0) this.createNewStar(arrayStars)

            this.y += this.dy
            this.draw()
        }
        createNewStar(arrayStars = []) {
            let i = arrayStars.indexOf(this)
            arrayStars.splice(i, 1)
            arrayStars.push(new Star(false, canvas.height + 5))
        }
    }
    var stars = []

    function init() {
        for (let i = 0; i < n_stars; i++) {
            stars.push(new Star())
        }
    }
    init()

    function animate() {
        requestAnimationFrame(animate)
        c.clearRect(0, 0, canvas.width, canvas.height)
        c.fillStyle = bg
        c.fillRect(0, 0, canvas.width, canvas.height)
        stars.forEach(s => s.update(stars))
    }
    animate()

    //popup gallery
    var imgBtn = $('.s4 .box .grid_img .container1 a');
    var gallTotal = $('.s4 .box .grid_img .container1 > div').length;
    var popup = $('.popup');
    var container = $('.popup .container2');
    var gallNum = 0;

    imgBtn.click(function (e) {
        e.preventDefault();
        //마우스로 클릭한 a태그의 href속성 값을 가져와서 attr변수에 저장
        var attr = $(this).attr('href');
        console.log(attr);
        //<img src="img/gallery1.jpg"> 문장을 완성해서 container영역에 자식객체로 추가시킴 
        container.append('<img src="' + attr + '">');
        popup.css('display', 'block');
    });

    //popup gallery next btn
    $('.popup .next').click(function () {
        gallNum++;
        if (gallNum > gallTotal) {
            gallNum = 1;
        }
        container.empty();
        container.append('<img src="img/editable' + gallNum + '.png">');
    });

    //popup gallery prev btn
    $('.popup .prev').click(function () {
        gallNum--;
        if (gallNum < 1) {
            gallNum = gallTotal;
        }
        container.empty();
        container.append('<img src="img/editable' + gallNum + '.png">');
    });

    //popup gallery close btn
    $('.close').click(function () {
        popup.css('display', 'none');
        //container안의 내용 비움
        container.empty();
    });

    //hanmburger menu
    var estado = 0,
        vw = $(window).width();
    $("#hamburger").click(function () {
        var delay_time = 0;
        $(this).toggleClass('open');
        console.log(estado);
        if (estado === 0) {
            TweenMax.to($("#bg-menu-mobile"), 1, {
                x: -vw,
                ease: Expo.easeInOut
            });
            $("li").each(function () {
                TweenMax.to($(this), 1.2, {
                    x: -vw,
                    scaleX: 1,
                    delay: delay_time,
                    ease: Expo.easeInOut
                });
                delay_time += .04;
            });
            estado = 1;
        } else {
            estado = 0;
            TweenMax.to($("#bg-menu-mobile"), 1.2, {
                x: 0,
                ease: Expo.easeInOut
            });
            $("li").each(function () {
                TweenMax.to($(this), 1, {
                    x: 0,
                    x:vw,
                    scaleX: 2.3,
                    delay: delay_time,
                    ease: Expo.easeInOut
                });
                delay_time -= .02;
            });
        }
    });
    $('.mo_btn .mobile #menu-mobile ul li').click(function(){
        $("#hamburger").click();
    });
    //cancel버튼을 클릭하면 nav ul 이 나오고, 다시 cancel버튼을 클릭하면 nav ul이 들어감
    var sw=0;
    $('.cancle').click(function(){
        if(sw===0){
            sw=1;
            $('header > nav > ul').animate({'left':'0vw'});
            $(this).css('background-position','center left');
        }else{
            sw=0;
            $('header > nav > ul').animate({'left':'60vw'});
            $(this).css('background-position','center right');
        }
    });
    
});
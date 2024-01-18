window.onload = function () {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    var window_width = window.innerWidth;
    var window_height = window.innerHeight;

    $('.video-skip').click(function (e) {
        e.preventDefault();

        let tl = gsap.timeline();
        tl.to('.first-video-box', 1, { filter: "blur(15px) brightness(4)" })
            .to('.first-video-box', 1, { opacity: 0 }, '<+=0.5')
            .to('.first-video-box', 1, { visibility: 'hidden' });
        $('body').css('overflow', 'unset');
    });

    if (window_width <= 1024) {

        const swiper = new Swiper(".card3-swiper", {


            loop: true,

            pagination: {
                el: '.swiper-pagination',
            },

            navigation: {
                prevEl: ".prev",
                nextEl: ".next"
            },
            on: {
                slideChange: function () {
                    const index_currentSlide = this.realIndex;
                    const banner_text = document.querySelectorAll('.banner-text');

                    banner_text.forEach((text, index) => {
                        text.style.display = index === index_currentSlide ? 'flex' : 'none';
                    });
                },
            },
        });
    } else {
        const swiper = new Swiper(".card3-swiper", {
            centeredSlides: true,
            effect: "coverflow",
            loop: true,
            slidesPerView: "2",
            slidesOffsetBefore: 0,
            coverflowEffect: {
                slideShadows: true,
                rotate: 0,
                stretch: 0,
                depth: 100,
                outerWidth: 200,
                modifier: 6,
            },
            pagination: {
                el: '.swiper-pagination',
            },

            navigation: {
                prevEl: ".prev",
                nextEl: ".next"
            },

            on: {
                slideChange: function () {
                    const index_currentSlide = this.realIndex;
                    const banner_text = document.querySelectorAll('.banner-text');

                    banner_text.forEach((text, index) => {
                        text.style.opacity = index === index_currentSlide ? 1 : 0;
                    });
                },
            },
        });
    }


    if (window_width <= 1024) {
        const swiper2 = new Swiper(".card5-swiper", {


            loop: true,

            pagination: {
                el: '.swiper-pagination2',
            },

            navigation: {
                prevEl: ".prev2",
                nextEl: ".next2"
            },

        });
    } else {
        const swiper2 = new Swiper(".card5-swiper", {

            setWrapperSize: true,
            loop: true,
            slidesPerView: "2",
            spaceBetween: 40,
            pagination: {
                el: '.swiper-pagination2',
            },

            navigation: {
                prevEl: ".prev2",
                nextEl: ".next2"
            },

        });
    }
    const swiper3 = new Swiper(".card6-swiper", {

        loop: true,
        navigation: {
            prevEl: ".prev3",
            nextEl: ".next3"
        },

    });

    const swiper4 = new Swiper(".card7-swiper", {

        loop: true,

        navigation: {
            prevEl: ".prev5",
            nextEl: ".next5"
        },

    });
    if (window_width <= 1024) {
        const swiper5 = new Swiper(".card7-3d-swiper", {

            loop: true,

            grabCursor: true,


            pagination: {
                el: '.swiper-pagination6',
            },

            navigation: {
                prevEl: ".prev6",
                nextEl: ".next6"
            },


        });
    } else {
        const swiper5 = new Swiper(".card7-3d-swiper", {
            centeredSlides: true,
            loop: true,
            slidesPerView: "2",
            grabCursor: true,
            effect: "coverflow",

            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                outerWidth: 200,
                modifier: 6,
                slideShadows: true
            },
            pagination: {
                el: '.swiper-pagination6',
            },

            navigation: {
                prevEl: ".prev6",
                nextEl: ".next6"
            },


        });
    }

    function map() {

        let map = document.querySelector('.map');
        let percentage = 50;
        let containerWidth = map.scrollWidth - map.clientWidth;
        let scrollPosition = (percentage / 100) * containerWidth;
        map.scrollLeft = scrollPosition;

    }
    map();

    //空拍手指消失
    function closeHandImgMap() {
        const box = document.querySelector(".map")
        const hand = document.querySelector(".arrow-container")
        let startX = null;
        box.addEventListener('touchstart', function (e) {
            startX = e.touches[0].pageX;
            hand.style.display = 'none';
        });
    }
    closeHandImgMap();
}
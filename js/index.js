window.onload = function () {
    
    const swiper = new Swiper(".card3-swiper", {
        centeredSlides: true,
        effect: "coverflow",
        simulateTouch:false,
        allowTouchMove:false,
        loop: true,
        speed:1000,
        autoplay: {
            delay: 2000,
        },
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
            slideChangeTransitionStart: function () {
                const index_currentSlide = this.realIndex+1;
                let tl=gsap.timeline();
                tl.to(`.banner-text`, {opacity: 0 , filter: 'blur(15px)', duration:1})
                  .to(`.banner-text:nth-of-type(${index_currentSlide})`, {opacity: 1 , filter: 'blur(0px)', duration:1},'<');
            },
        },
    });

    const swiper2 = new Swiper(".card5-swiper", {

        setWrapperSize: true,
        loop: true,
        speed:1000,
        autoplay: {
            delay: 2000,
        },
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

    const swiper3 = new Swiper(".card6-swiper", {

        // loop: true,
        navigation: {
            prevEl: ".prev3",
            nextEl: ".next3"
        },

    });

    const swiper4 = new Swiper(".card7-swiper", {

        // loop: true,
        slidesPerView: "4",
        spaceBetween: 15,
        navigation: {
            prevEl: ".prev5",
            nextEl: ".next5"
        },

    });

    const swiper5 = new Swiper(".card7-3d-swiper", {
        centeredSlides: true,
        loop: true,
        slidesPerView: "2",
        grabCursor: true,
        effect: "coverflow",
        speed:1000,
        autoplay: {
            delay: 2000,
        },
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


    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);

    //-- card1 --
    let birdTl=gsap.timeline({repeat:-1, repeatDelay:3});
    birdTl.pause();
    let tl1=gsap.timeline({delay:1});
        tl1.from('.card1 .left-top-flower1', {y:'-21vw', rotate:'-20deg', duration:1, ease:'power2.out'})
           .from('.card1 .left-top-flower2', {y:'-4vw', x:'-12vw', rotate:'20deg', duration:1, ease:'power2.out'}, '<0.2')
           .from('.card1 .left-bottom-grass', {y:'16vw', x:'-2vw', rotate:'15deg', duration:1, ease:'power2.out'}, '<0.1')
           .from('.card1 .right-bottom-flower1', {y:'3vw', x:'11vw', rotate:'15deg', duration:1, ease:'power2.out'}, '<0.1')
           .from('.card1 .right-bottom-flower2', {y:'29vw',  rotate:'25deg', duration:1, ease:'power2.out'}, '<0.1')
           .from('.card1 .right-bottom-flower3', {y:'17vw', rotate:'15deg', duration:1, ease:'power2.out'}, '<0.1')
           .from('.card1 .logo-box img', {opacity: 0, scale:1.3, filter:'blur(15px)', duration:1.5, stagger:0.3, ease:'power2.out', onComplete(){ birdTl.play();}}, '<0.2')
           .from('.card1 .slogan .text-box, .card1 .company-box .company-text', { opacity: 0, y:30, filter:'blur(15px)', duration:1.5, stagger:0.3, ease:'power2.out',}, '<0.3')
           .from('.card1 .container .top-bird', {
            x:'10vw', 
            y:'-15vw', 
            rotate:'-25deg', 
            duration:2, 
            ease:'power1.out',
            onComplete(){
                 gsap.to('.card1 .container .top-bird', {y:15, duration:1.5, repeat: -1, yoyo:true, ease:'power1.inOut'});
            }
        }, '<0.2')

    birdTl.from('.card1 .container .left-bird', 
            {
                motionPath: {
                    path: ".card1 #bird_run_svg #run1",
                    align: ".card1 #bird_run_svg #run1",
                    alignOrigin: [0.5, 0.5],
                },
                duration:0.6, 
                ease:'power4.out'
            },'<')
        .to('.card1 .container .left-bird', {y:-20, rotateY:'180deg', duration:0.15, ease:'power1.out', delay:2}, '>')
        .to('.card1 .container .left-bird', {y:0, duration:0.15, ease:'power1.in'}, '>')
        .to('.card1 .container .left-bird', {
            motionPath: {
                path: ".card1 #bird_run_svg #run2",
                align: ".card1 #bird_run_svg #run2",
                alignOrigin: [0.5, 0.5],
            },
            duration:0.8, 
            ease:'power4.out',
            delay:0.1
        });
    


    //-- card3 --
    let tl3=gsap.timeline({
        scrollTrigger: {
            trigger: ".card3",
            start: "top 60%",
            end: "top 60%",
            //scrub:2,
            // markers:true
        }
    });

    tl3.from('.card3 .top-bird', {x:'-20vw', y:'5vw', duration:1.5, ease:'power2.out'})
       .to('.card3 .top-bird', {y:'15px', duration:1.5, repeat:-1, yoyo:true, ease:'power1.inOut'})
       .from('.card3 .top-box .title-box', {opacity:0, x:'40px', filter:'blur(15px)', duration:1.5, ease:'power1.Out'}, '<-0.5')
       .from('.card3 .top-box .list-box ul li', {opacity:0, x:'40px', duration:1, stagger:0.15, ease:'power1.Out'}, '<0.8');


    
    //-- card4 --
    let tl4=gsap.timeline({
        scrollTrigger: {
            trigger: ".card4",
            start: "top 20%",
            end: "top 20%",
            //scrub:2,
            // markers:true
        }
    });

    tl4.from('.card4 .left .top-flower img', {opacity:0, y:'40px', filter:'blur(15px)', duration:1.5, ease:'power1.out'})
       .from('.card4 .left .text-box .title-box, .card4 .left .text-box .content-text-box', {opacity:0, y:'40px', filter:'blur(15px)', stagger:0.3, duration:1.5, ease:'power1.out'}, '<0.5')
       .fromTo('.card4 .right img', {opacity:0, filter:'blur(15px) brightness(3)'}, {opacity:1, filter:'blur(0px) brightness(1)', duration:1, ease:'power1.out'}, '<0.8')


    
    //-- card6 --
    let tl6=gsap.timeline({
        scrollTrigger: {
            trigger: ".card6",
            start: "top 50%",
            end: "top 50%",
            //scrub:2,
            // markers:true
        }
    });

    tl6.from('.card6 .top-flower', {opacity:0, y:'-18vw', x:'10vw', rotate:'-30deg',  duration:1.5, ease:'power2.out'})
       .from('.card6 .leaf-1, .card6 .leaf-2, .card6 .leaf-3, .card6 .leaf-4, .card6 .leaf-5, .card6 .leaf-6, .card6 .leaf-7, .card6 .leaf-8', {opacity:0, y:'-8vw', x:'3vw', rotate:'-80deg', stagger:0.3,  duration:3, ease:'power1.out'},'<0.5')

    gsap.to('.card6 .top-shadow', {x:'3vw', rotate:'-8deg', duration:3, yoyo:true, repeat:-1, ease:'power1.inOut'});


    //-- card6-2 --
    let tl62=gsap.timeline({
        scrollTrigger: {
            trigger: ".card6 .top",
            start: "top 50%",
            end: "top 50%",
            //scrub:2,
            // markers:true
        }
    });

    tl62.from('.card6 .top .title-box, .card6 .top .content-text-box', {opacity:0, y:'40px', filter:'blur(15px)', stagger:0.3, duration:1.5, ease:'power1.out'})

    //-- card6-3 --
    let tl63=gsap.timeline({
        scrollTrigger: {
            trigger: ".card6 .bottom",
            start: "top 50%",
            end: "top 50%",
            //scrub:2,
            // markers:true
        }
    });

    tl63.from('.card6 .bottom .title-box, .card6 .bottom .content-text-box', {opacity:0, y:'40px', filter:'blur(15px)', stagger:0.3, duration:1.5, ease:'power1.out'})
        .from('.card6 .c6-bottom-leaf1, .card6 .c6-bottom-leaf2, .card6 .c6-bottom-leaf3, .card6 .c6-bottom-leaf4', {opacity:0, y:'-8vw', x:'3vw', rotate:'-80deg', stagger:0.3,  duration:3, ease:'power1.out'},'<0.5')
        .from('.card6 .bottom-flower-leaf .c6_bottom_flower img', {y:'14vw', x:'-2vw', rotate:'20deg', duration:1, ease:'power1.out'}, '<0.5')


    //-- card8 --
    let tl8=gsap.timeline({
        scrollTrigger: {
            trigger: ".c8-form",
            start: "top 50%",
            end: "top 50%",
            //scrub:2,
            // markers:true
        }
    });

    tl8.from('.c8-form .top-bird', {x:'40vw', y:'-6vw', rotate:'-45deg', duration:3, ease:'power2.out'})
       .to('.c8-form .top-bird', {y:'15px', duration:1.5, repeat:-1, yoyo:true, ease:'power1.inOut'})
       .from('.c8-form .top-title .title .left img', {opacity:0, y:'40px', filter:'blur(15px)', duration:1.5}, '<-2')


    //-- card82 -- 
    let birdTl2=gsap.timeline({repeat:-1, repeatDelay:3});
    birdTl2.pause();

    let tl82=gsap.timeline({
        scrollTrigger: {
            trigger: ".c8-form .form-box",
            start: "top 50%",
            end: "top 50%",
            //scrub:2,
            // markers:true
        }
    })

    tl82.from('.c8-form .left-flower', {x:'-20vw', y:'4vw', rotate:'20deg', duration:1.5, ease:'power2.out'})
        .from('.c8-form .right-flower', {x:'5vw', y:'30vw', rotate:'-30deg', duration:1.5, ease:'power2.out', onComplete(){birdTl2.play();}},'<0.3')


    birdTl2.from('.c8-form .left-bird', 
            {
                motionPath: {
                    path: ".c8-form #bird_run_svg #run1",
                    align: ".c8-form #bird_run_svg #run1",
                    alignOrigin: [0.5, 0.5],
                },
                duration:0.6, 
                ease:'power4.out'
            },'<')
        .to('.c8-form .left-bird', {y:-20, rotateY:'180deg', duration:0.15, ease:'power1.out', delay:2}, '>')
        .to('.c8-form .left-bird', {y:0, duration:0.15, ease:'power1.in'}, '>')
        .to('.c8-form .left-bird', {
            motionPath: {
                path: ".c8-form #bird_run_svg #run2",
                align: ".c8-form #bird_run_svg #run2",
                alignOrigin: [0.5, 0.5],
            },
            duration:0.8, 
            ease:'power4.out',
            delay:0.1
        });
    
}
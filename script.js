gsap.registerPlugin(ScrollTrigger)
    /* gsap.defaults({ ease: "none", duration: 1 }); */

/* gsap.from('.contianer1', { duration: 3, y: '-100%', ease: 'elastic' });
gsap.to('.a', {
    duration: 3,
    x: 400,
    rotation: 360,

}); */
//createasequence that moves3of th
//different directions
/* const tl = gsap.timeline();
tl.from(".contianer1", { xPercent: -100 })
    .from(".contianer2", { xPercent: 100 })
    .from(".contianer3", { yPercent: -100 }); */

// scrollbar(scrub:true).We could easily embed this in
//the gsap.timeline()to shorten thingsabit,but this
//is to show that you can create the ScrollTrigger
//separately if you prefer.

/* ScrollTrigger.create({
    animation: tl,
    trigger: "#container",
    start: "top top",
    end: "+=6000",
    scrub: true,
    pin: true,
    anticipatePin: 1
}); */

gsap.to('.b', {
    scrollTrigger: {
        trigger: '.b',
        // to start animation on view
        start: 'top 80%',
        // to end animation on view

        end: 'bottom 10%',
        // to show markers for animation
        //to togge action values are none complete etc.
        toggleActions: "restart pause reverse pause",
        scrub: 0.5,


    },
    duration: 1,
    x: 400,
    rotation: 360,
});


// normal animation
gsap.from('.card', {
    duration: 3,
    x: -500,
    rotation: 360
});
gsap.to('.rotate', {
    scrollTrigger: {
        trigger: '.rotate',
        start: 'top 100%',
        end: 'bottom center',
        toggleActions: 'restart complete reverse pause',
        scrub: 0.5,
    },
    duration: 1,
    x: '900%',
    rotation: 360
})


gsap.to('.c', {
    scrollTrigger: {
        trigger: '.c',
        // to start animation on view
        start: 'top 100%',
        // to end animation on view

        end: 'bottom center',
        // to show markers for animation

        //to togge action values are none complete etc.
        toggleActions: "restart complete reverse complete",
        // to scroll aniamtion back if user scrolls down and up
        scrub: 0.5
    },
    duration: 1,
    x: 400,
    rotation: 360,
});

gsap.utils.toArray('.cont').forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        scrub: true,
        snap: 3,
        end: () => '+=' +
            document.querySelector('.container').offsetHeight
    })
})
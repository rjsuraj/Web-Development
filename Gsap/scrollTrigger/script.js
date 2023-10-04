// gsap.from("#page1 .box",{
//     scale:0,
//     duration:1,
//     rotate:360,
//     delay:1
// })
gsap.from("#page1 .box",{
    rotate:360,
    duration:1,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        // end:"top -200%",
        scrub:3,
        pin:true
    }
})

gsap.from("#page2 .box",{
    scale:0,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})
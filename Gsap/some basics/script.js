// gsap.to(".box",{
//     x: 1000,
//     duration : 2,
//     delay : 1,
//     backgroundColor : "orange",
//     rotate : 360,
//     scale : 0.3
// })

// gsap.from(".box",{
//     x: 1000,
//     duration : 2,
//     delay : 1,
//     backgroundColor : "orange",
//     rotate : 360,
//     scale : 0.3
// })

// gsap.to("h1",{
//     x: 600,
//     duration : 1,
//     delay: 1,
//     // stagger: 0.5,  // time between elements animation
//     repeat: -1,
//     yoyo: true
// })

let tl = gsap.timeline();

tl.to("h1",{
    x: 500,
    duration: 1,
    color: "crimson",
    delay: 1        
})
.to("h2",{
    x: 500,
    duration: 1,
    color: "blue"
})
.to("h3",{
    x: 500,
    duration: 1,
    color: "salmon"
})
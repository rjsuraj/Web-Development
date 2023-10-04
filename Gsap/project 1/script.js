let tl = gsap.timeline();

tl.from("nav img,.nav-part1 h3,.nav-part2 h4,.started-btn",{
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay : 1,
    stagger: 0.2
})
.from("h1:nth-child(2)",{
    y: 100,
    opacity: 0,
    duration: 0.4,
})
.from("h1:nth-child(3),.book-btn",{
    y: 100,
    opacity: 0,
    duration: 0.4,
})
.from("h1:nth-child(4)",{
    y: 100,
    opacity: 0,
    duration: 0.4,
})
.from(".img1,.img2,.img3,.img4",{
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5
})
.from(".scroll",{
    scale: 0.2,
    opacity: 0,
    duration: 0.5
})
.to(".scroll",{
    y: 20,
    repeat: -1,
    duration: 0.5,
    yoyo: true
})
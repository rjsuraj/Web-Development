
function time(){
    let a = 0;
    let key = setInterval(() => {
        a += Math.floor(Math.random()*15);
        if(a >= 100){
            a = 100
            document.querySelector(".loader p").innerHTML = `${a}%`
            clearInterval(key)
        }
        document.querySelector(".loader p").innerHTML = `${a}%` 
    }, 150);
}

let tl = gsap.timeline()

tl.to(".loader p",{
    delay:0.5,
    duration:1,
    onStart:time
})
.to(".loader",{
    top:"-100%",
    delay:0.5,
    duration:1
})

// gsap.to(".page1 h1",{
//     transform: "translateX(-100%)",
//     fontWeight: "100",
//     scrollTrigger:{
//         trigger:".page1",
//         scroller:"body",
//         markers:true,
//         start:"top 0",
//         end:"top -200%",
//         scrub:2,
//         pin:true
//     }
// })
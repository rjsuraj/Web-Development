let tl = gsap.timeline()

// tl.to(".page1",{
//     height:0,
//     duration:2,
//     // ease:"expo.inOut"
//     ease:Circ.easeInOut
// })
// .to(".page2",{
//     height:"100%",
//     duration:2,
//     delay:-2,
//     // ease:"expo.inOut"
//     ease:Circ.easeInOut
// })
// .to(".page2",{
//     bottom:"100%",
//     duration:2,
//     delay:-1.6,
//     // ease:"expo.inOut"
//     ease:Circ.easeInOut
// })

// // .to(".page2",{
// //     height:"100%",
// //     duration:2,
// //     ease:"expo.inOut"
// // })
// // .to(".page3",{
// //     height:"100%",
// //     duration:2,
// //     delay:-1.6,
// //     ease:"expo.inOut"
// // })



tl.to(".page1",{
    height:0,
    delay:1,
    duration:2,
    ease:Circ.easeInOut
})
.to(".page2",{
    height:"100%",
    delay:-2,
    duration:2,
    ease:Circ.easeInOut
})
.to(".page2",{
    bottom:"100%",
    delay:-1.6,
    duration:2,
    ease:Circ.easeInOut
})
function revealAddDiv(){

    document.querySelectorAll(".reveal")
        .forEach(elem => {
    
            let parent = document.createElement("div");
            let child = document.createElement("div");
    
    
            child.classList.add('child')
            parent.classList.add('parent')
    
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);
    
            elem.innerHTML = "";
            elem.appendChild(parent);
    
        })

}

function loaderAnimation(){

    let tl = gsap.timeline()
    
    tl.from("span",{
        x:100,
        duration:1.2,
        stagger:0.2,
        ease:"expo.InOut"
    })
    .to(".reveal .parent .child",{
        y:"-100%",
        duration:0.7,
        ease:Circ.easeInOut
    })
    .to(".loader",{
        height:0,
        duration:1.5,
        // ease:Circ.easeInOut
        ease:"expo.out"
    })
    .to(".green-screen",{
        height:"100%",
        top:0,
        delay:-1.5,
        duration:1.5,
        // ease:Circ.easeInOut
        ease:"expo.out"
    })
    .to(".green-screen",{
        height:0,
        delay:-1.2,
        duration:1.5,
        // ease:Circ.easeInOut
        ease:"expo.out"
    })

}    

revealAddDiv();
loaderAnimation();

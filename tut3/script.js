gsap.to(".page:nth-child(2) h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:".page:nth-child(2)",
        scroller:"body",
        start:"top 0%",
        end:"top -150%",
        scrub:1,
        pin:true,

    }
})
gsap.from(".page:nth-child(1) #div1",{
    x:-50,
    scale:0,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:".page:nth-child(1) #div1",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:1,
        // pin:true,
    }

})
gsap.from(".page:nth-child(3) #div3",{
    scale:0,
    duration:1,
    rotate:360,
    // scrollTrigger:".page:nth-child(2) #div2"
    scrollTrigger:{
        trigger:".page:nth-child(3) #div3",
        scroller:"body",
        start:"top 80%"
    }
})
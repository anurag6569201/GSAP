var tl=gsap.timeline()

tl.from("nav h1",{
    y:-50,
    duration:.7,
    opacity:0,
})

tl.from(".other_links a:nth-child(1)",{
    y:-50,
    opacity:0,
    duration:0.25,
})
tl.from(".other_links a:nth-child(2)",{
    y:-50,
    opacity:0,
    duration:0.25,
})
tl.from(".other_links a:nth-child(3)",{
    y:-50,
    opacity:0,
    duration:0.25,
})
tl.from(".other_links a:nth-child(4)",{
    y:-50,
    opacity:0,
    duration:0.25,
})
tl.from("header .h11",{
    x:-50,
    opacity:0,
    duration:.6,
})
tl.from("header .h12",{
    x:-50,
    opacity:0,
    duration:.3,
})


// color
tl.to("nav h1",{
    color:"red",
    duration:.1
})

tl.to(".other_links a:nth-child(1)",{
    color:"red",
    duration:.1
})
tl.to(".other_links a:nth-child(2)",{
    color:"red",
    duration:.1
})
tl.to(".other_links a:nth-child(3)",{
    color:"red",
    duration:.1
})
tl.to(".other_links a:nth-child(4)",{
    color:"red",
    duration:.1
})
tl.to("header .h11",{
    color:"red",
    duration:.3
})
tl.to("header .h12",{
    color:"red",
    duration:.3
})
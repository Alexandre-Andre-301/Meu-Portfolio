import { createTimeline } from "animejs";


export function heroTimeline(){


const tl = createTimeline({

    defaults:{
        ease:"outExpo",
        duration:800
    }

});

tl.add(".navbar",

{

    translateY:[
        -40,
        0
    ],

    opacity:[
        0,
        1
    ]

})



.add(".hero-badge",

{

    scale:[
        0,
        1
    ],

    opacity:[
        0,
        1
    ],

    duration:600

},

"-=400"

)



.add(".hero-title",

{

    translateY:[
        60,
        0
    ],

    opacity:[
        0,
        1
    ],

    duration:900


},

"-=300"

)



.add(".hero-description",

{

    translateY:[
        30,
        0
    ],

    opacity:[
        0,
        1
    ],

    duration:700


},

"-=500"

)



.add(".hero-buttons",

{

    translateY:[
        30,
        0
    ],

    opacity:[
        0,
        1
    ],

    duration:700


},

"-=400"

)



return tl;


}
import { useEffect, useRef } from "react";
import { animate, utils } from "animejs";

import "./matrix.css";


export default function MatrixBackground() {


    const containerRef = useRef<HTMLDivElement>(null);



    useEffect(()=>{


        if(!containerRef.current) return;


        const container = containerRef.current;


        const amount = 40;


        for(let i = 0; i < amount; i++){


            const column = document.createElement("span");


            column.classList.add("matrix-number");


            column.innerText = Math.random() > 0.5 ? "1" : "0";


            column.style.left = `${utils.random(0,100)}%`;


            column.style.animationDelay = `${utils.random(0,5)}s`;



            container.appendChild(column);



            animate(column,{


                translateY:[
                    "-120vh",
                    "120vh"
                ],


                opacity:[
                    0,
                    1,
                    0
                ],


                duration:utils.random(4000,9000),


                delay:utils.random(0,2000),


                loop:true,


                ease:"linear"


            })


        }



    },[])



    return (

        <div 
            ref={containerRef}
            className="matrix-background"
        />

    )

}
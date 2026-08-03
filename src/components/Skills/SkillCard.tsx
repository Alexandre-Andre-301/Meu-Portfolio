import type { Skill } from "../../data/skills";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import "./skills.css";


interface Props {


    skill: Skill;

    onClick:()=>void;


}



export default function SkillCard({

    skill,

    onClick

}:Props){


    const cardRef = useRef<HTMLDivElement>(null);



    useEffect(()=>{


        if(!cardRef.current) return;



        animate(cardRef.current,{

            translateY:[20,0],

            opacity:[0,1],

            duration:600,

            ease:"outExpo"


        });


    },[]);




    return (


        <div

            ref={cardRef}

            className="skill-card"


            style={{

                "--skill-color":skill.color

            } as React.CSSProperties}


            onClick={onClick}


        >


            <div className="skill-icon">


                <img

                    src={skill.icon}

                    alt={skill.name}

                />


            </div>



            <h3>

                {skill.name}

            </h3>



        </div>


    )


}
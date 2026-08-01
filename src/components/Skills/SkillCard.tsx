import { useEffect, useRef } from "react";
import { animate } from "animejs";
import type { Skill } from "../../data/skills";


interface Props {

    skill: Skill;

    active: boolean;

    inactive: boolean;

    onClick: () => void;

}



export default function SkillCard({

    skill,

    active,

    inactive,

    onClick

}: Props) {


    const cardRef = useRef<HTMLDivElement>(null);

    const detailsRef = useRef<HTMLDivElement>(null);



    useEffect(()=>{


        if(!cardRef.current) return;



        animate(cardRef.current,{

            scale: active ? 1.06 : 1,

            translateY: active ? -12 : 0,

            boxShadow: active

            ? `0 0 35px ${skill.color}`

            : "0 0 0 rgba(0,0,0,0)",


            duration:500,

            ease:"outExpo"


        });



    },[active, skill.color]);





    useEffect(()=>{


        if(active && detailsRef.current){


            animate(detailsRef.current,{

                opacity:[0,1],

                translateY:[20,0],

                duration:400,

                delay:100,

                ease:"outExpo"

            });


        }


    },[active]);





    return (

        <div


            ref={cardRef}


            className={`

                skill-card

                ${active ? "active" : ""}

                ${inactive ? "inactive" : ""}

            `}


            style={{

                "--skill-color": skill.color

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




            {

            active && (


                <div

                    ref={detailsRef}

                    className="skill-details"

                >


                    <ul>


                    {

                    skill.description.map((item,index)=>(


                        <li key={index}>

                            ✓ {item}

                        </li>


                    ))

                    }


                    </ul>


                </div>


            )

            }



        </div>

    )

}
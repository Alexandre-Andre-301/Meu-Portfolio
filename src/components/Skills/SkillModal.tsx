import { useEffect, useRef } from "react";
import { animate } from "animejs";
import type { Skill } from "../../data/skills";
import "./skills.css";


interface Props {

    skill: Skill;

    onClose:()=>void;

}



export default function SkillModal({

    skill,

    onClose

}:Props){


    const modalRef = useRef<HTMLDivElement>(null);



    const contentRef = useRef<HTMLDivElement>(null);




    useEffect(()=>{


        if(!modalRef.current) return;



        animate(modalRef.current,{

            opacity:[0,1],

            duration:400,

            ease:"outExpo"

        });



        if(contentRef.current){


            animate(contentRef.current,{

                scale:[0.7,1],

                translateY:[80,0],

                opacity:[0,1],

                duration:700,

                ease:"outElastic(1,.6)"


            });


        }



    },[]);




    function handleClose(){


        if(!contentRef.current) {

            onClose();

            return;

        }



        animate(contentRef.current,{

            scale:0.7,

            opacity:0,

            duration:300,

            ease:"inExpo",


            onComplete:()=>{

                onClose();

            }

        });


    }




    return (


        <div

            ref={modalRef}

            className="skill-overlay"

            onClick={handleClose}

        >



            <div

                ref={contentRef}

                className="skill-modal"


                style={{

                    "--skill-color":skill.color

                } as React.CSSProperties}


                onClick={(e)=>e.stopPropagation()}

            >



                <button

                    className="skill-close"

                    onClick={handleClose}

                >

                    ×

                </button>





                <div className="skill-icon modal-icon">


                    <img

                        src={skill.icon}

                        alt={skill.name}

                    />


                </div>




                <h2>

                    {skill.name}

                </h2>




                <div className="skill-details">


                    {

                    skill.description.map((item,index)=>(


                        <p key={index}>

                            ✓ {item}

                        </p>


                    ))

                    }


                </div>



            </div>



        </div>


    )

}
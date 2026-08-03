import type { Project } from "../../data/projects";
import { FaCog } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import "./project.css";


interface Props {

    project: Project;

}



export default function ProjectCard({project}:Props){


const cogRef = useRef<SVGSVGElement>(null);



useEffect(()=>{


    if(!cogRef.current) return;


    animate(cogRef.current,{

        rotate:360,

        scale:[
            1,
            1.12,
            1
        ],

        filter:[
            "drop-shadow(0 0 5px #9b5cff)",
            "drop-shadow(0 0 25px #9b5cff)",
            "drop-shadow(0 0 5px #9b5cff)"
        ],


        duration:3000,

        loop:true,

        ease:"inOutSine"

    });


},[]);



return (

<div className="project-card">


    <div className="project-image">

        { project.image ?(

        <img 
            src={project.image}
            alt={project.name}
        />

        )
        :
        (
        <div className="project-placeholder">

            <FaCog />

            <span>
                Em produção
            </span>

        </div>
        )
        }

    </div>



    <div className="project-content">


        <div className="project-header">

            <h3>
                {project.name}
            </h3>


            <span>
                {project.status}
            </span>

        </div>



        <p>
            {project.description}
        </p>



        <div className="tags">

        {
        project.technologies.map((tech)=>(

            <span key={tech}>
                {tech}
            </span>

        ))
        }

        </div>



        <div className="project-links">


            {
            project.demo && (

            <a 
                href={project.demo}
                target="_blank"
            >
                Demo
            </a>

            )
            }


            {
            project.github && (

            <a
                href={project.github}
                target="_blank"
            >
                Código
            </a>

            )
            }


        </div>


    </div>


</div>

)

}
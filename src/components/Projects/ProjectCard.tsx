import type { Project } from "../../data/projects";


interface Props {

    project: Project;

}



export default function ProjectCard({project}:Props){


return (

<div className="project-card">


    <div className="project-image">

        <img 
            src={project.image}
            alt={project.name}
        />

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



            <a
                href={project.github}
                target="_blank"
            >
                Código
            </a>


        </div>



    </div>



</div>

)

}
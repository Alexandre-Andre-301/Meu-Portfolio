import "./project.css";

import ProjectCard from "./ProjectCard";

import {projects} from "../../data/projects";



export default function Projects(){


return (

<section 
id="projects"
className="section"
>


<div className="container">


<h2 className="section-title">

My 
<span className="highlight">
Projects
</span>

</h2>



<div className="projects-grid">


{

projects.map((project)=>(

<ProjectCard

key={project.name}

project={project}

/>

))

}


</div>


</div>


</section>

)


}
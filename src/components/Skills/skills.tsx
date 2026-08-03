import { useState } from "react";
import SkillCard from "./SkillCard";
import SkillModal from "./SkillModal.tsx";
import { skills } from "../../data/skills";
import type { Skill } from "../../data/skills";


export default function Skills() {


    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);



    return (

        <section className="skills-section" id="skills">


            <div 
                className={`skills-grid ${
                    selectedSkill ? "blur" : ""
                }`}
            >


                {
                skills.map((skill)=>(


                    <SkillCard

                        key={skill.name}

                        skill={skill}

                        onClick={() =>
                            setSelectedSkill(skill)
                        }

                    />


                ))
                }


            </div>



            {
            selectedSkill && (

                <SkillModal

                    skill={selectedSkill}

                    onClose={() =>
                        setSelectedSkill(null)
                    }

                />

            )
            }


        </section>

    )

}
import { useState } from "react";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";
import "./skills.css"

export default function Skills() {

    const [activeSkill, setActiveSkill] = useState<number | null>(null);

    return (

        <section className="skills" >

            <div className="skills-grid" id="skills">

                {skills.map((skill, index) => (

                    <SkillCard
                        key={skill.name}
                        skill={skill}
                        active={activeSkill === index}
                        inactive={activeSkill !== index}
                        onClick={() =>
                            setActiveSkill(
                                activeSkill === index ? null : index
                            )
                        }
                    />

                ))}

            </div>

        </section>

    )

}
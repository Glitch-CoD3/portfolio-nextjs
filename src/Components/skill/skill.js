import skills from "../../../public/data/skills_file.json"
import SkillCard from "../Skill_card/SkillCard"

function Skill() {
    return (
        <>
            <div id='skill'>

                <h2 className='heading'>My Skills</h2>
                <div className="line"> </div>

                <div className="item-container">

                    <div className="item">
                        {
                            skills.map(skill => (
                                <SkillCard key={skill.id} skill={skill} />

                            ))
                        }

                    </div>

                </div>


            </div>
        </>
    )
}

export default Skill
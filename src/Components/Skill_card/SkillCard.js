export default function SkillCard(props) {
    return (
        <div className="skillcard">
            <div className="inside-card">
                <a href={props.skill.visit} target="_main">
                    <img className="img" src={props.skill.img} alt={props.skill.title} />
                </a>

                <div className="skill-footer">
                    <h2>{props.skill.title}</h2>
                </div>
            </div>
        </div>
    );
}

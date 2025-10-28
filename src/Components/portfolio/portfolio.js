import Card from "../card/card";
import projects from "../../../public/data/projects_file.json"; // adjust path if needed

export default function Portfolio() {
    return (
        <div id="portfolio">
            <h2 className="heading">Projects</h2>
            <div className="line"></div>

            <div className="projects">
                {
                    projects.map((project) => (
                        <Card key={project.id} project={project} />
                    ))

                }
            </div>
        </div>
    );
}

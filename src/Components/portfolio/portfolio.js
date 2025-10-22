import Card from "../card/card"

const project1 = {
    img: '/Images/portfolio.jpeg',
    title: "My Portfolio",
    des: "Everything About me ! Showcasing my skills and projects. ",
    lang: ["HTML", "CSS", "JavaScript", "React"],
    visit: "https://juelrana.netlify.app/"
}
const project2 = {
    img: '/Images/calc.png',
    title: "Scientific Calculator",
    des: "A scientific calculator that stores all calculations in a database.",
    lang: ["Python", "TKinter", "Custom TK"],
    visit: "#"
}

const project3 = {
    img: '/Images/game.png',
    title: "The Last Ascent Game",
    des: "A fully open-world 3D game about surviving in the jungle.",
    lang: ["Unreal Engine 5", "Blender"],
    visit: "https://lnkd.in/p/g-9qy8Sh"
}

const project4 = {
    img: '/Images/educationPlatform.jpeg',
    title: "Online Education Platform",
    des: "A fully responsive online store built with modern design principals.",
    lang: ["CSS", "Wordpress", "Customization"],
    visit: "https://dev-eduq.pantheonsite.io/"
}


function Portfolio() {
    return (
        <>
            <div id="portfolio">
                <h2 className='heading'>Projects</h2>
                <div className="line"></div>

                <div className='projects'>
                    <Card project={project1} />
                    <Card project={project2} />
                    <Card project={project3} />
                    <Card project={project4} />
                </div>
            </div>
        </>
    )
}

export default Portfolio
import "./globals.css";
import sidebar from "@/Components/sidebar/sidebar";
import Navigation from "@/Components/navbar/navbar";
import Sidebar from "@/Components/sidebar/sidebar";
import About from "@/Components/about/about";
import Skill from "@/Components/skill/skill";
import Education from "@/Components/education/education";
import Portfolio from "@/Components/portfolio/portfolio";


function Home() {
  return (
    <>
      <div>

        <div> <About /> </div>

        <div> <Skill /> </div>

        <div> <Education /> </div>

        <div> <Portfolio /> </div>

      </div>

    </>
  );
}

export default Home;

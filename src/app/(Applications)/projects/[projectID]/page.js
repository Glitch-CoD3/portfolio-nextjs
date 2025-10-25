import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { projectID } = params;
  return {
    title: `Project ${projectID}`,
  }
}

async function Project({ params }) {
  const { projectID } = await params;

  //Check the blog page id is valid number or not
  if (!/^\d+$/.test(projectID)) {
    return (
      <div className="flex justify-center items-center text-white text-2xl mt-32 font-sans font-bold">
        Project not found !!!
      </div>
    );
  }


  return (
    <>
      <h1>Page {projectID}</h1>
    </>

  )
}

export default Project
export const metadata = {
  title: "File"
}

async function File({ params }) {
  const { filePath } = await params;

  return (
    <>
      <div className="flex justify-center mt-8 text-xl">File/{filePath?.join("/")} </div>

      <div className="flex justify-center items-center w-full h-32  rounded-2xl mt-64 mx-auto">
        <h1 className="text-2xl">Opps! No Content available here..</h1>
      </div>
    </>

  )
}

export default File;
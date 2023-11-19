export default function About() {
  return (
    <section
      className="bg-slate-950 rounded-[56px] h-max text-slate-50 p-6 md:p-10 my-10 sm:w-[90%] mx-auto"
      id="about"
    >
      <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold">
        {'//About'}
      </h2>

      <div className="flex flex-col items-start justify-center h-full">
        <p className=" sm:px-12 py-5">
          I am a multiskilled Software Engineer with 4+ years experience in developing commercial software systems.
          <br/>
          <br/>
          I graduated from the University of Moratuwa, Sri Lanka in 2020 with a bachelor’s degree in computer science
          and engineering.
          <br/>
          <br/>
          I am currently working at Enactor Ltd. in the capacity of a software engineer and a technical lead in the
          Deployments and Scalability team.
          <br/>
          <br/>
          My expertise is in end to end backend systems design and development, containerization, and cloud computing.
        </p>
      </div>


    </section>
  );
}

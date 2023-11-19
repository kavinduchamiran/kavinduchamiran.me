export default function Experience() {
  const experiences = [
    {
      title: "Associate Technical Lead",
      company: "Enactor Ltd.",
      period: "Nov 2022 - Present",
      points: [
        "Lead the Deployment and Scalability Team.",
        "Architect technical specifications.",
        "Conduct code reviews."
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Enactor Ltd.",
      period: "Oct 2021 - Nov 2022",
      points: [
        "Develop REST APIs with Java and Spring Boot.",
        "Develop responsive UIs with ReactJS.",
        "Automate infrastructure with Terraform and Ansible."
      ],
    },
    {
      title: "Software Engineer",
      company: "Enactor Ltd.",
      period: "Feb 2020 - Oct 2021",
      points: [
        "Create CI/CD pipelines on Jenkins.",
        "Dockerize Java and NodeJS apps.",
        "Fix Linux deployment issues."
      ],
    },
    {
      title: "Software Engineering Trainee",
      company: "Zeptolytics Pvt. Ltd.",
      period: "June 2018 - Dec 2018",
      points: [
        "Develop a mobile app for ZeptoBI.",
        "Improve MongoDB performance using caching.",
        "Conduct tech talk sessions."
      ],
    },
    {
      title: "Open Source Developer",
      company: "MuseScore",
      period: "Jan 2018 - May 2018",
      points: [
        "Develop a GUI Lyrics Editor.",
        "Integrate a Spell Checker.",
        "Online portal to share lyrics."
      ],
    }
  ]

  return (
    <section
      className="sm:w-[90%] mx-auto flex flex-col justify-center mt-8 gap-14 sm:gap-12"
      id="experience"
    >
      <h2 className="text-3xl font-bold text-center pt-4">{'//Experience'}</h2>

      <div className="mb-6">
        {
          experiences.map(({title, company, period, points}, index) =>
            <div className="max-w-lg mx-auto mt-8 bg-white p-8 shadow-md" key={index}>
              <div className="mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-600">{company}</p>
                <p className="text-gray-500">{period}</p>
              </div>
              {points && <ul className="list-disc pl-6">
                {points.map((point, index2) =>
                  <li className="mb-2" key={index2}>{point}</li>
                )}
              </ul>}
            </div>
          )
        }
      </div>
    </section>
  );
}

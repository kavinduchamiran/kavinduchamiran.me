import {Badge} from "./ui/badge";

export default function Education() {
  const education = [
    {
      title: "Honours Degree of Bachelor of the Science of Engineering",
      description: [
        "University of Moratuwa, Sri Lanka",
        "Graduation Date: January 2020",
        "Cumulative GPA: 3.64 / 4.2",
        "Grade: Second Class Upper Division"
      ],
      tags: ["Mathematics", "Data Structures and Algorithms", "Computer Architecture", "Operating Systems", "Object Oriented Software Development", "Graph Theory for Computing", "Software Engineering", "Computer Networks", "Database Systems", "Computer Security", "Intelligent Systems", "Concurrent Programming", "Machine Learning", "Data Mining & Information Retrieval", "Distributed Systems", "Mobile Computing", "Information Security & Cryptography"],
    },
    {
      title: "IELTS General Training",
      description: ["IELTS Official", "Overall Band Score: 7.5 / 9", "Issued on January 2022", "Expires on January 2024"],
      tags: ["Listening", "Reading", "Writing", "Speaking"],
    }
  ]

  return (
    <section
      className="sm:w-[90%] mx-auto flex flex-col justify-center mt-8 gap-14 sm:gap-12"
      id="education"
    >
      <h2 className="text-3xl font-bold text-center pt-4">{"//Education"}</h2>

      <div className="max-w-4xl max-h-xl mx-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          {education.map(({title, description, tags}, index) =>
            <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              {description.map((text, index2) => <p className="text-gray-600 mb-4" key={index2}>{text}</p>)}
              <div className="flex gap-4 mb-4 flex-wrap">
                {tags.map(tag => <Badge variant={"secondary"} key={tag}>{tag}</Badge>)}
              </div>
            </div>)}
        </div>
      </div>

    </section>
  );
}

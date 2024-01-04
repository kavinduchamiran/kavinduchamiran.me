import React from 'react';
import {Badge} from './ui/badge';

export default function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      keywords: ["Java", "Python", "JavaScript"]
    },
    {
      title: "Frameworks",
      keywords: ["Spring Framework", "Spring Boot", "Django", "React"]
    },
    {
      title: "Cloud Computing",
      keywords: ["Amazon Web Services (AWS)", "Azure"]
    },
    {
      title: "Container Orchestration",
      keywords: ["Docker", "Kubernetes", "Helm"]
    },
    {
      title: "Infrastructure Management",
      keywords: ["Ansible", "Terraform", "Linux"]
    },
    {
      title: "Database Management Systems",
      keywords: ["MySQL", "MariaDB", "Amazon RDS"]
    },
    {
      title: "Source Control",
      keywords: ["Git", "GitHub", "Maven", "Jenkins", "Continuous Integration (CI)", "Continuous Delivery (CD)", "Agile", "Scrum"]
    },
    {
      title: "Soft Skills",
      keywords: ["Verbal communication", "Active listening", "Collaboration", "Relationship building", "Quick learner", "Analytical thinking", "Critical reasoning", "Decision making", "Patience"]
    }

  ]
  return (
    <section
      className="sm:w-[90%] mx-auto flex flex-col justify-center mt-8 gap-14 sm:gap-12"
      id="skills"
    >
      <h2 className="text-3xl font-bold text-center pt-4">{'//Skills'}</h2>

      <div>
        <article className="flex flex-col gap-5 px-5">
          {skills.map(({title, keywords}, index) =>
            <React.Fragment key={index}>
              <div className="flex items-center font-bold sm:text-lg justify-center flex-wrap ">
                <h5 className="px-1.5">{title}</h5>
              </div>
              <div className="flex gap-4 flex-wrap justify-center">
                {keywords.map((skill, index2) => <Badge variant={'secondary'} key={index2}>{skill}</Badge>)}
              </div>
              {index + 1 < skills.length && <hr/>}
            </React.Fragment>
          )}
        </article>
      </div>
    </section>
  );
}

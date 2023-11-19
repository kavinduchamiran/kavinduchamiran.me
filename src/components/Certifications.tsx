import {Badge} from './ui/badge';

export default function Certifications() {
  const certifications = [
    {
      title: "CKS: Certified Kubernetes Security Specialist",
      description: ["Linux Foundation", "Score: 87 / 100", "Issued on October 2023", "Expires on October 2025"],
      tags: ["API objects",
        "AWS Cloud Security Services",
        "Cloud",
        "Custom Resource Definitions",
        "Helm",
        "Ingress",
        "Kubernetes",
        "Logging and Troubleshooting",
        "Open Source Software",
        "Orchestration",
        "Scheduling",
        "Security Policies",
        "Services",
        "Site Reliability Engineer",
        "System Administrator",
        "Volumes"],
      link: "https://www.credly.com/badges/b553cc01-6764-4f39-8525-de4e3324f017/linked_in_profile"
    },
    {
      title: "CKA: Certified Kubernetes Administrator",
      description: ["Linux Foundation", "Score: 85 / 100", "Issued on December 2022", "Expires on December 2025"],
      tags: ["API objects",
        "Cloud",
        "Custom Resource Definitions",
        "Helm",
        "Ingress",
        "Kubernetes",
        "Logging and Troubleshooting",
        "Open Source Software",
        "Orchestration",
        "Scheduling",
        "Security Policies",
        "Services",
        "Site Reliability Engineer",
        "System Administrator",
        "Volumes"],
      link: "https://www.credly.com/badges/bbd3b8ec-5bd8-4006-b510-f82d6561a8bd/linked_in_profile"
    },
    {
      title: "CKAD: Certified Kubernetes Application Developer",
      description: ["Linux Foundation", "Score: 96 / 100", "Issued on October 2022", "Expires on October 2025"],
      tags: [
        "Cloud Native Applications",
        "ConfigMaps",
        "Containers",
        "Docker",
        "Kubernetes",
        "Open Source Software",
        "Orchestration",
        "Secrets",
        "Volumes"
      ]
      ,
      link: "https://www.credly.com/badges/3776c379-dd86-4817-8a14-904e29bfd714/linked_in_profile"
    }
  ]

  return (
    <section
      className="sm:w-[90%] mx-auto flex flex-col justify-center mt-8 gap-14 sm:gap-12"
      id="certifications"
    >
      <h2 className="text-3xl font-bold text-center pt-4">{'//Certifications'}</h2>

      <div className="max-w-4xl max-h-xl mx-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          {certifications.map(({title, description, tags}, index) =>
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

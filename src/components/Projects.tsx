import {Badge} from './ui/badge';

export default function Projects() {
  const projects = [
    {
      title: "HackerRank Solutions",
      description: "My attempts at solving HackerRank problems.",
      tags: ["Java", "Data Structures", "Algorithms"],
      link: {
        description: "Open GitHub repo",
        link: "https://github.com/kavinduchamiran/HackerRankSolutions"
      }
    },
    {
      title: "PostHarbor",
      description: "A safe and organized place for managing and posting social media content.",
      tags: ["Java", "Spring Boot", "Hibernate"],
      link: {
        description: "Open GitHub repo",
        link: "https://github.com/kavinduchamiran/PostHarbor"
      }
    },
    {
      title: "Enactor Deployment Portal",
      description: "An all-in-one dashboard to manage all your AWS deployments.",
      tags: ["Java", "ReactJS", "Python", "Terraform", "Ansible", "Docker", "Kubernetes"],
      link: {
        description: "Go to the app",
        link: "https://deploymentportal.enactor.co/"
      }
    },
    {
      title: "Enactor product migration to Kubernetes",
      description: "Getting Enactor Products to run seamlessly on Kubernetes.",
      tags: ["Docker", "Kubernetes", "AWS EKS"],
      link: {}
    },
    {
      title: "Col2Pedia",
      description: "Automating web table column annotation using supervised learning.",
      tags: ["Python", "Pandas", "TensorFlow"],
      link: {
        description: "Open GitHub repo",
        link: "https://github.com/kavinduchamiran/FinalYearProject"
      }
    },
    {
      title: "CloudL",
      description: "Online torrent downloader.",
      tags: ["Python", "NodeJS", "ReactJS"],
      link: {
        description: "Open GitLab repo",
        link: "https://gitlab.com/kavinduchamiran/cloudl"
      }
    },
    {
      title: "Zepto mobile app",
      description: "Native mobile apps for the Zepto BI web application.",
      tags: ["React Native", "NodeJS", "Google Cloud Platform"],
      link: {}
    },
    {
      title: "In-memory cache",
      description: "In memory caching layer for MongoDB.",
      tags: ["Python", "Redis", "MongoDB"],
      link: {}
    },
    {
      title: "Lyrics Editor for MuseScore",
      description: "A GUI lyrics viewer and editor for MuseScore.",
      tags: ["Qt", "C++"],
      link: {
        description: "Open GitHub repo",
        link: "https://github.com/kavinduchamiran/MuseScore"
      }
    },
    {
      title: "AccommodateMe",
      description: "Online marketplace for boarding places.",
      tags: ["Laravel", "PHP"],
      link: {
        description: "Open GitHub repo",
        link: "https://github.com/maneeshaindrachapa/AccommodateME"
      }
    }
  ]

  return (
    <section
      className="sm:w-[90%] mx-auto flex flex-col justify-center mt-8 gap-14 sm:gap-12"
      id="projects"
    >
      <h2 className="text-3xl font-bold text-center pt-4">{'//Projects'}</h2>

      <div className="max-w-4xl max-h-xl mx-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          {
            projects.map(({title, description, tags, link}, index) =>
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                key={index}
              >
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex gap-4 mb-4 flex-wrap">
                  {tags.map((tag, index2) => <Badge variant={'secondary'} key={index2}>{tag}</Badge>)}
                </div>
                {link && <a target="_blank _parent" href={link.link}
                            className="text-blue-500 hover:underline">{link.description}</a>}
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}

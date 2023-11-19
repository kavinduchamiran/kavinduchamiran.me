import {Badge} from './ui/badge';

export default function Blogs() {
  const articles = [
    {
      title: "My two cents on passing CKAD in 2022",
      description: "Tips and tricks that helped me to pass the exam with high score.",
      tags: ["Kubernetes", "CKAD"],
      link: "https://kavinduchamiran.medium.com/my-two-cents-on-passing-ckad-in-2022-ffbb7f1c65be"
    },
    {
      title: "Full MERN Stack App: 0 to deployment on Kubernetes — part 7",
      description: "Part 7 of my Kubernetes development series. Talks about how to connect persistent storage to your pods and deploy stateful apps.",
      tags: ["Kubernetes", "NodeJS", "ReactJS", "MongoDB", "Persistent Volumes"],
      link: "https://kavinduchamiran.medium.com/kubernetes-persistent-storage-e82f11fab99b"
    },
    {
      title: "Full MERN Stack App: 0 to deployment on Kubernetes — part 6",
      description: "In the sixth part, I talk about configuring health and readiness checks and auto-scaling for our pods.",
      tags: ["Kubernetes", "NodeJS", "ReactJS", "MongoDB", "Probes", "Auto scaling"],
      link: "https://kavinduchamiran.medium.com/kubernetes-health-readiness-autoscaling-af22df9f1c1d"
    },
    {
      title: "A simple sensor reader app with Kotlin",
      description: "I talk about creating a simple app to read sensor values on your Android.",
      tags: ["Android", "Kotlin"],
      link: "https://kavinduchamiran.medium.com/sensor-reader-kotlin-android-7b9fba2e20d9"
    },
    {
      title: "Full MERN Stack App: 0 to deployment on Kubernetes — part 5",
      description: "I talk about deploying our app on Kubernetes and using CI/CD pipelines for faster deployment.",
      tags: ["Kubernetes", "CI", "CD"],
      link: "https://kavinduchamiran.medium.com/full-mern-stack-app-0-to-deployment-on-kubernetes-part-5-baef995ac81a"
    },
    {
      title: "Full MERN Stack App: 0 to deployment on Kubernetes — part 4",
      description: "I talk about setting up a CI/CD pipeline for our project on GitLab.",
      tags: ["Kubernetes", "CI", "CD", "GitLab"],
      link: "https://faun.pub/full-mern-stack-app-0-to-deployment-on-kubernetes-part-4-5d58e20a6e6b"
    },
    {
      title: "Full MERN Stack App: 0 to deployment on Kubernetes — part 3",
      description: "I talk about containerizing our app with Docker and pushing the images Docker Hub.",
      tags: ["Kubernetes", "Docker", "Docker Hub"],
      link: "https://kavinduchamiran.medium.com/full-mern-stack-app-0-to-deployment-on-kubernetes-part-3-68e9af980b4c"
    },
    {
      title: "Full MERN Stack App: 0 to deployment on Kubernetes — part 2",
      description: "I talk about setting up a NodeJS backend with ExpressJS and SocketIO that is ready for containerization.",
      tags: ["Kubernetes", "NodeJS", "ExpressJS", "SockerIO"],
      link: "https://kavinduchamiran.medium.com/https-medium-com-kavinduchamiran-full-mern-stack-app-0-to-deployment-on-kubernetes-part-2-f0021e6e61e4"
    },
    {
      title: "Full MERN Stack App: 0 to deployment on Kubernetes — part 1",
      description: "First article of my Kubernetes development series. I will talk about setting up a React web app and a NodeJS backend.",
      tags: ["ReactJS", "NodeJS"],
      link: "https://kavinduchamiran.medium.com/full-mern-stack-app-0-to-deployment-on-kubernetes-part-1-e2f2a3e2fd99"
    },
    {
      title: "Speed up your machine learning with Google Cloud + TensorFlow + GPU",
      description: "A step by step guide to setup TensorFlow GPU version on Google Compute Engine and train your models on the cloud.",
      tags: ["Python", "TensorFlow", "Google Compute Engine", "GCP"],
      link: "https://kavinduchamiran.medium.com/speed-up-your-machine-learning-with-google-cloud-tensorflow-gpu-e8b8072bb06e"
    }
  ]

  return (
    <section
      className="sm:w-[90%] mx-auto flex flex-col justify-center mt-8 gap-14 sm:gap-12"
      id="blogs"
    >
      <h2 className="text-3xl font-bold text-center pt-4">{'//Blog posts'}</h2>

      <div className="max-w-4xl max-h-xl mx-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          {articles.map(({title, description, tags, link}, index) =>
            <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex gap-4 mb-4 flex-wrap">
                {tags.map((tag, index2) => <Badge variant={'secondary'} key={index2}>{tag}</Badge>)}
              </div>
              <a target="_blank _parent"
                 href={link}
                 className="text-blue-500 hover:underline">Open Medium article</a>
            </div>)}
        </div>
      </div>

    </section>
  );
}

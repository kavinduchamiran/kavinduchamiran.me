import {Button} from './ui/button';
import Image from "next/legacy/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-[90%] md:w-4/5 mx-auto h-full">
      <div className="flex flex-col items-center justify-evenly h-full">
        <div className="max-w-sm mx-auto  my-8 flex flex-col items-center">
          <div className="relative h-80 w-80 overflow-hidden">
            <Image
              src="/images/profile.png"  // Adjust the path to match your photo's location in the public folder
              alt="Your Name"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl text-center font-medium font-inter">
            Hello! <br/>
            <span
              className="inline-block bg-gradient-to-r from-secondary via-green-400 to-accent font-bold text-transparent bg-clip-text p-2 animate-gradient bg-300% text-4xl md:text-6xl lg:text-7xl">
             Welcome to my portfolio
            </span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5 m-2">
          <a href="mailto:kavindu.chamiran@gmail.com?subject=Hello%20Kavindu!">
            <Button
              className="min-w-[150px] rounded-xl">Contact
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/kavinduchamiran" rel="noopener noreferrer" target="_blank">
            <Button className="min-w-[150px] rounded-xl">LinkedIn</Button>
          </a>
          <a href="https://github.com/kavinduchamiran" rel="noopener noreferrer" target="_blank">
            <Button className="min-w-[150px] rounded-xl">GitHub</Button>
          </a>
          <Link href="/docs/cv.pdf">
            <Button variant={'link'} className="min-w-[150px] rounded-xl">
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

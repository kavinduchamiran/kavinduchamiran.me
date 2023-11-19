import {GithubIcon, Twitter} from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="min-h-[100px] bg-beige mt-10 w-full px-5 md:px-20 flex items-center justify-between rounded-t-2xl rounded-r-2xl">
      <h4 className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Page developed using Dynamic Island by Lucas Dash.
      </h4>
      <div className="flex justify-between gap-4 ">
        <div className="bg-primary text-white p-2 rounded-full sca">
          <a href={'https://twitter.com/spacecode_'} target="_blank">
            <Twitter/>
          </a>
        </div>
        <div className="bg-primary text-white p-2 rounded-full">
          <a href={'https://github.com/lucas-dash/Dynamic-Island'} target="_blank">
            <GithubIcon/>
          </a>
        </div>
      </div>
    </footer>
  );
};

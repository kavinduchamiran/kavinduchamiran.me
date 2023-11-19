import {Badge} from './ui/badge';

export default function Publications() {
  const publications = [
    {
      title: "Automating web Table Columns to Knowledge Base Mapping using Translation Embedding",
      description: "A novel method to find semantic meanings of structured data.",
      tags: ["Semantic Table Interpretation", "DBPedia", "Translation Embedding", "Supervised Learning"],
      link: "https://ieeexplore.ieee.org/document/9031447/"
    }
  ]

  return (
    <section
      className="sm:w-[90%] mx-auto flex flex-col justify-center mt-8 gap-14 sm:gap-12"
      id="publications"
    >
      <h2 className="text-3xl font-bold text-center pt-4">{'//Publications'}</h2>

      <div className="max-w-4xl max-h-xl mx-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          {publications.map(({title, description, tags, link}, index) =>
            <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex gap-4 mb-4 flex-wrap">
                {tags.map((tag, index2) => <Badge variant={'secondary'} key={index2}>{tag}</Badge>)}
              </div>
              <a target="_blank _parent"
                 href={link}
                 className="text-blue-500 hover:underline">Open publication</a>
            </div>)}
        </div>
      </div>

    </section>
  );
}

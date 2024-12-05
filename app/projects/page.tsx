import Image from "next/image"

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          My Projects
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Here are some of the projects I have worked on recently, showcasing my
          skills in development and design.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/project1.png"
              alt="Project 1"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Food Delivery Website
              </h3>
              <p className="text-gray-600 mb-4">
                This Is My Food Delivery Website Which I Made Using Next.js And
                Tailwind.CSS
              </p>
              <a
                href="https://class-assignment-3-two.vercel.app/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/project2.png"
              alt="Project 2"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Link.io
              </h3>
              <p className="text-gray-600 mb-4">
                This Is My Course Registration Website Which I Made Using Html &
                CSS
              </p>
              <a
                href="https://link-io-website.vercel.app/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/project3.png"
              alt="Project 3"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Dynamic Resume Maker
              </h3>
              <p className="text-gray-600 mb-4">
                This Is My Resume Maker Which I Made Using Html, CSS, Javascript
                & Typescript
              </p>
              <a
                href="https://dynamic-resume-maker.vercel.app/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

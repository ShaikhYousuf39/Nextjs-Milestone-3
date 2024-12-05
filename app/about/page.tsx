export default function About() {
    return(
        <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Hello! I’m Yousuf, an Web Developer & Graphics Designer. I bring
            expertise in HTML, CSS, Javascript, Typescript, Next.js, Adobe
            Illustrator And Adobe Photoshop and love creating seamless,
            user-focused experiences. I’m dedicated to crafting solutions that
            blend functionality with visual appeal.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-12 justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md mb-6 md:mb-0 w-full md:w-1/2 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Technical Skills
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <strong className="text-gray-800">
                    Programming Languages:
                  </strong>
                  JavaScript, TypeScript
                </li>
                <li>
                  <strong className="text-gray-800">
                    Frameworks & Libraries:
                  </strong>
                  React, Next.js, Tailwind CSS, Node.js.
                </li>
                <li>
                  <strong className="text-gray-800">
                    Tools & Technologies:
                  </strong>
                  VS Code, Figma, Git.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Design & Problem-Solving
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <strong className="text-gray-800">Tools:</strong>
                  Adobe Illustrator, Adobe Photoshop & Figma
                </li>
                <li>
                  <strong className="text-gray-800">Design:</strong>
                  Skilled in responsive and user-centered design, ensuring every
                  interaction is smooth and visually appealing.
                </li>
                <li>
                  <strong className="text-gray-800">User Experience:</strong>
                  Focused on creating intuitive and engaging experiences across
                  all devices and platforms.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mt-12 max-w-3xl mx-auto">
            I’m committed to continuous learning and innovation, always
            exploring new technologies to stay at the forefront of the field.
            Let’s connect to discuss how I can help bring your vision to life!
          </p>
        </div>
      </section>
    )
}
export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Contact Me
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Interested in working together or have any questions? Feel free to
          reach out!
        </p>

        <form className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400"
              placeholder="Ali Ahmed"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-gray-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

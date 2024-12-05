"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 items-center min-h-screen">
      <nav className="flex items-center justify-between p-6 bg-white shadow-lg">
        <div className="text-3xl font-bold tracking-wide">MyPortfolio</div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`md:flex space-x-8 text-lg transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/about"
              className="text-lg hover:text-gray-600 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg hover:text-gray-600 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-lg hover:text-gray-600 transition duration-300"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      <section
        id="home"
        className="md:flex items-center justify-around py-20 px-6"
      >
        <section className="flex flex-col items-center align-center text-center md:items-start md:text-left justify-center py-20">
          <h1 className="text-2xl md:text-6xl font-bold leading-tight tracking-tight">
            Hello, I’m Yousuf!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            I’m a passionate developer specializing in web development and
            graphic design. Let’s build something amazing together.
          </p>
          <div className="mt-8 flex flex-col md:flex-row">
            <Link
              href="https://github.com/ShaikhYousuf39"
              target="_blank"
              className="m-2 px-2 py-2 md:px-6 md:py-3 text-base bg-white text-gray-800 border-2 border-gray-800 rounded-full shadow hover:bg-gray-900 hover:text-white transition"
            >
              Visit GitHub Account
            </Link>
            <Link
              href="/resume.jpg"
              target="_blank"
              className="m-2 px-2 py-2 md:px-6 md:py-3 text-base bg-white text-gray-800 border-2 border-gray-800 rounded-full shadow hover:bg-gray-900 hover:text-white transition"
            >
              Download My Resume
            </Link>
          </div>
        </section>
        <div>
          <Image src="/man.png" alt="man" width={400} height={400} />
        </div>
      </section>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 text-lg">
          <Link href="/about" className="text-lg">
            About
          </Link>
          <Link href="/contact" className="text-lg">
            Contact
          </Link>
          <Link href="/projects" className="text-lg">
            Projects
          </Link>
        </ul>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-400">
              I&apos;m a passionate developer and designer with a focus on
              creating engaging user experiences. I love bringing ideas to life
              through code and design.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:yousufshaikh381@gmail.com"
                className="hover:text-white"
                aria-label="Send an email to Yousuf Shaikh"
              >
                yousufshaikh381@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a href="tel:+923158130073" className="hover:text-white">
                +92 315 8130073
              </a>
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com/in/yousuf-shaikh-691b7b2a3/"
                target="_blank"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.967 0-1.75-.788-1.75-1.732 0-.943.783-1.732 1.75-1.732s1.75.789 1.75 1.732c0 .944-.783 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.351-4-3.091-4 0v5.604h-3v-11h3v1.722c1.396-2.586 7-2.777 7 2.476v6.802z" />
                </svg>
              </a>
              <a
                href="https://github.com/ShaikhYousuf39"
                target="_blank"
                className="text-gray-400 hover:text-white"
                aria-label="GitHub Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.416-4.042-1.416-.546-1.385-1.332-1.753-1.332-1.753-1.087-.743.084-.729.084-.729 1.205.084 1.84 1.235 1.84 1.235 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.241 2.873.117 3.176.766.84 1.235 1.911 1.235 3.221 0 4.616-2.805 5.626-5.482 5.918.43.369.815 1.095.815 2.209 0 1.595-.015 2.878-.015 3.264 0 .319.219.69.825.576 4.772-1.588 8.205-6.084 8.205-11.387 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/YourFacebookProfile"
                target="_blank"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.922 0-1.675.753-1.675 1.675v20.65c0 .922.753 1.675 1.675 1.675h11.458v-9.206h-3.09v-3.622h3.09v-2.671c0-3.045 1.793-4.705 4.586-4.705 1.333 0 2.488.099 2.81.142v3.354h-1.587c-1.243 0-1.648.62-1.648 1.572v2.455h3.295l-.426 3.622h-2.869v9.206h5.654c.922 0 1.675-.753 1.675-1.675v-20.65c0-.922-.753-1.675-1.675-1.675z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

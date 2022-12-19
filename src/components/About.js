import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Anunay Kumar.

            {/* replace this with react typing animation */}
            {/* <br className="hidden lg:inline-block" />I love to build amazing
            apps. */}
          </h1>
          <TypeAnimation
            sequence={[
              "I am an ML Expert", 1500,
              "I am a Full Stack Developer", 1500,
              "I am a Data Scientist", 1500,
              "I am a Leader", 1500,
              "I am a Problem Solver", 1500,
              "I am a Public Speaker", 1500,
              "I am a Passionate Learner", 1500,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: '2em' }}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
          <p className="mb-8 leading-relaxed">
            Engineering is my passion. I am a quick learner with strong interpersonal skills and excellent leadership traits. Armed with in-depth knowledge
            of Machine Learning, Data Science, Full Stack Development, and embedded systems development, I am ready to take on any challenge.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-emphasis-blue border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                isDynamic={true}
              >
                Work with Me
              </Link>
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <Link
                activeClass="active"
                to="workexp"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                See My Past Work
              </Link>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./personal_headshot.jpg"
          />
        </div>
      </div>
    </section>
  );
}

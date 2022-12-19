import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import resume from './../assets/Resume_Kumar_hardware copy.pdf';

{/*
  Navbar component
  - Uses react-scroll to scroll to different sections of the page
  - When width is less than 768px, the navbar is hidden (collapsed) into a hamburger menu
  - Navbar is sticky and will always be at the top of the page in normal view. When in mobile view, navbar is collapsed
*/}

// export default function Navbar() {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const handleToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   {/* use the same styles as the tailwind classes below */}
//   return (
//     <nav className="bg-gray-800 md:sticky top-0 z-10">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl hover:text-blue-400" >
//           <Link

//             activeClass="active"
//             to="about"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={1000}
//           >
//             Anunay Kumar
//           </Link>
//         </a>
//         <button

//           className="md:hidden text-white ml-auto hover:text-blue-400 outline-none focus:outline-none"
//           type="button"
//           onClick={handleToggle}
//         >
//           <svg

//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path

//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={isCollapsed ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
//             />
//           </svg>
//         </button>
//         <div className={`${isCollapsed ? "hidden" : "flex"} md:flex md:items-center md:w-auto w-full`}>
//           <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">

//             <a className="mr-5 hover:text-white">
//               <Link
//                 activeClass="active"
//                 to="skills"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={1000}
//               >

//                 Skills
//               </Link>
//             </a>

//             <a className="mr-5 hover:text-white">
//               <Link

//                 activeClass="active"
//                 to="projects"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={1000}
//               >
//                 Past Work
//               </Link>
//             </a>

//             <a className="mr-5 hover:text-white">
//               <Link
//                 activeClass="active"
//                 to="workexp"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={1000}
//               >
//                 Work Experience
//               </Link>
//             </a>
//           </nav>
//           <a

//             className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
//             Resume
//             <ArrowRightIcon className="w-4 h-4 ml-1" />
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }


















export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl hover:text-blue-400" >
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Anunay Kumar
          </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          {/* <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>  */}
          {/* <a className="mr-5 hover:text-white">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Past Work
            </Link>
          </a> */}
          <a className="mr-5 hover:text-white" >
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Skills
            </Link>
          </a>
          <a className="mr-5 hover:text-white" >
            <Link
              activeClass="active"
              to="workexp"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Work Experience
            </Link>
          </a>
          {/* resume */}
          <a className="mr-5 hover:text-white" 
            href={resume} 
            target="_blank"
            title="My Resume"
            >
            Resume
            </a>

        </nav>
        <a

          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            isDynamic={true}
          >
            Hire Me
          </Link>
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
    // </div>
  )

}









// // export default function Navbar() {
// {/*
//   return (
//     <header className="bg-gray-800  top-0 z-10">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="title-font font-medium text-white mb-4 md:mb-0">
//           <a href="#about" className="ml-3 text-xl">
//             Anunay Kumar
//           </a>
//         </a>
//         <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
//           {/* <a href="#projects" className="mr-5 hover:text-white">
//             Past Work
//           </a> 
//           <a href="#skills" className="mr-5 hover:text-white">
//             Skills
//           </a>
//           <a href="#workexp" className="mr-5 hover:text-white">
//             Work Experience
//           </a>
//         </nav>
//         <a
//           href="#contact"
//           className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
//           Hire Me
//           <ArrowRightIcon className="w-4 h-4 ml-1" />
//         </a>
//       </div>
//     </header>
//   );
// */}


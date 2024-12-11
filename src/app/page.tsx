import Image from "next/image";
import StackIcon from "tech-stack-icons";

export default function Home() {
  return (
    <>
      <section id="navBar" className="bg-inherit flex text-left font-bold">
        <a className="bg-teal text-mindaro mt-8 mr-1 w-44 h-10 rounded-t-lg pt-2 pl-4 underline">
          ABOUT
        </a>
        <a
          href="/projects"
          className="bg-cocoa_brown mt-10 mx-1 w-44 rounded-t-lg pt-2 underline pl-4"
        >
          PROJECTS
        </a>
        <a
          href="/contact"
          className="bg-cocoa_brown mt-10 mx-1 w-44 rounded-t-lg pt-2 underline pl-4"
        >
          CONTACT
        </a>
        <a
          href="/resume"
          className="bg-cocoa_brown mt-10 mx-1 w-44 rounded-t-lg pt-2 underline pl-4"
        >
          RESUME
        </a>
      </section>
      <main className="bg-teal h-[100vh] flex flex-col items-center">
        <h1 className="text-white text-5xl font-extralight italic underline pt-16">
          Derrick Maurais
        </h1>
        <div className="text-gray-700 w-1/2 mt-4 text-justify flex flex-col items-center italic font-extralight">
          <div className="h-8 flex justify-between w-100% my-5">
            
            <StackIcon name="html5" />
            <StackIcon name="css3" />
            <StackIcon name="js" />
            <StackIcon name="reactjs" />
            <StackIcon name="csharp" />
            <StackIcon name="java" />
            <StackIcon name="bootstrap5" />
            <StackIcon name="tailwindcss" />
            <StackIcon name="git" />
            <StackIcon name="mysql" />
            <StackIcon name="mongodb" />
           
    
            
          </div>
          <p className="mb-2">
            <strong className="text-lg not-italic underline">Full-Stack Web Development Expertise</strong> - Skilled in
            front-end and back-end technologies, including React, Next.js,
            Tailwind CSS, ASP.NET Core, PHP, and MySQL. Proficient in building
            responsive and dynamic web applications.
          </p>
          <p className="mb-2">
            <strong className="text-lg not-italic underline">Collaborative Problem-Solver</strong> - Strong teamwork and
            communication skills, honed through group projects, professional
            interactions and 18 years of experience in the culinary industry.
            Adept at using tools like Git for project coordination and
            collaborative work.
          </p>
          <p>
            <strong className="text-lg not-italic underline">IT Student Nearing Graduation</strong>- Completing a
            two-year Web Development program at NSCC Truro, preparing for a
            career in software / web development. Focused on securing
            employment in web development or a related field in Spring 2025.
          </p>
        </div>
      </main>
    </>
  );
}

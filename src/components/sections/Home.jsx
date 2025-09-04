import { RevealOnScroll } from "../RevealOnScroll";
import Lanyard from "../Landyard";
import ProfileCard from "@/components/ProfileCard";

export const Home = () => {
  return (
    <RevealOnScroll>
      <div
        id="home"
        className="min-h-screen flex items-center justify-center relative px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
          {/* Left side: intro */}
          <div className="text-left md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Hi, I'm Imani.
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md ">
              I’m from Rochester Hills, MI, and I’m a senior honors student at
              North Carolina A&T State University, majoring in Computer Science
              with a minor in Applied Mathematics. I’ve gained hands-on
              experience as a Software and Cloud Cybersecurity Intern at Ford. I also serve as a Java Teaching
              Assistant, combining technical expertise with teaching experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contacts"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
          {/* Right side: Lanyard */}
          <div className="md:w-1/2 min-h-[500px]">
            <ProfileCard
              name="Imani Dinkins"
              title="Computer Scientist"
              handle="izdinkins"
              status="Online"
              contactText="Contact Me"
              avatarUrl="IDHR.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                document.getElementById("contacts")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

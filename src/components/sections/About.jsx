import { RevealOnScroll } from "../RevealOnScroll";
import LogoLoop from "../LogoLoop";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPodman,
  SiDocker,
  SiJira,
  SiMysql,
  SiGithub,
  SiR,
  SiHtml5,
  SiFirebase,
  SiPython,
  SiLatex,
} from "react-icons/si";

const techLogos = [
    // Google Cloud Platform, Java, Latex  
  {node: <SiReact />, title: "React", href: "https://react.dev" },
  {node:<SiNodedotjs />, title: "NodeJS", href:""},
  {node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org",},
  {node: <SiTailwindcss />,title: "Tailwind CSS",href: "https://tailwindcss.com",},
  {node:<SiJavascript />, title: "Javascript", href:""},
  {node:<SiPodman/>, title: "Podman", href:""},
  {node:<SiDocker/>, title: "Docket", href:""},
  {node:<SiJira />, title: "Jira", href:""},
  {node:<SiMysql />, title: "MySql", href:""},
  {node:<SiGithub />, title: "GitHub", href:""},
  {node:<SiR />, title: "Rcode", href:""},
  {node:<SiHtml5 />, title: "Html", href:""},
  {node:<SiFirebase />, title: "Firebase", href:""},
  {node:<SiPython />, title: "Python", href:""},
  {node:<SiLatex />, title: "LaTex", href:""}
  
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer skilled in crafting scalable applications and innovative solutions, powered by the following technologies:
            </p>

            <div className="mt-8">
              <LogoLoop
                logos={techLogos}
                speed={50}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                // fadeOut
                // fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12">
            {/* Education Box */}
            <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-6 text-white">
                {" "}
                🏫 Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-4">
                <li>
                  <strong>B.S in Computer Science</strong> - <span className="italic"> Tennessee State
                  University (2022-2024) </span>
                </li>
                <li>
                  <strong>
                  B.S. in Computer Science, Minor in Applied Mathematics
                  </strong> - 
                  <span className="italic">North Carolina A&T State University (2024-2027)</span>
                </li>
              </ul>
            </div>

            {/* Work Experience Box */}
            <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-6 text-white">
                {" "}
                👩🏽‍💻 Work Experience
              </h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white">
                    Cloud Cybersecurity Intern at Ford Motor Company

                  </h4>
                  <p className="text-gray-400 text-sm">
                    June 2025 - August 2025
                  </p>
                  <p className="mt-2">
                    <ul className="list-disc list-inside space-y-2">
                    <li>
                    Designed and deployed an <span className="font-bold text-blue-400">automated reporting bot </span>that delivers Azure Front Door and Application Gateway metrics to Microsoft Teams daily, completed within <span className="font-bold text-blue-400">one month </span>using BigQuery, Cloud Scheduler, Terraform, and Cloud Run
                    </li>
                    <li>
                    Led monitoring and security initiatives in <span className="font-bold text-blue-400">Google Cloud Platform</span> by managing VPC-SC tickets, enforcing geo-blocking on <span className="font-bold text-blue-400">85 applications</span>, and engineering custom detectors with <span className="font-bold text-blue-400"> Google SecOps </span> to identify unsecured service accounts. 
                    </li>
                    <li>
                    Strengthened enterprise-wide security at Ford by enforcing policies that reduced vulnerabilities, mitigated risks, and ensured regulatory compliance. 
                    </li>
                    </ul>
</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Software Engineer Intern at Ford Motor Company
                  </h4>
                  <p className="text-gray-400 text-sm">
                    June 2024 - August 2024
                  </p>
                  <p className="mt-2">
                    <ul className="list-disc list-inside space-y-2">
                    <li>
                    Migrated the Call Center website from <span className="font-bold text-blue-400">SharePoint/Emplifi</span> to Google Cloud Platform with Drupal, using <span className="font-bold text-blue-400"> ReactJS </span> and <span className="font-bold text-blue-400"> TypeScript </span> to ensure stability and accessibility.
                    </li>
                    <li>
                    Built custom components and collaborated with a <span className="font-bold text-blue-400"> 5-member </span> intern team to deliver a streamlined, user-friendly interface that enhanced navigation and overall user experience.
                    </li>
                    </ul>
 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                💧 Predicting Molecular Solubility (LogS)
              </h3>
              <p className="text-gray-400 mb-4">
                {" "}
                My first machine learning project predicting the solubility
                (LogS) of chemical compounds using molecular descriptors. Built
                in Google Colab with Python, this project compares Linear
                Regression and Random Forest models.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Python",
                  "Pandas",
                  "Scikit-learn",
                  "NumPy",
                  "Matplotlib",
                  "Google Colab",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all
                            "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                <li>
                  📊 Dataset: Delaney solubility dataset (Data Professor GitHub)
                </li>
                <li>🧪 Models: Linear Regression & Random Forest</li>
                <li>📈 Metrics: Mean Squared Error (MSE) & R²</li>
                <li>🚀 Future: Add XGBoost + hyperparameter tuning</li>
              </ul>

              {/*Github Button */}
              <div className="flex justify-between items-center">
                {/*link to project */}
                <a
                  href="https://github.com/izdinkins/MachineLearning-SolubilityPredication"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {" "}
                  🔗 View on Github{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">💼 The Personal Portal</h3>
              <p className="text-gray-400 mb-4">
                A React-based web app built for a hackathon that leverages AI to
                analyze resumes and generate tailored employee summaries. It
                visualizes performance data in an intuitive card-swiping
                interface, complete with progress bars, summaries, and a PDF
                export feature.{" "}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Tailwind CSS",
                  "Lucide Icons",
                  "jsPDF",
                  "OpenAI API",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all
                            "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="text-gray-400 text-sm list-disc list-inside space-y-1 mt-4">
                <li>
                  📄 Resume Analysis – AI extracts skills, strengths, and role
                  insights
                </li>
                <li>
                  📊 Employee Summary Cards – Swipeable with progress bars
                </li>
                <li>
                  📈 AI-Generated Summaries – Quick human-readable insights
                </li>
                <li>📤 PDF Export – Save analysis as shareable reports</li>
                <li>🌐 Dynamic JSON Loading – Fetch mock employee data</li>
              </ul>

              <div className="flex justify-between items-center">
                {/*Github Button */}
                <a
                  href="https://github.com/izdinkins/Cheveron-Personal-Portal-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  🔗 View on Github{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">🔐 LoginForm</h3>
              <p className="text-gray-400 mb-4">
                {" "}
                A simple C++ command-line login system that allows users to Sign
                Up, Log In, and Recover Passwords. User credentials are securely
                (but not encrypted) stored in a local file using basic file I/O.
                Built in CLion for educational purposes.{" "}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "C++",
                  "File I/O (fstream)",
                  "Standard Input/Output",
                  "CLion",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all
                            "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="text-gray-400 text-sm list-disc list-inside space-y-1 mb-4">
                <li>🔑 Login with username and password</li>
                <li>📝 Sign-Up to register a new account</li>
                <li>🔐 Forgot Password recovery via username & email</li>
                <li>
                  💾 Stores credentials in a local <code>loginData.txt</code>{" "}
                  file
                </li>
              </ul>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/izdinkins/LoginForm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  🔗 View on Github{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                📚 Student Course Management System
              </h3>
              <p className="text-gray-400 mb-4">
                A simple course management system built with Python and MySQL.
                Students can view and drop classes, while managers can be
                extended to handle administrative tasks. Designed as a
                lightweight CLI-based project for managing student enrollments.{" "}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "MySQL", "File I/O", "CLI Application"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all
                            "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <ul className="text-gray-400 text-sm list-disc list-inside space-y-1 mb-4">
                <li>🔑 Login system with student and manager roles</li>
                <li>📄 Student Menu – View and drop enrolled classes</li>
                <li>🗂 Manager Menu – Extendable for admin tasks</li>
                <li>
                  🔐 <code>AuthenticateDB.py</code> – Handles database
                  connection & credentials
                </li>
                <li>
                  📁 Modular design with <code>Student.py</code>,{" "}
                  <code>AuthenticateApp.py</code>, and documentation
                </li>
              </ul>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/izdinkins/Database-Final"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  🔗 View on Github{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/izdinkins"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
              hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
              transition-all"
            >
              🌐 See All Projects on GitHub
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

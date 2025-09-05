import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

import { FaPhone } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_u03non3";
  const TEMPLATE_ID = "template_u5832t7";
  const PUBLIC_KEY = "oiKew1WuTKnIecStC";

  const handleSumbit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error: ", error);
        alert("Oops something went wrong. ");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section
      id="contacts"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Let's discuss about the next project or just say hello!
          </p>

          <div className="flex flex-col lg:flex-row lg:justify-center gap-8">
            {/* lets connect box */}
            {/* <div className="flex-1 bg-gray-800/30 border border-gray-700/50 rounded-lg p-8 shadow-lg"> */}
            <div className="lg:basis-[48%] w-full bg-gray-800/30 border border-gray-700/50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center gap-3">
                  {/*change this to real icons that link to github */}
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  imanidinkins22@gmail.com
                </p>
                <p className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <FaPhone />
                  </svg>
                  248-895-9662
                </p>
                <p className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Greensboro, NC & Rochester Hills, MI{" "}
                </p>
              </div>
              {/* social media icons */}
              <div className="mt-8 flex gap-4 text-gray-400">
                <a
                  href="https://www.linkedin.com/in/imani-dinkins/"
                  target="_blank"
                  rel="noopener norefferer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {/* LinkedIn icon path */}
                    <FaLinkedin />
                  </svg>
                </a>
                <a
                  href="https://github.com/izdinkins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {/* GitHub icon path */}
                    <VscGithub className="w-20 h-20" />
                  </svg>
                </a>
                <a
                  href="imanidinkins22@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {/* Email icon path */}
                  </svg>
                </a>
              </div>
            </div>
            {/* send me a amessage box */}
            {/* <div className="flex-1 bg-gray-800/30 border border-gray-700/50 rounded-lg p-8 shadow-lg"> */}
            <div className="lg:basis-[48%] w-full bg-gray-800/30 border border-gray-700/50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Send Me a message
              </h3>
              <form className="space-y-6" onSubmit={handleSumbit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus: outline-none focus: border-blue-500 focus:bg-blue-500/5"
                    placeholder="Name..."
                    onChange={handleChange}
                    // onChange={(e) => setFormData((...formData,name: e.target.value))}
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus: outline-none focus: border-blue-500 focus:bg-blue-500/5"
                    placeholder="example@gmail.com"
                    onChange={handleChange}

                    // onChange={(e) => setFormData((...formData,email: e.target.value))}
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus: outline-none focus: border-blue-500 focus:bg-blue-500/5"
                    placeholder="Your message..."
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="sumbit"
                  className="w-full bg-blue-500 text-white py-3 px-6 roudned font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

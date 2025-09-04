import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

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
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l1.3 9.1A1 1 0 018.67 15H17a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V3z"></path>
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
                  Greensboro, NC & Rochester Hills,MI{" "}
                </p>
              </div>
              {/* social media icons */}
              <div className="mt-8 flex gap-4 text-gray-400">
                <a
                  href="#"
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
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
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
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.163 6.839 9.48.5.09.682-.217.682-.483 0-.237-.008-.867-.013-1.7C6.712 19.823 6.136 18.665 6.136 18.665c-.477-1.213-1.164-1.539-1.164-1.539-.95-.648.072-.636.072-.636 1.05.074 1.602 1.077 1.602 1.077.933 1.601 2.446 1.139 3.03.87.095-.678.367-1.139.667-1.39-2.32-.266-4.752-1.16-4.752-5.163 0-1.139.406-2.07.994-2.8-.1-.266-.43-1.32.094-2.74C5.07 10.237 5.79 11.239 6 11.5c1-.266 2-.31 3-.198.05-.27.182-.51.346-.723-2.193-.266-3.957-2.22-3.957-4.485 0-1.637 1.084-3.003 2.656-3.41.05-.11.08-.22.11-.33.25-.79.846-1.393 1.688-1.722-.57-.146-1.1-.22-1.636-.22-2.128 0-4.162 1.07-5.32 2.82C3.12 6.84 2 9.29 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C22 6.477 17.523 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
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
                    <path
                      fillRule="evenodd"
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      clipRule="evenodd"
                    />
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

                    // onChange={(e) => setFormData((...formData,message: e.target.value))}
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

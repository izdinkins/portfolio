// ResumePage.jsx
import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

const Resume = () => {
  return (
    <RevealOnScroll>
    <div
      id="Resume"
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      <h1 className="text-4xl font-bold text-white mb-6">My Resume</h1>

      <iframe
        src="/ImaniDinkins_Resume_Fall2025_Online.pdf"
        title="Resume"
        className="w-full max-w-4xl h-[800px] border border-gray-700 rounded"
      ></iframe>
    </div>
    </RevealOnScroll>
  );
};

export default Resume;

import React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubSection = () => {
  return (
    <section id="github" className="bg-zinc-800 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Explore My GitHub</h2>
        <p className="text-lg text-gray-400 mb-8">
          Check out my open-source projects, contributions, and collaborative work on GitHub.
          I actively push code and work on personal & community-driven projects.
        </p>

        <a
          href="https://github.com/siddharthk004"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-600 px-6 py-3 text-lg font-semibold rounded-full hover:bg-zinc-700 transition"
        >
          <FaGithub className="text-2xl" />
          View My GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default GitHubSection;

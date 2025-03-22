import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me | Developer Portfolio",
  description: "Learn more about my background, skills, and experience as a software developer.",
  openGraph: {
    title: "About Me | Developer Portfolio",
    description: "Learn more about my background, skills, and experience as a software developer.",
    type: "website",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-20 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Software developer passionate about creating elegant solutions to complex problems
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Photo Section */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src="/profile-placeholder.jpg"
                alt="Profile Photo"
                fill
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover"
                priority
                quality={90}
              />
            </div>
          </div>

          {/* About Section */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Background
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Hello! I'm a passionate software developer with a strong foundation in web development
                  and a keen interest in building user-friendly applications. My journey in technology
                  began with a curiosity about how digital products work, which led me to pursue formal
                  education in computer science.
                </p>
                <p>
                  With several years of experience in the industry, I've had the opportunity to work
                  on diverse projects ranging from e-commerce platforms to data visualization tools.
                  I thrive in collaborative environments and enjoy solving complex problems through
                  clean, efficient code.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to
                  open-source projects, or sharing my knowledge through technical writing and mentorship.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Frontend Development
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>React.js & Next.js</li>
                    <li>TypeScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>Tailwind CSS</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Backend Development
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Tools & Practices
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Git & GitHub</li>
                    <li>CI/CD Pipelines</li>
                    <li>Test-Driven Development</li>
                    <li>Agile Methodologies</li>
                    <li>Docker</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Other Skills
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>UI/UX Design Principles</li>
                    <li>Performance Optimization</li>
                    <li>Accessibility (WCAG)</li>
                    <li>Technical Writing</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Education & Experience */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education & Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Senior Frontend Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Tech Innovations Inc. | 2021 - Present</p>
              <p className="text-gray-700 dark:text-gray-300">
                Leading frontend development for enterprise applications, mentoring junior developers,
                and implementing modern web technologies to improve user experience.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Digital Solutions Co. | 2018 - 2021</p>
              <p className="text-gray-700 dark:text-gray-300">
                Developed and maintained web applications using React, Node.js, and MongoDB.
                Collaborated with design and product teams to deliver high-quality software solutions.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">University of Technology | 2014 - 2018</p>
              <p className="text-gray-700 dark:text-gray-300">
                Graduated with honors. Specialized in web development and software engineering.
                Completed a capstone project on real-time data visualization.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Contact me"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  );
}

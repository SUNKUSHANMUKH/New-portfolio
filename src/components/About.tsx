import React from 'react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 items-center">
          <div className="space-y-4">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Full Stack Developer with lots of experience building scalable web
              applications. Passionate about clean code and user-centric design.
              Software Developer with proficiency in C, Python, and Java,
              specializing in front-end development. Strong expertise in
              building responsive and dynamic web interfaces using HTML, CSS,
              and Bootstrap. Adept at transforming design concepts into
              user-friendly web applications whileensuring seamless integration
              with SQL databases and DBMS systems. Experienced in using tools
              like Power BI for effective data visualization. Committed to
              continuous learning, problem-solving, and delivering
              highperformance front-end solutions that enhance user experience
              and drive innovation in development.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I specialize in modern JavaScript frameworks like React and
              Node.js, with a strong foundation in responsive design principles
              and performance optimization.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              When I'm not coding, you might find me hiking, reading sci-fi
              novels, or exploring new coffee shops in the city.
            </p>

            <div className="pt-4">
              <a
                href={
                  'https://drive.google.com/file/d/1hbjoXxPrgh_QnwjsqjfIpruxbpKTFXHx/view?usp=sharing'
                }
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                10+
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Projects Completed
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                2+
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Years Experience
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                5+
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Technologies</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                15+
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Skills Level</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

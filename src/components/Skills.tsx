import React from 'react';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career. 
            Here's a snapshot of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                {category.name}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%`, transform: 'translateX(-100%)', animation: 'slideRight 1.5s forwards' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <style>{`
          @keyframes slideRight {
            to {
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
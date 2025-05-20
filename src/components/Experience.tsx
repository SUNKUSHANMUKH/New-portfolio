import React from 'react';
import { experienceData, educationData } from '../data/experienceData';
import TimelineItem from './TimelineItem';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              Work Experience
            </h3>
            <div className="space-y-12 relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800/50"></div>
              {experienceData.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  organization={item.company}
                  duration={item.duration}
                  description={item.description}
                  isFirst={index === 0}
                  isLast={index === experienceData.length - 1}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              Education
            </h3>
            <div className="space-y-12 relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800/50"></div>
              {educationData.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.degree}
                  organization={item.institution}
                  duration={item.duration}
                  description={item.description}
                  isFirst={index === 0}
                  isLast={index === educationData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

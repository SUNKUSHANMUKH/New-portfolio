import React from 'react';

interface TimelineItemProps {
  title: string;
  organization: string;
  duration: string;
  description: string;
  isFirst: boolean;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  organization,
  duration,
  description,
  isFirst,
  isLast,
}) => {
  return (
    <div className="pl-12 relative">
      <div className="absolute left-0 top-1.5 w-9 h-9 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center z-10">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-bold mb-1">{title}</h4>
        <div className="flex flex-col sm:flex-row sm:items-center text-slate-600 dark:text-slate-400 mb-3">
          <span className="font-medium">{organization}</span>
          <span className="hidden sm:block mx-2">•</span>
          <span>{duration}</span>
        </div>
        <p className="text-slate-700 dark:text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
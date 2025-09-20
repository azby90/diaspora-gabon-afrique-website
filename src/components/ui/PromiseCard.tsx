import React from 'react';
import { Promise } from '@/types';

interface PromiseCardProps {
  promise: Promise;
}

const PromiseCard: React.FC<PromiseCardProps> = ({ promise }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-6 bg-primary-50 rounded-full flex items-center justify-center">
          <span className="text-3xl" role="img" aria-label={promise.title}>
            {promise.icon}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-primary mb-4">
          {promise.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {promise.description}
        </p>
      </div>
    </div>
  );
};

export default PromiseCard;
import React from 'react';
import { type TechItem } from './TechCard';

interface SelectedStackProps {
  selectedTechs: TechItem[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const SelectedStack: React.FC<SelectedStackProps> = ({
  selectedTechs,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <div className='bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-24'>
      <h3 className='text-lg font-bold text-gray-900 mb-1'>Your Stack</h3>
      <p className='text-sm text-gray-500 mb-6'>
        {selectedTechs.length}{' '}
        {selectedTechs.length === 1 ? 'technology' : 'technologies'} selected
      </p>

      {selectedTechs.length === 0 ? (
        <div className='border-2 border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm'>
          Your stack is empty.
        </div>
      ) : (
        <div className='flex flex-col gap-3'>
          {selectedTechs.map((tech) => (
            <div
              key={tech.id}
              className='flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100'
            >
              <div className='flex items-center gap-3'>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className='w-6 h-6 object-contain'
                />
                <span className='font-semibold text-sm text-gray-800'>
                  {tech.name}
                </span>
              </div>
              <button
                type='button'
                onClick={() => onRemove(tech.id)}
                className='text-gray-400 hover:text-red-500 transition-colors'
                aria-label={`Remove ${tech.name}`}
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type='button'
            onClick={onRemoveAll}
            className='mt-4 w-full py-2.5 rounded-lg font-semibold text-sm text-red-500 border border-red-200 hover:bg-red-50 transition-colors duration-200'
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedStack;

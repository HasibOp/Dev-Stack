import React from 'react';

export interface TechItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge?: string;
  category: string;
  difficulty: string;
  rating: number;
}

interface TechCardProps {
  tech: TechItem;
  onAdd: (tech: TechItem) => void;
  isSelected: boolean;
}

const TechCard: React.FC<TechCardProps> = ({ tech, onAdd, isSelected }) => {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Essential':
        return 'bg-blue-50 text-blue-600';
      case 'Popular':
        return 'bg-purple-50 text-purple-600';
      case 'Trending':
        return 'bg-green-50 text-green-600';
      case 'Powerful':
        return 'bg-orange-50 text-orange-600';
      case 'Fast Setup':
        return 'bg-teal-50 text-teal-600';
      case 'Fast':
        return 'bg-yellow-50 text-yellow-600';
      case 'Enterprise':
        return 'bg-indigo-50 text-indigo-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className='bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full'>
      <div className='flex justify-between items-start mb-4'>
        <img
          src={tech.icon}
          alt={tech.name}
          className='w-10 h-10 object-contain'
        />
        {tech.badge && (
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${getBadgeColor(tech.badge)}`}
          >
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className='text-xl font-bold text-gray-900 mb-2'>{tech.name}</h3>
      <p className='text-gray-500 text-sm mb-6 grow'>{tech.description}</p>

      <div className='flex flex-wrap gap-2 mb-6 text-xs font-medium'>
        <span className='px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100'>
          {tech.category}
        </span>
        <span className='px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100'>
          {tech.difficulty}
        </span>
        <span className='px-2.5 py-1 rounded-md text-orange-500 bg-orange-50 flex items-center gap-1'>
          ★ {tech.rating}
        </span>
      </div>

      <button
        type='button'
        onClick={() => onAdd(tech)}
        disabled={isSelected}
        className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 ${
          isSelected
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isSelected ? 'Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;

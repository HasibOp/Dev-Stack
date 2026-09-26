import React, { useState, useEffect } from 'react';
import TechCard, { type TechItem } from './TechCard';
import SelectedStack from './SelectedStack';

const TechStackSection = () => {
  const [techs, setTechs] = useState<TechItem[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<TechItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setTechs(data))
      .catch((err) => console.error('Error fetching tech data:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddTech = (tech: TechItem) => {
    if (!selectedTechs.find((t) => t.id === tech.id)) {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const handleRemoveTech = (id: string) => {
    setSelectedTechs(selectedTechs.filter((t) => t.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };

  return (
    <section className='w-full bg-gray-50 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <h2 className='text-3xl font-extrabold text-gray-900 mb-2'>
            Explore the{' '}
            <span className='text-brand-gradient'>Technologies</span>
          </h2>
          <p className='text-gray-500'>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-start'>
          <div className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {loading ? (
              <div className='col-span-full flex justify-center py-20 text-gray-500 font-medium'>
                Loading technologies...
              </div>
            ) : (
              techs.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAdd={handleAddTech}
                  isSelected={selectedTechs.some((t) => t.id === tech.id)}
                />
              ))
            )}
          </div>

          <div className='lg:col-span-1'>
            <SelectedStack
              selectedTechs={selectedTechs}
              onRemove={handleRemoveTech}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className='w-full bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center'>
          <div className='flex flex-col space-y-6 md:pr-8'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 max-w-xl'>
              Build Your Ideal{' '}
              <span className='text-brand-gradient'>Development Stack</span>
            </h1>

            <p className='text-lg text-gray-500 max-w-lg leading-relaxed'>
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                type='button'
                className='px-8 py-3.5 rounded-lg font-semibold text-white brand-gradient hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              >
                Explore Technologies
              </button>

              <button
                type='button'
                className='px-8 py-3.5 rounded-lg font-semibold text-gray-700 bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 shadow-sm'
              >
                Learn More
              </button>
            </div>
          </div>

          <div className='relative flex justify-center items-center'>
            <img
              src={heroImg}
              alt='3D Development Stack Illustration'
              className='w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

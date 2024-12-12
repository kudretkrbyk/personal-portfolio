import { useState, memo } from 'react';
import LazyImage from './LazyImage';

const ProjectCard = memo(({ project }) => (
  <div className="card group overflow-hidden">
    <div className="relative overflow-hidden rounded-lg">
      <LazyImage
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={project.link}
          className="text-white text-lg font-semibold hover:underline"
        >
          Detayları Gör
        </a>
      </div>
    </div>
    <div className="pt-4">
      <h3 className="text-xl font-bold text-white mb-2">
        {project.title}
      </h3>
      <p className="text-body-color">{project.category}</p>
    </div>
  </div>
));

const FilterButton = memo(({ filter, activeFilter, onClick }) => (
  <button
    onClick={() => onClick(filter)}
    className={`px-6 py-2 rounded-full border border-border-color transition-all duration-300
      ${
        activeFilter === filter
          ? 'bg-primary text-white'
          : 'text-body-color hover:text-white'
      }`}
  >
    {filter}
  </button>
));

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const filters = ['Tümü', 'Web', 'Mobil', 'UI/UX'];

  const projects = [
    {
      title: 'E-Ticaret Platformu',
      category: 'Web',
      image: '/portfolio/project1.jpg',
      link: '#',
    },
    {
      title: 'Mobil Uygulama',
      category: 'Mobil',
      image: '/portfolio/project2.jpg',
      link: '#',
    },
    {
      title: 'UI/UX Tasarım',
      category: 'UI/UX',
      image: '/portfolio/project3.jpg',
      link: '#',
    },
    {
      title: 'Blog Platformu',
      category: 'Web',
      image: '/portfolio/project4.jpg',
      link: '#',
    },
    {
      title: 'Kurumsal Website',
      category: 'Web',
      image: '/portfolio/project5.jpg',
      link: '#',
    },
    {
      title: 'Mobil Oyun',
      category: 'Mobil',
      image: '/portfolio/project6.jpg',
      link: '#',
    },
  ];

  const filteredProjects = activeFilter === 'Tümü'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section bg-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seçkin <span className="heading-gradient">Projelerim</span>
          </h2>
          <p className="text-body-color max-w-2xl mx-auto">
            Geliştirdiğim bazı özel projeler ve çalışmalar
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              filter={filter}
              activeFilter={activeFilter}
              onClick={setActiveFilter}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

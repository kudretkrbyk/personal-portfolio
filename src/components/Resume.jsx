import { useState, useEffect, useRef } from 'react';

const SkillBar = ({ skill }) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(skill.level);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [skill.level]);

  return (
    <div className="card" ref={skillRef}>
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-primary">{width}%</span>
      </div>
      <div className="w-full h-2 bg-border-color rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-[#ff014f] rounded-full transition-all duration-[2000ms] ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const Resume = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Şimdi',
      description: 'Modern web teknolojileri kullanarak kapsamlı web uygulamaları geliştirme.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Kullanıcı arayüzü geliştirme ve responsive tasarım uygulamaları.',
    },
    {
      title: 'Web Developer',
      company: 'Startup',
      period: '2019 - 2020',
      description: 'E-ticaret ve kurumsal web siteleri geliştirme.',
    },
  ];

  const education = [
    {
      degree: 'Bilgisayar Mühendisliği',
      school: 'X Üniversitesi',
      period: '2015 - 2019',
      description: 'Yazılım geliştirme, algoritma ve veri yapıları üzerine eğitim.',
    },
    {
      degree: 'Web Geliştirme Sertifikası',
      school: 'Online Platform',
      period: '2018',
      description: 'Modern web teknolojileri ve framework\'ler üzerine kapsamlı eğitim.',
    },
  ];

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'MongoDB', level: 75 },
  ];

  return (
    <section id="resume" className="section bg-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Deneyim ve <span className="heading-gradient">Eğitim</span>
          </h2>
          <p className="text-body-color max-w-2xl mx-auto">
            Profesyonel deneyimlerim ve eğitim geçmişim
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">İş Deneyimi</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="card group">
                  <span className="text-primary text-sm font-medium mb-2 block">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h4>
                  <h5 className="text-lg text-body-color mb-3">{exp.company}</h5>
                  <p className="text-body-color">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Eğitim</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card group">
                  <span className="text-primary text-sm font-medium mb-2 block">
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h4>
                  <h5 className="text-lg text-body-color mb-3">{edu.school}</h5>
                  <p className="text-body-color">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Yetenekler</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
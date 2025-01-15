import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const experiences = [
  {
    title: "Web Developer",
    company: "Freelance",
    period: "2024 - Şimdi",
    description:
      "React ile fronted ve Node.js ile backend geliştirme üzerine freelance çalışmalar, Wordpress altyapılı web sitesi geliştirme.",
  },
  {
    title: "Fullstack Developer Intern",
    company: "ARİS888",
    period: "2024 - 2024",
    description: "Yapay Zeka Destekli Canlı Destek Modülü Geliştirme.",
  },
  {
    title: "Web Designer",
    company: "Freelance",
    period: "2020 - 2023",
    description: "Wordperss Altyapılı Web Sitesi Geliştirme ",
  },
];

const education = [
  {
    degree: "Bilgisayar Mühendisliği",
    school: "Sakarya Uygulamalı Bilimler Üniversitesi",
    period: "2020 - 2024",
    description:
      "Yazılım geliştirme, algoritma ve veri yapıları üzerine eğitim.",
  },
  {
    degree: "Endüstri Mühendisliği",
    school: "MSÜ Kara Harp Okulu",
    period: "2009-2013",
    description:
      "Endüstri mühendisliği üzerine eğitim, işletme, üretim ve kalite/personel yönetimi üzerine eğitim.",
  },
];

const skills = [
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 70 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 50 },
  { name: "HTML/CSS", level: 90 },
  { name: "MongoDB", level: 70 },
  { name: "PostgreSQL", level: 70 },
  { name: "TailwindCSS", level: 90 },
];
const projects = [
  {
    title: "ahiskagroup Kurumsal Website",
    category: "Wordpress",
    image: "/assets/project/ahiskaGroup.png",
    link: "#",
    web: "https://ahiskagroup.com.tr/",
  },
  {
    title: "aloBocekDunası Kurumsal Website",
    category: "Wordpress",
    image: "/assets/project/aloBocekDunyasi.png",
    link: "#",
    web: "https://www.alobocekdunyasi.com.tr/",
  },
  {
    title: "gooSoft Yazılım Kurumsal Website",
    category: "Wordpress",
    image: "/assets/project/goosoftYazilim.png",
    link: "#",
    web: "https://goosoft.net/",
  },
  {
    title: "emekTeknik Yazılım Kurumsal Website",
    category: "Wordpress",
    image: "/assets/project/emekTeknik.png",
    link: "#",
    web: "https://www.emekteknik.com.tr/",
  },
  {
    title: "Çayırova Belediyesi Sosyal Tesisleri  Kurumsal Website",
    category: "Wordpress",
    image: "/assets/project/cayirovasosyalt.png",
    link: "#",
    web: "https://cayirovasosyaltesisler.com/",
  },
  {
    title: "Hüma Mekanik Kurumsal Website",
    category: "Wordpress",
    image: "/assets/project/Anasayfa-HÜMA-MEKANİK-proje-sayfa.png",
    link: "#",
    web: "http://www.humamekanik.com.tr/",
  },
  {
    title: "Kros Gıda Kurumsal Website",
    category: "Wordpress",
    image: "/assets/project/ANASAYFA-Kros-Gıda-proje-sayfa.png",
    link: "#",
    web: "http://www.krosgida.com/",
  },
  {
    title: "Uludağ Ofis Mobilyaları Kurumsal Website",
    category: "Wordpress",
    image: "/assets/project/ANASAYFA-Uludag-Ofis-proje-sayfa.png",
    link: "#",
    web: "https://uludagofis.com/",
  },
  {
    title: "DeShip Kurumsal Website",
    category: "Wordpress",
    image: "/assets/project/Deship-proje-sayfa.png",
    link: "#",
    web: "https://deship.com.tr/",
  },
  {
    title: "Özgüvenler İnsan Kaynakları Kurumsal Website",
    category: "Wordpress",
    image:
      "/assets/project/Özgüvenler-İK-–-Profesyonel-İK-ve-Danışmanlık-proje-sayfa.png",
    link: "#",
    web: "http://ozguvenler.com.tr/",
  },
  {
    title: "İzdem Tur Kurumsal Website",
    category: "Wordpress",
    image:
      "/assets/project/İzdemtur-–-Disiplinli-Personellerimizle-Son-Model-Araçlarımızla-Başlangıç-Noktasındayız-proje-sayfa.png",
    link: "#",
    web: "https://www.izdemtur.com.tr/",
  },
  {
    title: "Gilber Frontend Template",
    category: "Frontend",
    image: "/assets/project/gilber.png",
    link: "#",
    web: "https://gilber.kudretkrbyk.com.tr/",
    sourceCode: "https://github.com/kudretkrbyk/wordpressGilber",
  },
  {
    title: "Bemins Frontend E-Commerce Template",
    category: "Frontend",
    image: "/assets/project/bemins.png",
    link: "#",
    web: "https://bemins.kudretkrbyk.com.tr/",
    sourceCode: "https://github.com/kudretkrbyk/WordpressBemins",
  },
  {
    title: "Watch Frontend  Template",
    category: "Frontend",
    image: "/assets/project/watch.png",
    link: "#",
    web: "https://analogwatch.kudretkrbyk.com.tr/",
    sourceCode: "https://github.com/kudretkrbyk/analogWatch",
  },
  {
    title: "Tripo Games Frontend  Template",
    category: "Frontend",
    image: "/assets/project/tripo.png",
    link: "#",
    web: "https://tripogames.kudretkrbyk.com.tr/",
    sourceCode: "https://github.com/kudretkrbyk/tripoGames",
  },
  {
    title: "SoundBeam Frontend  Template",
    category: "Frontend",
    image: "/assets/project/soundBeam.png",
    link: "#",
    web: "https://soundbeam.kudretkrbyk.com.tr/",
    sourceCode: "https://github.com/kudretkrbyk/sounBeamTemplateClone",
  },
];
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kudretkrbyk",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kudret-kirbiyik/",
    icon: FaLinkedin,
  },
];
export default { experiences, education, skills, projects, socialLinks };

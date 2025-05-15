const Contact = require("../models/contact");
const User = require("../models/users");
const Projects = require("../models/projects");
const bcrypt = require("bcrypt");

async function populate() {
  try {
    await Contact.bulkCreate([
      {
        name: "Deneme isim",
        email: "deneme@gmail.com",
        message: "deneme mesaj",
        subject: "deneme konusu",
      },
    ]);
    await User.bulkCreate([
      {
        username: "Kudret Kırbıyık",
        userpassword: bcrypt.hashSync("123456", 10),
        isadmin: true,
      },
      {
        username: "Gökhan Topdanış",
        userpassword: bcrypt.hashSync("12345", 10),
        isadmin: true,
      },
      {
        username: "Kenan Ünal",
        userpassword: bcrypt.hashSync("1234", 10),
        isadmin: true,
      },
    ]);
    await Projects.bulkCreate([
      {
        title: "Personal Portfolio Website",
        tag: "Frontend Development",
        description:
          "A personal website showcasing my projects, skills, and resume.",
        image:
          "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=800",
        liveview: "https://github.com/kudretkrbyk",
        github: "https://github.com/kudretkrbyk",
      },
      {
        title: "E-commerce Store",
        tag: "Fullstack Development",
        description:
          "An online store with user authentication, shopping cart, and payment integration.",
        image:
          "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
        liveview: "https://github.com/kudretkrbyk",
        github: "https://github.com/kudretkrbyk",
      },
      {
        title: "Blog Platform",
        tag: "Backend Development",
        description:
          "A full-featured blog system where users can write, edit, and comment on posts.",
        image:
          "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
        liveview: "https://github.com/kudretkrbyk",
        github: "https://github.com/kudretkrbyk",
      },
      {
        title: "Weather Forecast App",
        tag: "Frontend Development",
        description:
          "An app showing real-time weather updates and 7-day forecasts using OpenWeather API.",
        image:
          "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=800",
        liveview: "https://github.com/kudretkrbyk",
        github: "https://github.com/kudretkrbyk",
      },
      {
        title: "Task Manager App",
        tag: "Fullstack Development",
        description:
          "A simple to-do app with user authentication and real-time task updates.",
        image:
          "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
        liveview: "https://github.com/kudretkrbyk",
        github: "https://github.com/kudretkrbyk",
      },
      {
        title: "Recipe Finder App",
        tag: "Frontend Development",
        description:
          "An app to search and display recipes with ingredients and cooking instructions.",
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        liveview: "https://github.com/kudretkrbyk",
        github: "https://github.com/kudretkrbyk",
      },
      {
        title: "Fitness Tracker",
        tag: "Fullstack Development",
        description:
          "A web app to track workouts, calories, and progress over time.",
        image:
          "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800",
        liveview: "https://github.com/kudretkrbyk",
        github: "https://github.com/kudretkrbyk",
      },
      {
        title: "Movie Database App",
        tag: "Frontend Development",
        description:
          "An app that allows users to search for movies and view detailed information.",
        image:
          "https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800",
        liveview: "https://github.com/kudretkrbyk",
        github: "https://github.com/kudretkrbyk",
      },
      {
        title: "Travel Blog Website",
        tag: "Frontend Development",
        description:
          "A modern blog site for sharing travel experiences and guides.",
        image:
          "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
        liveview: "https://github.com/kudretkrbyk",
        github: "https://github.com/kudretkrbyk",
      },
      {
        title: "Online Education Platform",
        tag: "Fullstack Development",
        description:
          "A platform where users can sign up for courses and track their learning progress.",
        image:
          "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
        liveview: "https://github.com/kudretkrbyk",
        github: "https://github.com/kudretkrbyk",
      },
    ]);
  } catch (error) {
    console.error("Error syncing tables:", error);
  }
}

module.exports = populate;

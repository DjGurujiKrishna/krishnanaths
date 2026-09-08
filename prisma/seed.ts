import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  if ((await prisma.profile.count()) === 0) {
    await prisma.profile.create({
      data: {
        nameLine1: "KRISHNA",
        nameLine2: "NATH S",
        availability: "Available for work",
        bio: "Crafting high-performance web experiences with the MERN Stack, Django, and Next.js. Passionate about building modern, scalable, and user-centric applications.",
        location: "Kochi, Kerala",
        stackLabel: "MERN + Django",
        portraitUrl: "/krishna.jpg",
        marquee:
          "React, Next.js, TypeScript, Node.js, Django, MongoDB, PostgreSQL, AWS, Docker, Tailwind CSS",
        badgeLabel: "Lead Engineer",
      },
    });
  }

  if ((await prisma.job.count()) === 0) {
    await prisma.job.createMany({
      data: [
        {
          title: "Lead Full Stack Developer",
          company: "Indian Institute of Commerce , Lakshya",
          location: "Kochi, Kerala",
          locationType: "On SIte",
          startDate: "January 2026",
          endDate: "Present",
          description:
            "Built in-house web applications to automate internal business workflows, replacing manual processes with scalable systems. Developed the Lakshya Aptitude Test & Scholarship Exam Platform with automated evaluation and reporting, integrated with LSQ CRM for lead and student data sync. Implemented ticketing and complaint management systems to streamline issue tracking, resolution workflows, and operational monitoring",
          createdAt: new Date("2026-01-15"),
        },
        {
          title: "Full Stack Developer I",
          company: "Simplita.ai",
          location: "Villupuram, Tamil Nadu",
          locationType: "Hybrid",
          startDate: "April 2025",
          endDate: "January 2026",
          description:
            "Developing AI-driven solutions to enhance business operations and decision-making. My work involves building machine learning models, AI-powered analytics platforms, and automation tools. I have contributed to projects focused on intelligent data processing, predictive analytics, and workflow optimization, helping businesses leverage AI for efficiency and growth.",
          createdAt: new Date("2025-04-01"),
        },
        {
          title: "MERN Stack Developer Intern",
          company: "ZedSoftTech",
          location: "Tirur, Malappuram",
          locationType: "Remote",
          startDate: "December 2024",
          endDate: "April 2025",
          description:
            "Developing a MERN stack e-commerce platform that allows businesses to purchase customizable admin panels. Creating a modular and scalable admin panel using React with TypeScript. Leveraging Tailwind CSS for modern aesthetics and seamless interactions. Building a robust backend with Node.js and Express, integrated with MongoDB. Focused on performance optimization, debugging, and cross-functional collaboration in an Agile environment.",
          createdAt: new Date("2024-12-01"),
        },
        {
          title: "Software Developer Intern",
          company: "Internship Studio",
          location: "Remote",
          locationType: "Remote",
          startDate: "October 2024",
          endDate: "November 2024",
          description:
            "Developed a full-featured e-commerce application using the MERN stack. Responsibilities included user authentication, product listings, order management, payment gateway integration, and enhancing the user interface using React and Tailwind CSS.",
          createdAt: new Date("2024-10-01"),
        },
      ],
    });
  }

  if ((await prisma.education.count()) === 0) {
    await prisma.education.createMany({
      data: [
        {
          heading: "Higher Education",
          title: "Degree",
          value: "B.Tech in Computer Science and Engineering (2021-2025)",
          order: 1,
        },
        {
          heading: "Higher Education",
          title: "Institution",
          value:
            "Vidya Academy Of Science And Technology Technical Campus, Kilimanoor",
          order: 2,
        },
        {
          heading: "Higher Education",
          title: "Performance (CGPA)",
          value: "8.3",
          order: 3,
        },
        {
          heading: "High School Diploma",
          title: "Specialization",
          value: "Biology Science (2018-2020)",
          order: 4,
        },
        {
          heading: "High School Diploma",
          title: "Institution",
          value: "Govt. Model Higher Secondary School, Varkala",
          order: 5,
        },
        {
          heading: "High School Diploma",
          title: "Performance (%)",
          value: "94.5",
          order: 6,
        },
      ],
    });
  }

  if ((await prisma.certification.count()) === 0) {
    await prisma.certification.createMany({
      data: [
        {
          name: "Full Stack Web Development",
          organization: "Internshala",
          issueDate: "October 2022",
          credentialId: "F81F181A-1860-86A6-D7AE-C88D7695736D",
          credentialUrl: "https://trainings.internshala.com/s/v/2254458/ff5a6bd0",
          order: 1,
        },
        {
          name: "Web Development",
          organization: "Udemy",
          issueDate: "October 2022",
          credentialId: "UC-aaa3abc8-e3d7-4c4e-b616-bc2fbc8fd913",
          credentialUrl:
            "https://www.udemy.com/certificate/UC-aaa3abc8-e3d7-4c4e-b616-bc2fbc8fd913",
          order: 2,
        },
        {
          name: "Modern Javascript For React JS",
          organization: "Udemy",
          issueDate: "Nov 2024",
          credentialId: "UC-7859a414-1414-4e4a-a049-0e55fbe7dd83",
          credentialUrl:
            "https://www.udemy.com/certificate/UC-7859a414-1414-4e4a-a049-0e55fbe7dd83/",
          order: 3,
        },
      ],
    });
  }

  if ((await prisma.skillCategory.count()) === 0) {
    await prisma.skillCategory.createMany({
      data: [
        {
          category: "Backend Development",
          skills:
            "Node JS, Express JS, Django, Fast API, Java Spring Boot, Deno JS, Nest JS",
          order: 1,
        },
        {
          category: "Frontend Architecture",
          skills:
            "HTML5, CSS, Tailwind CSS, React JS, Next JS, TypeScript, Zustand, Angular JS",
          order: 2,
        },
        {
          category: "Database Systems",
          skills: "MongoDB, MySQL, PostgreSQL, Redis",
          order: 3,
        },
        {
          category: "Cloud & DevOps",
          skills: "AWS, Docker, Azure, CI/CD, Kubernetes",
          order: 4,
        },
        {
          category: "Programming",
          skills: "Python, JavaScript, Java, C++, PHP, Go",
          order: 5,
        },
      ],
    });
  }

  if ((await prisma.service.count()) === 0) {
    await prisma.service.createMany({
      data: [
        {
          title: "Web Development",
          description:
            "Building high-performance static and dynamic web applications with state-of-the-art technologies.",
          icon: "FaCode",
          order: 1,
        },
        {
          title: "Custom Applications",
          description:
            "Tailored software solutions designed to solve specific business challenges with scalable architecture.",
          icon: "FaLayerGroup",
          order: 2,
        },
        {
          title: "API Systems",
          description:
            "Designing robust RESTful and GraphQL APIs for seamless system integration and data flow.",
          icon: "FaServer",
          order: 3,
        },
        {
          title: "Front-End Mastery",
          description:
            "Crafting visually stunning, responsive user interfaces using modern frameworks like React and Next.js.",
          icon: "FaLaptopCode",
          order: 4,
        },
        {
          title: "Back-End Power",
          description:
            "Developing secure and efficient server-side logic with Node.js, Django, and high-performance databases.",
          icon: "FaDatabase",
          order: 5,
        },
        {
          title: "DevOps & Cloud",
          description:
            "Automating deployments and optimizing cloud infrastructure for maximum reliability and scale.",
          icon: "FaInfinity",
          order: 6,
        },
      ],
    });
  }

  if ((await prisma.project.count()) === 0) {
    await prisma.project.createMany({
      data: [
        {
          name: "AnyTimeRequest Mock Server",
          description:
            "Full-fledged API testing suite with WebSocket relay for local/production bridging, multiple tabs, and assertion support.",
          status: "completed",
          githubLink: "https://github.com/DJGuruji/meshcore",
          productionLink: "https://anytimerequest.com",
          order: 1,
        },
        {
          name: "Simplita.ai",
          description:
            "AI-powered automation platform enhancing business decision-making with high-performance data processing.",
          status: "completed",
          githubLink: "nil",
          productionLink: "https://app.simplita.ai",
          order: 2,
        },
        {
          name: "Find My Client",
          description:
            "AI-powered MERN application connecting freelance workers with clients, optimized via Cloudinary.",
          status: "completed",
          githubLink: "https://github.com/DJGuruji/fmcFrontend",
          productionLink: "https://fmc.deno.dev",
          order: 3,
        },
        {
          name: "Virtual Hospital",
          description:
            "Innovative platform for medical appointments with AI diagnostics and Nationwide access.",
          status: "completed",
          githubLink: "https://github.com/DJGuruji/AI-Assisted-Virtual-Hospital",
          productionLink: "https://vmas.deno.dev",
          order: 4,
        },
        {
          name: "Vyuha",
          description:
            "College event ticket booking system for alumni and students using the MERN stack.",
          status: "completed",
          githubLink: "https://github.com/DJGuruji/vyuha",
          productionLink: "https://vidyavyuha.in",
          order: 5,
        },
        {
          name: "Ecommerce ( G-cart )",
          description:
            "Modern retail platform with secure payments and responsive design powered by React.",
          status: "completed",
          githubLink: "https://github.com/DJGuruji/Ecommerce",
          productionLink: "https://gcart.deno.dev",
          order: 6,
        },
      ],
    });
  }

  if ((await prisma.resume.count()) === 0) {
    await prisma.resume.create({
      data: {
        summary:
          "View or download my comprehensive resume highlighting my technical expertise, professional journey, and software engineering qualifications.",
        pdfUrl: "/Krishnanaths_Resume.pdf",
        fileName: "Krishnanaths_Resume.pdf",
      },
    });
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

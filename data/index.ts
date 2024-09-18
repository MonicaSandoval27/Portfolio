export const navItems = [
    { name: "About", link: "#about" },
    // { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Driven by a love for technology, I thrive on visualizing and bringing ideas to life through development.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "",
      description: "Highly adaptable when it comes to communicating across different time zones",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start ",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tools",
      description: "Constantly learning and adding to my tool box.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Lover of tech, jiu jitsu, coffee, and pottery.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently sharpening my knowledge and honing my skills to push the boundaries of what's possible in tech.",
      description: "",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-top",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
    },
  ];
  
  export const testimonials = [
    {
      quote:
       "Monica Sandoval worked for my company from 2021 - 2024 on two software projects, Robal and PC Medfolio. Monica's business background coupled with her learning speed made her an asset to our team. She can think strategically when developing and asks questions to ensure business needs will be met in the future as well as present. Monica also has the strength of working independently or in a team setting, what I also love about her is the wherewithal she displays to not only ask for feedback but to be shown how to do something in the future so she may do it herself. It is important to note, Monica worked under two different Directors while here and both praised her work. She was flexible in her abilities and was able to transition from our HR product to our Medical product seamlessly. I highly recommend her as an employee.",
      name: "Courtney Morales Hofmann",
      title: "CEO of Robal Tech",
    },
    {
      quote:
        "Monica is an all-star and a rare find. From her commitment to communication, Monica always gave 110% to her work. She has shown time after time the ability to perform under pressure, hit tight deadlines, and work with diverse individuals. She is a strong independent colleague but just as strong as a team player. Monica learns quickly and takes on projects with excitement. She lead great discussions during our SCRUM stand-ups, planning, and retrospective meetings. She asked appropriate questions, gave/received critiques with professionalism, and proposed creative and new ideas when needed. It was a pleasure working and learning from Monica.",
      name: "Harrison Janness Simon",
      title: "Project Manager at Robal Tech",
    },
    {
      quote:
      "Monica has been an important member at Robal Tech showing great learning skills as well a great team player, she has been part of building great solutions from backend to frontend, going from React/Javascript development to AWS Lambdas, Bulk Uploads, Onboarding Workflows, Documents Automation and DynamoDB and S3 Storage and so much more, applying serverless solutions and configuration helping on providing cloud technologies solutions, being a great valuable addition to any team and project, I highly recommend her as she always bring the best to the table, great ideas and skill set to provide great software solutions to clients.",
      name: "Esteban Sosa",
      title: "Senior Professional Service Delivery Coordinator | Azure Cloud Infrastructure Admin at Gainwell Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/robal.jpeg",
      nameImg: "/robal.jpeg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Cloud Engineer",
      desc: "Designed and implemented a notification center within the system to proactively alert users of document updates, enabling real-time communication between system administrators and end users.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Jr. Cloud Engineer",
      desc: "Created admin dashboard full stack to display onboarding analytics for business customers.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      desc: "Engineered a survey management system with React and .NET Core, developing RESTful APIs and optimizing data retrieval with SQL stored procedures, complex joins, and UDTs to enhance database performance.",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/MonicaSandoval27"
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/monicasandoval27/"
    },
  ];
// import images
import example1 from "./assets/thumbnails/example1.jpg"
import example2 from "./assets/thumbnails/example2.png"
import example3 from "./assets/thumbnails/example3.jpg"
import example4 from "./assets/thumbnails/example4.jpg"
import example5 from "./assets/thumbnails/example5.png"
import example6 from "./assets/thumbnails/example6.jpg"
import example7 from "./assets/thumbnails/example7.jpg"

// import technologies
import Html from "./assets/technologies/icons8-html-240.png"
import Css from "./assets/technologies/icons8-css-240.png"
import Express from "./assets/technologies/icons8-express-js-250.png"
import Js from "./assets/technologies/icons8-javascript-240.png"
import Mongo from "./assets/technologies/icons8-mongodb-240.png"
import Next from "./assets/technologies/icons8-next.js-240.png"
import NodeJS from "./assets/technologies/icons8-nodejs-240.png"
import React from "./assets/technologies/icons8-react-native-68.png"
import Tailwind from "./assets/technologies/icons8-tailwindcss-240.png"



export const Greetings = "Hello"
export const Situation = "I am Kevin, a Web Application Developer based in Rwanda, currently pursuing a BSc (Hons) in Software Engineering at African Leadership University."
// export const 

export const NavNames = 'mboni kevin.'
export const NavLinks = [
    {title: "Projects", location: "/"},
    {title: "About", location: "/about"},
    {title: "Contact", location: "/contact"},
    {title: "My CV", location: "/mycv"},
]


// projects
export const ProjectModel = [
    {
        id: "8p3hwvf64q1nix1q2fzd",
        thumbnail: example7,
        title: "Youtube 2.0",
        description: "Youtube 2.0 is a modern web application aiming to revolutionize the online video sharing experience. With a sleek and intuitive user interface, users can easily discover, watch, and share their favorite videos. The platform is built using cutting-edge technologies such as React JS, MongoDB, Express JS, Node JS, Next JS, and Tailwind CSS. Whether you're a content creator or a viewer, Youtube 2.0 offers a seamless and immersive experience for all. Join us and be part of the future of online video sharing.",
        liveDemoLink: "https://www.google.com/",
        technologies: [
            { name: 'React JS', icon: React },
            { name: 'MongoDb', icon: Mongo },
            { name: 'Express JS', icon: Express },
            { name: 'Node JS', icon: NodeJS },
            { name: 'Next JS', icon: Next },
            { name: 'Tailwind', icon: Tailwind }
        ],
        duration: '8 months',
        linkSourceCode: 'http://localhost:5173/project/8p3hwvf64q1nix1q2fzd',
        role: 'Full-stack Developer'
    },
    {
        id: "03un0d3i6ywvd9gai7wx",
        thumbnail: example2,
        title: "Amazone Clone",
        description: "Amazone Clone is a dynamic web application designed to replicate the seamless online shopping experience of the popular e-commerce platform Amazon. With a user-friendly interface and robust features, users can browse a vast catalog of products, add items to their cart, and securely checkout with ease. The application leverages modern technologies such as React JS, MongoDB, Express JS, Node JS, Next JS, and Tailwind CSS to deliver high performance and scalability. Whether you're a buyer or a seller, Amazone Clone offers a comprehensive solution for all your online shopping needs. Explore the future of e-commerce and elevate your shopping experience today.",
        liveDemoLink: "https://www.google.com/",
        technologies: [
            {name:'React JS',icon: React},
            {name:'MongoDb',icon: Mongo},
            {name:'Express JS',icon:  Express},
            {name:'Node JS',icon: NodeJS},
            {name:'Next JS',icon: Next},
            {name:'Tailwind',icon: Tailwind}],
        duration: '3 months',
        linkSourceCode: 'http://localhost:5173/project/8p3hwvf64q1nix1q2fzd',
        role: 'Full-stack Developer'
    },
    {
        id: "4tygv4c3a9dzqcyw7821",
        thumbnail: example3,
        title: "Airbnb Clone ",
        description: "Airbnb Clone is a sophisticated web platform that mirrors the renowned accommodation booking service Airbnb. Offering a seamless experience for both hosts and guests, this application allows users to list their properties, search for accommodations, and book stays with ease. With its intuitive user interface and powerful functionalities, Airbnb Clone revolutionizes the way people find and rent accommodations worldwide. Built using cutting-edge technologies including React JS, MongoDB, Express JS, Node JS, Next JS, and Tailwind CSS, this platform ensures reliability, scalability, and security. Experience the convenience and flexibility of Airbnb Clone, and unlock a world of possibilities in hospitality.",
        liveDemoLink: "https://www.google.com/",
        technologies: [
            {name:'React JS',icon: React},
            {name:'MongoDb',icon: Mongo},
            {name:'Express JS',icon:  Express},
            {name:'Node JS',icon: NodeJS},
            {name:'Next JS',icon: Next},
            {name:'Tailwind',icon: Tailwind}],
        duration: '13 months',
        linkSourceCode: 'http://localhost:5173/project/8p3hwvf64q1nix1q2fzd',
        role: 'Full-stack Developer'
    },
    {
        id: "39q400r75106vxmnpkwn",
        thumbnail: example4,
        title: "TikTok Clone",
        description: "TikTok Clone is an innovative social media platform inspired by the popular short-form video app TikTok. With its engaging user interface and extensive feature set, users can create, share, and discover short videos effortlessly. Whether you're showcasing your talents, exploring trending content, or connecting with friends, TikTok Clone offers a dynamic and interactive experience for all users. Leveraging advanced technologies such as React JS, MongoDB, Express JS, Node JS, Next JS, and Tailwind CSS, this platform ensures smooth performance and seamless navigation. Join the TikTok Clone community today and unleash your creativity in the world of short-form video content.",
        liveDemoLink: "https://www.google.com/",
        technologies: [
            {name:'React JS',icon: React},
            {name:'MongoDb',icon: Mongo},
            {name:'Express JS',icon:  Express},
            {name:'Node JS',icon: NodeJS},
            {name:'Next JS',icon: Next},
            {name:'Tailwind',icon: Tailwind}],
        duration: '5 months',
        linkSourceCode: 'http://localhost:5173/project/8p3hwvf64q1nix1q2fzd',
        role: 'Full-stack Developer'
    },
    {
        id: "kgm3k1qr8dq9y4dhjjn9",
        thumbnail: example5,
        title: "Whatsapp Clone",
        description: "Whatsapp Clone is a versatile messaging application designed to replicate the functionality and convenience of the popular messaging platform Whatsapp. Offering real-time messaging, voice calls, and group chats, this platform enables users to stay connected with friends, family, and colleagues across the globe. With its user-friendly interface and robust features, Whatsapp Clone delivers a seamless communication experience on web and mobile devices alike. Built using modern technologies including React JS, MongoDB, Express JS, Node JS, Next JS, and Tailwind CSS, this platform ensures reliability, security, and scalability. Experience the power of instant communication with Whatsapp Clone and stay connected wherever you go.",
        liveDemoLink: "https://www.google.com/",
        technologies: [
            {name:'React JS',icon: React},
            {name:'MongoDb',icon: Mongo},
            {name:'Express JS',icon:  Express},
            {name:'Node JS',icon: NodeJS},
            {name:'Next JS',icon: Next},
            {name:'Tailwind',icon: Tailwind}],
        duration: '2 months',
        linkSourceCode: 'http://localhost:5173/project/8p3hwvf64q1nix1q2fzd',
        role: ''
    },
    {
        id: "7ez5bbw5zqzah3ppx261",
        thumbnail: example6,
        title: "twiter clone",
        description: "Twitter Clone is a dynamic social media platform inspired by the popular microblogging service Twitter. With its streamlined interface and powerful features, users can share thoughts, updates, and multimedia content with their followers in real-time. Whether you're following your favorite influencers, participating in trending discussions, or expressing your thoughts, Twitter Clone offers a seamless and engaging experience for all users. Leveraging modern technologies such as React JS, MongoDB, Express JS, Node JS, Next JS, and Tailwind CSS, this platform ensures smooth performance and intuitive navigation. Join the conversation on Twitter Clone and connect with a global community of users today.",
        liveDemoLink: "https://www.google.com/",
        technologies: [
            {name:'React JS',icon: React},
            {name:'MongoDb',icon: Mongo},
            {name:'Express JS',icon:  Express},
            {name:'Node JS',icon: NodeJS},
            {name:'Next JS',icon: Next},
            {name:'Tailwind',icon: Tailwind}],
        duration: '3 months',
        linkSourceCode: 'http://localhost:5173/project/8p3hwvf64q1nix1q2fzd',
        role: 'Full-stack Developer'
    },
]
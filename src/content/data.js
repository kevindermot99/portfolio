import cover1 from '../assets/projects/1.png'
import cover2 from '../assets/projects/2.png'
import sorwaziniCertificate from '../assets/achievements/sorwazini_certificate.jpg'

export const Projects = [
    {
        number: '1',
        name: "Countify",
        cover: cover1,
        url: "https://countify.onrender.com",
        desc: "Online tool for counting words, sentences, and characters in PDFs and texts",
        tech: ["React js","Tailwind"],
        color: '#aaaaaa40'
    },
    {
        number: '2',
        name: "Gerayo",
        cover: cover2,
        url: "https://gerayo.onrender.com",
        desc: "Buy tickets online and track your bus in Rwanda. with Gerayo traveling is better",
        tech: ["React js","Tailwind", "Google Maps API"],
        color: '#399E5A40'
    },
    
]

export const Feedback = [
    {
        person: "HonourGod Levison",
        role: "Graphics Designer",
        date: "Aug 04, 2024",
        stars: 4,
        comemnt: "It will be great also if the upload can read  docs files, cause more people that will be writing will use docs majorly",
        project: "Countify",
    },
    {
        person: "ChatGPT",
        role: "AI Assistant",
        date: "Aug 02, 2024",
        stars: 3,
        comemnt: "Countify looks good overall, but it could use a few tweaks. Adding text export and more file handling options would make it a lot more versatile.",
        project: "Countify",
    },
    {
        person: "Carine Ahishakiye",
        role: "Junior Software Engineer",
        date: "Aug 04, 2024",
        stars: 4,
        comemnt: "Signing in is initially okay, but clicking the Sign-In button doesn't work, so I had to enter as a guest.",
        project: "Gerayo",
    },
    {
        person: "Stessie Magnifique ISENGWE",
        role: "ALU Student",
        date: "Aug 04, 2024",
        stars: 4,
        comemnt: "I am impressed with your project. It has great potential to make daily commutes easier and more efficient for users. Keep up the excellent work!",
        project: "Gerayo",
    },
    
]

export const Achievements = [
    {
        image: sorwaziniCertificate,
        title: "Certificate of Achievement",
        date: "july 24, 2024",
        description: "Awarded to us 'Sorwazini' for outstanding entrepreneurial innovation and pitching at the E-LAB competition. We Created 'GERAYO App'",
    },
]
import Image from "next/image"
import sajid2 from "../public/images/sajid2.png"
import icons from "../public/images/icons.png"

export const BaseInfo = {
    name: "Muhammad Sajid",
    position: "Web Developer",
    tagline: "AI & Agentic AI Developer",   // "student" field ki jagah ye naya field
    Discription: "I build seamless, high-performing web applications and explore the future of AI and Agentic AI — turning ideas into reliable, production-ready digital products.",
    // ... baqi fields (client, experience, project, website) same rakhein
}

export const AboutInfo = {
    title: "I Build Reliable Web Products — and Explore the Future of AI",
    discription: "I'm a web developer focused on clean, maintainable code and thoughtful user experiences. Alongside client work, I'm deepening my expertise in AI and Agentic AI development — building tools that go beyond static interfaces. Whatever the project, I bring the same standard: quality, attention to detail, and a genuine investment in the outcome.",
    client: "...",      // existing value rakhein
    experience: "...",  // existing value rakhein
    project: "...",      // existing value rakhein
    website: "...",      // existing value rakhein
}

export const servicesData = [
    { id: 1, icon: "/images/icons.png", title: "Web Application", description: "I design and build full-stack web applications — from responsive front-ends to the logic and APIs that power them." },
    { id: 2, icon: "/images/uxui.png", title: "UX UI", description: "I design interfaces that are intuitive and easy to use, grounded in clear user flows and clean visual hierarchy." },
    { id: 3, icon: "/images/ecommerce2.png", title: "E-Commerce Websites", description: "I build e-commerce storefronts that are fast, secure, and built to convert — from product pages to checkout." },
    { id: 4, icon: "/images/database.png", title: "Database Solutions", description: "I set up, structure, and optimize databases so your application stays fast and reliable as it grows." },
    { id: 5, icon: "/images/videoedit7.png", title: "Video Editing", description: "I edit video content for brands and creators — polished, well-paced, and ready to publish." },
    { id: 6, icon: "/images/logodesign2.png", title: "Logo Design", description: "I design logos that give a brand a clear, memorable identity across every platform." },
    { id: 7, icon: "/images/icons.png", title: "AI & Agentic AI Development", description: "I build intelligent, goal-driven applications powered by AI — from automation workflows to agentic systems that act, decide, and adapt." },
]

export const ProjectData = [
    {
        id: 1,
        title: "V-Coders — Web Agency Platform",
        description: "A full business website for my tech team, V-Coders, showcasing web development, software, and design services with a projects showcase and team page.",
        image: "/images/vcoders.png",
        url: "https://v-coders.com/",
        github: ""
    },
    {
        id: 2,
        title: "Lucky Draw — Offline Raffle Tool",
        description: "A lightweight raffle tool that lets users upload an Excel participant list and run an offline lucky-draw directly in the browser.",
        image: "/images/lucky.png",
        url: "https://lucky-draw-gtr.vercel.app/",
        github: ""
    },
    {
        id: 3,
        title: "Political Leader Portfolio (Demo)",
        description: "A demo public-figure portfolio built to showcase a politician's profile, community initiatives, press coverage, and contact details.",
        image: "/images/ferozkhan.png",
        url: "https://mferozkhan.vercel.app/",
        github: ""
    },
    {
        id: 4,
        title: "Physical AI & Humanoid Robotics Textbook",
        description: "An AI-native technical textbook built with Docusaurus for a hackathon, covering ROS 2, digital twins, NVIDIA Isaac, and Vision-Language-Action models.",
        image: "/images/docu.png",
        url: "https://physical-ai-book-hackathon-mauve.vercel.app/",
        github: ""
    },
    {
        id: 5,
        title: "Ghandhara Tyre — Excel Data Extractor",
        description: "A business tool built for Ghandhara Tyre and Rubber Company that lets staff upload an Excel file and extract its data for further use.",
        image: "/images/ai.png",
        url: "https://export-file-extract.vercel.app/",
        github: ""
    },
    {
        id: 6,
        title: "The Humanity Era — Donation Platform",
        description: "A donation website for a charity organization, enabling supporters to contribute food, shelter, and essential resources to underprivileged communities through a simple, guided donation flow.",
        image: "/images/the.png",
        url: "https://thehumanityeracontribution.vercel.app/",
        github: ""
    },
    {
        id: 7,
        title: "Ghar Ka Samaan — Grocery E-Commerce",
        description: "A full grocery e-commerce platform with category browsing, cart and checkout, a lucky-draw loyalty system on every order, and WhatsApp-based customer support.",
        image: "/images/grocery.png",
        url: "https://www.gharkasamaan.online/",
        github: ""
    }
]
export const SkillData = [
    { id: 1, title: "HTML", image: "/images/html3.png", percentage: "90%", category: "Web Development" },
    { id: 2, title: "CSS", image: "/images/css.png", percentage: "80%", category: "Web Development" },
    { id: 3, title: "JAVASCRIPT", image: "/images/javascript.png", percentage: "70%", category: "Web Development" },
    { id: 4, title: "TYPESCRIPT", image: "/images/typescript.png", percentage: "80%", category: "Web Development" },
    { id: 5, title: "TAILWINDCSS", image: "/images/tailwindcss2.png", percentage: "70%", category: "Web Development" },
    { id: 7, title: "REACT", image: "/images/react.png", percentage: "60%", category: "Web Development" },
    { id: 8, title: "NEXT.JS", image: "/images/nextjs2.jpg", percentage: "80%", category: "Web Development" },
    { id: 6, title: "FIGMA", image: "/images/figma.png", percentage: "65%", category: "Design & Creative Tools" },
    { id: 9, title: "ADOBEPREMIERE", image: "/images/adobe.png", percentage: "90%", category: "Design & Creative Tools" },
    { id: 10, title: "CANVA", image: "/images/canva.png", percentage: "85%", category: "Design & Creative Tools" },
    { id: 11, title: "CIT", image: "/images/cit2.jpg", percentage: "90%", category: "Certifications" },
]

export const ClientReviews = [
    {
        name: "Ayesha Khan",
        review: "User-friendly design with a great layout. Easy to find everything I need!",
        rating: 4,
        profession: "Student of GIAIC"
    },
    {
        name: "Hira Malik",
        review: "Aesthetically pleasing and super intuitive. The navigation is effortless.",
        rating: 4.5,
        profession: "Cosmetologist"
    },
    {
        name: "Mahnoor Qureshi",
        review: "Quick load times and excellent organization. A joy to browse!",
        rating: 3.5,
        profession: "Designer"
    },
    {
        name: "Ali Raza",
        review: "Beautiful design and seamless user experience. Highly recommend!",
        rating: 5,
        profession: "Businessman"
    },
    {
        name: "Nimra Siddiqui",
        review: "Clean, professional look with easy navigation. Really well done!",
        rating: 4.5,
        profession: "Beautician"
    }
]

export const ContactData ={
    phone: "+92 345 3380 161",
    email: "sajjalsajid@gmail.com",
    address: "Landhi, Karachi, Pakistan"
}
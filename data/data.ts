import Image from "next/image"
import sajid2 from "../public/images/sajid2.png"
import icons from "../public/images/icons.png"

export const BaseInfo = {
    name: "Muhammad Sajid",
    position: "Web Developer",
    student: "Student of GIAIC",
    Discription: "Unlock the power of the web with our Full Stack Development services—building seamless and innovative digital experiences.",
    profilePic: {sajid2},
}

export const AboutInfo = {
    title: "Creating web applications with dedication and attention to every detail.",
    discription:"Our services are rooted in dedication and attention to detail in crafting web applications. With each project, we prioritize quality, innovation, and user experience to deliver solutions that are both effective and engaging for your business. Our goal is to bring your vision to life, balancing aesthetics with functionality in every web application we create.",
    client:"10+",
    experience:"1+",
    project:"5+",
    website:"5+"

}

export const servicesData = [
    {
        id: 1,
        title: "Web Application",
        description: "Our web application offers a range of services designed to provide a solution.",
        icon: "/images/icons.png"
    },
    {
        id: 2,
        title: "UX UI",
        description: "We specialize in providing top-notch UX/UI design services to help you create user-friendly digital experiences.",
        icon: "/images/uxui.png"
    },
    {
        id: 3,
        title: "E-Commerce Websites",
        description: "I provide professional e-commerce website services.",
        icon: "/images/ecommerce2.png"
    },
    {
        id: 4,
        title: "DataBase Solution",
        description: "My services include database setup, optimization, and maintenance to keep your online store running smoothly.",
        icon: "/images/database.png"
    },
    {
        id: 5,
        title: "Video Editing",
        description: "I offer professional video editing services to make your content stand out.",
        icon: "/images/videoedit7.png"
    },
    {
        id: 6,
        title: "Logo Design",
        description: "I provide professional logo design services to create a unique and memorable brand identity for your business.",
        icon: "/images/logodesign2.png"
    },
    
]

export const ProjectData = [
    {
        id: 1,
        title: "Build Your Resume",
        description: "A clean, modern resume builder that lets users create professional resumes in minutes.",
        image: "/images/Buildresume.png",
        url: "https://build-your-resume-mu.vercel.app/",
        github: ""
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "A personal portfolio and resume showcase built with Next.js.",
        image: "/images/profile.png",
        url: "https://muhammad-sajid-resume.vercel.app/",
        github: ""
    },
    {
        id: 3,
        title: "One-Click Resume Builder",
        description: "A fast, one-click resume generator focused on simplicity and speed.",
        image: "/images/resumebuilderne.png",
        url: "https://resumebuilderoneclick.vercel.app",
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
        name: "Bakhtawar Abbasi",
        review: "User-friendly design with a great layout. Easy to find everything I need!",
        rating: 4,
        profession: "Student of GIAIC",
        image: "/images/bak.jpg"
    },
    {
        name: "Darakhshan",
        review: "Aesthetically pleasing and super intuitive. The navigation is effortless.",
        rating: 4.5,
        profession: "Cosmetologist",
        image: "/images/dara.png"
    },
    {
        name: "Bisma Alamgir",
        review: "Quick load times and excellent organization. A joy to browse!",
        rating: 3.5,
        profession: "Designer",
        image: "/images/bisma.png"
    },
    {
        name: "Muhammad Danish",
        review: "Beautiful design and seamless user experience. Highly recommend!",
        rating: 5,
        profession: "Business men",
        image: "/images/danish.png"
    },
    {
        name: "Sana Shahzadi",
        review: "Clean, professional look with easy navigation. Really well done!",
        rating: 4.5,
        profession: "Beautician",
        image: "/images/sana.png"
    }
]

export const ContactData ={
    phone: "+92 345 3380 161",
    email: "sajjalsajid@gmail.com",
    address: "Landhi, Karachi, Pakistan"
}
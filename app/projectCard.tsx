import Image from "next/image"
import Link from "next/link"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

type Props = {
    project: {
        id: number;
        title: string;
        description: string;
        image: string;
        url: string;
        github?: string;
    };
};

function ProjectCard({ project }: Props) {
    return (
        <div className="group h-full flex flex-col bg-gradient-to-r from-[#b98694] to-[#a58d93] rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2">
            {/* image with hover overlay */}
            <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#02060B] hover:scale-110 transition-transform"
                    >
                        <FaExternalLinkAlt size={16}/>
                    </Link>
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View GitHub repository for ${project.title}`}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#02060B] hover:scale-110 transition-transform"
                        >
                            <FaGithub size={18}/>
                        </Link>
                    )}
                </div>
            </div>

            {/* text content */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#02060B]">{project.title}</h3>
                <p className="mt-3 text-sm text-[#030B14] text-opacity-80 flex-1">{project.description}</p>
                <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#02060B] hover:gap-3 transition-all"
                >
                    View Project <FaExternalLinkAlt size={12}/>
                </Link>
            </div>
        </div>
    )
}
export default ProjectCard
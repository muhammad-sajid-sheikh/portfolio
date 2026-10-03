"use client";
import Tilt from "react-parallax-tilt"
import Image from "next/image";

type Props = {
    service: {
        id: number;
        title: string;
        description: string;
        icon: string;
    };
};

function Servicecard({ service }: Props) {
    return (
        <Tilt
            className="h-full"
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={true}
            glareMaxOpacity={0.12}
            glareColor="#ffffff"
            glarePosition="all"
        >
            <div className="h-full flex flex-col shadow-2xl p-6 rounded-lg bg-gradient-to-r from-[#b98694] to-[#a58d93] transition-transform duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-white/25 flex items-center justify-center mb-2">
                    <Image src={service.icon} alt={`${service.title} icon`} width={30} height={30}/>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#02060B]">{service.title}</h3>
                <p className="mt-3 text-sm text-[#030B14] text-opacity-80 flex-1">{service.description}</p>
            </div>
        </Tilt>
    )
}
export default Servicecard
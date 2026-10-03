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
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            glareEnable={true}
            glareMaxOpacity={0.06}
            glareColor="#D4B483"
            glarePosition="all"
        >
            <div className="panel panel-hover h-full flex flex-col p-6">
                <div className="w-14 h-14 rounded-full border border-brand-gold/30 flex items-center justify-center mb-5">
                    <Image src={service.icon} alt={`${service.title} icon`} width={28} height={28} className="opacity-90"/>
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-white/50 flex-1 leading-relaxed">{service.description}</p>
            </div>
        </Tilt>
    )
}
export default Servicecard

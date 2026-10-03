import Image from "next/image";

type Props = {
    skill: {
        id: number;
        title: string;
        image: string;
        percentage: string;
    };
};

function Skillcard({ skill }: Props) {
    const { image, percentage, title } = skill;
    const percentValue = parseInt(percentage);

    return (
        <div className="panel panel-hover p-6 text-center">
            <Image src={image} alt={title} width={64} height={64} className="object-cover mx-auto opacity-90" />
            <h4 className="text-base mt-4 text-white font-semibold">{title}</h4>

            <div
                role="progressbar"
                aria-valuenow={percentValue}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${title} proficiency`}
                className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-4"
            >
                <div
                    className="h-full bg-brand-gold rounded-full transition-all duration-700"
                    style={{ width: percentage }}
                ></div>
            </div>
            <p className="mt-2 text-xs text-white/40 font-medium">{percentage}</p>
        </div>
    )
}
export default Skillcard

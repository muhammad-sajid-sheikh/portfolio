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
        <div className="p-6 hover:bg-[#178582]/15 hover:-translate-y-1 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900 border border-white/5">
            <Image src={image} alt={title} width={80} height={80} className="object-cover mx-auto rounded-md" />
            <h4 className="text-[18px] mt-4 text-[#BFA181] font-semibold">{title}</h4>

            <div
                role="progressbar"
                aria-valuenow={percentValue}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${title} proficiency`}
                className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden mt-4"
            >
                <div
                    className="h-full bg-gradient-to-r from-[#178582] to-[#DA7B93] rounded-full transition-all duration-700"
                    style={{ width: percentage }}
                ></div>
            </div>
            <p className="mt-2 text-xs text-[#BFA181]/70 font-medium">{percentage}</p>
        </div>
    )
}
export default Skillcard
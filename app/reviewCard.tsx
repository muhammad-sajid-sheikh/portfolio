import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type Props = {
    review: {
        name: string;
        review: string;
        rating: number;
        profession: string;
        image: string;
    }
}

function renderStars(rating: number) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<FaStar key={i} className="text-yellow-500"/>);
        } else if (i === fullStars && hasHalf) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500"/>);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-500"/>);
        }
    }
    return stars;
}

function Reviewcard({review}:Props){
    const {image, name, profession, rating, review:reviewText} = review;
    return(
        <div className="h-full flex flex-col rounded-md overflow-hidden bg-[#02060B] m-4 shadow-lg">
            <div className="p-6 flex-1">
                <Image src="/images/qouteu.png" alt="opening quote" width={20} height={20}/>
                <p className="text-[#BFA181] text-opacity-95 mt-2">{reviewText}</p>
                <Image src="/images/qouteb.png" alt="closing quote" width={20} height={20} className="ml-auto mt-2"/>
            </div>

            <div className="px-5 py-2.5 mb-3 w-fit mx-auto rounded-full flex items-center gap-2 bg-gradient-to-r from-[#178582] to-[#043533] text-white font-bold text-sm">
                <div className="flex items-center gap-0.5">
                    {renderStars(rating)}
                </div>
                <span>{rating}/5</span>
            </div>

            <div className="bg-gradient-to-r from-[#b98694] to-[#a58d93]">
                <div className="p-6 flex items-center space-x-6">
                    <div>
                        <Image src={image} alt={name} width={48} height={48} className="rounded-full border-2 border-white/40 object-cover"/>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-[#02060B]">{name}</h4>
                        <p className="text-base text-[#02060B]">{profession}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reviewcard
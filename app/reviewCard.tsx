import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type Props = {
    review: {
        name: string;
        review: string;
        rating: number;
        profession: string;
    }
}

function renderStars(rating: number) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<FaStar key={i} className="text-brand-gold" size={12}/>);
        } else if (i === fullStars && hasHalf) {
            stars.push(<FaStarHalfAlt key={i} className="text-brand-gold" size={12}/>);
        } else {
            stars.push(<FaRegStar key={i} className="text-brand-gold" size={12}/>);
        }
    }
    return stars;
}

// derive initials from a name, e.g. "Ayesha Khan" -> "AK"
function getInitials(name: string) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map(part => part[0]?.toUpperCase())
        .join("");
}

function Reviewcard({review}:Props){
    const {name, profession, rating, review:reviewText} = review;

    return(
        <div className="panel h-full flex flex-col m-4 p-6">
            <div className="flex-1">
                <div className="flex items-center gap-1 mb-4">
                    {renderStars(rating)}
                    <span className="text-xs text-white/40 ml-2">{rating}/5</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">&ldquo;{reviewText}&rdquo;</p>
            </div>

            <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/10">
                <div
                    aria-hidden="true"
                    className="w-11 h-11 rounded-full border border-brand-gold/30 bg-obsidian-900 flex items-center justify-center text-brand-gold text-sm font-bold shrink-0"
                >
                    {getInitials(name)}
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white">{name}</h4>
                    <p className="text-xs text-white/40">{profession}</p>
                </div>
            </div>
        </div>
    )
}
export default Reviewcard

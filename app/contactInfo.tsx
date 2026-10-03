import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa"
import { ContactData } from "@/data/data"

const contactItems = [
    {
        label: "Phone",
        value: String(ContactData.phone),
        icon: FaPhone,
        href: `tel:${String(ContactData.phone).replace(/[^\d+]/g, "")}`,
    },
    {
        label: "Email Address",
        value: String(ContactData.email),
        icon: FaEnvelope,
        href: `mailto:${ContactData.email}`,
    },
    {
        label: "Address",
        value: String(ContactData.address),
        icon: FaMap,
        href: undefined as string | undefined,
    },
];

function ContactInfo(){
    return(
        <div>
            {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                    <div key={item.label} className="group flex items-center space-x-8 mb-8 last:mb-0">
                        <div className="w-10 h-10 md:w-16 md:h-16 shrink-0 rounded-full bg-gradient-to-r from-[#178582] to-[#043533] flex items-center justify-center shadow-md shadow-black/30 transition-transform duration-300 group-hover:scale-105">
                            <Icon className="w-4 h-4 md:w-7 md:h-7 text-white"/>
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-lg sm:text-xl text-[#BFA181] font-bold">{item.label}</h3>
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="block text-base sm:text-lg text-[#BFA181] text-opacity-70 break-words hover:text-[#178582] transition-colors duration-200"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <p className="text-base sm:text-lg text-[#BFA181] text-opacity-70 break-words">{item.value}</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default ContactInfo

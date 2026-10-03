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
        <div className="space-y-6">
            {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                    <div key={item.label} className="panel panel-hover flex items-center gap-6 p-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-brand-gold/30 flex items-center justify-center">
                            <Icon className="w-4 h-4 md:w-5 md:h-5 text-brand-gold"/>
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-sm text-white/40 font-medium uppercase tracking-wide2">{item.label}</h3>
                            {item.href ? (
                                <a href={item.href} className="block text-base sm:text-lg text-white break-words hover:text-brand-gold transition-colors duration-200">
                                    {item.value}
                                </a>
                            ) : (
                                <p className="text-base sm:text-lg text-white break-words">{item.value}</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default ContactInfo

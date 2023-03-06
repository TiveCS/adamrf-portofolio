import { FontClashDisplay } from "@/pages/_app";
import Link from "next/link";

interface HeroLinkProps {
    text: string;
    href: string;
}

export default function HeroLink({ text, href }: HeroLinkProps) {
    return <Link href={href}>
        <div className={
            FontClashDisplay.className +
            ' font-semibold border-b border-adam-primary py-8 focus:bg-adam-primary focus:text-white hover:bg-adam-primary hover:text-white '
        }>
            {text}
        </div>
    </Link>
}
import { FontAuthor } from "@/pages/_app";
import Link from "next/link";

interface SocialLinkProps {
    text: string;
    href: string;
}

export default function SocialLink({ text, href }: SocialLinkProps) {
    return <Link href={href} className={FontAuthor.className + ' text-xs border border-adam-primary hover:bg-adam-primary hover:text-white rounded-full px-2 py-0.5'}>
        {text}
    </Link>
}
import SocialLink from "./SocialLink";

interface SocialsProps {
    className?: string;
}

export default function Socials(props: SocialsProps) {
    return <div className={props.className + " flex flex-row gap-x-3 pt-12 flex-grow justify-center items-center"}>
        <SocialLink text="WhatsApp" href="/" />
        <SocialLink text="Instagram" href="/" />
        <SocialLink text="Behance" href="/" />
    </div>
}
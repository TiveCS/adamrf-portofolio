import { FontAuthor } from "@/pages/_app";

interface SkillLabelProps {
    text: string;
}

export default function SkillLabel({ text }: SkillLabelProps) {
    return <span className={FontAuthor.className + ' text-xs md:text-base text-center border border-adam-primary px-2 py-0.5 rounded-md'}>
        {text}
    </span>
}
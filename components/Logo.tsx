import Image from "next/image";
import Link from "next/link";
import LogoPicture from '../public/assets/logo.png';


export default function Logo() {
    return <Link href={'/'}>
        <Image src={LogoPicture} alt={'Adamrf'} />
    </Link>
}
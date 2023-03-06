import Image from "next/image";
import Link from "next/link";
import LogoPicture from '../public/assets/logo-with-text.svg';


export default function LogoFull() {
    return <Link href={'/'}>
        <Image priority src={LogoPicture} alt={'Adamrf'} className='w-28 h-auto md:w-auto md:h-auto' />
    </Link>
}
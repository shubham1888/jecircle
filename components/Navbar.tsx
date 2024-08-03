import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./theme-toggler"
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="px-8 md:px-20 py-4 dark:text-white flex justify-between items-center text-2xl bg-black bg-opacity-5 dark:bg-opacity-20">
            <div className="logo">
                <Link href={"/"}>
                    <Image src={"/jec.png"} height={100} width={100} alt="Jec Logo" />
                </Link>
            </div>
            <div className="md:flex justify-between items-center gap-6 hidden">
                <Link href={"/"} className="hover:text-blue-400">Home</Link>
                <Link href={"/about"} className="hover:text-blue-400">About</Link>
                <Link href={"/joinjec"} className="hover:text-blue-400">Join JEC</Link>
                <Link href={"/admin"} className="hover:text-blue-400">Admin</Link>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <div><ModeToggle /></div>
            </div>
            <div className="md:hidden">
                <FaBars />
            </div>
        </nav>
    )
}

export default Navbar
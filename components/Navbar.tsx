import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./theme-toggler"
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

const Navbar = () => {
    return (
        <nav className="px-20 py-4 dark:text-white flex justify-between items-center text-2xl bg-black bg-opacity-5 dark:bg-opacity-20">
            <div className="logo">
                <Link href={"/"}>
                    <Image src={"/jec.png"} height={100} width={100} alt="Jec Logo" />
                </Link>
            </div>
            <div className="flex justify-between items-center gap-6">
                <Link href={"/"} className="hover:text-blue-400">Home</Link>
                <Link href={"/about"} className="hover:text-blue-400">About</Link>
                <Link href={"/admin"} className="hover:text-blue-400">Admin</Link>
                <SignedOut>
                    <div className="hover:text-blue-400">
                        <SignInButton />
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <div><ModeToggle /></div>
            </div>
        </nav>
    )
}

export default Navbar
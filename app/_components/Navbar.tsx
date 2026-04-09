import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800/50">
            <div className="flex flex-row justify-center">
                {/* Logo section */}
                <div className="flex flex-col p-2 align-middle">
                    <div className="h-20 bg-gray-500"/>
                    <h1 className="p-2">GHKL Image here</h1>
                </div>
                {/* Links section */}
                <div className="flex flex-col p-2">
                    {/* Church verse placeholder */}
                    <div className="h-20 bg-gray-500"/>
                    {/* Navigation links */}
                    <div className="flex flex-row p-2 justify-end">
                        <Link href="/" className="p-2">Home</Link>
                        <Link href="/about" className="p-2">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

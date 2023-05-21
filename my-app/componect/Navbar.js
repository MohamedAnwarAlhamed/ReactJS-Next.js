import Link from "next/link"

function Navbar()
{
    return (
        <div>
            <h1>Navbar</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href= "/posts">Post</Link>
        </div>
    )
}

export default Navbar
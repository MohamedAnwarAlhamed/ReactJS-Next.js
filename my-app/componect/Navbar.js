import Link from "next/link"
import styles  from "../styles/Navbar.module.css"

function Navbar()
{
    return (
        <div className={styles.bg}>
            <h1>Navbar</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href= "/posts">Post</Link>
        </div>
    )
}

export default Navbar
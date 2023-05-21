import Navbar from "./Navbar"

function Layout(props) {
    return (
        <div>
            <Navbar />
            <h1>hello from layout</h1>
            {props.children}
            <footer>footer</footer>
        </div>
    )
}

export default Layout
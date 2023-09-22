import "./navbar.scss"
export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <span>get<span className="green">linked</span></span>
                </div>
                <div className="nav-right">
                    <ul className="nav-right-items">
                        <li className="nav-links">Timeline</li>
                        <li className="nav-links">Overview</li>
                        <li className="nav-links">FAQs</li>
                        <li className="nav-links">Contact</li>
                    </ul>

                    <button className="nav-btn">
                        Register
                    </button>
                </div>
            </nav>
            <div className="nav-line"></div>
        </>
    )
}
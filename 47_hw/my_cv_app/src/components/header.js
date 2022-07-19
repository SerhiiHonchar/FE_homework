import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav-list">
                <ul className="header-list">
                    <li className="header-list-item"><Link to="/">Home page</Link></li>
                    <li className="header-list-item"><Link to="/info">Info</Link></li>
                    <li className="header-list-item"><Link to="/skills">Skills</Link></li>
                    <li className="header-list-item"><Link to="/education">Education</Link></li>
                    <li className="header-list-item"><Link to="/experience">Experience</Link></li>
                    <li className="header-list-item"><Link to="/hobbies">Hobbies</Link></li>
                </ul>
            </nav>

            <span className="instruction">Happy to see you here. Please choose the page.</span>
        </header>
    )
}

export default Header;
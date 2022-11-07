import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <il className="nav-item">
                    <Link className="nav-link" to="/"> Home </Link>
                </il>
                <il className="nav-item">
                    <Link className="nav-link" to="/GroupedTeamMembers"> Teams </Link>
                </il>
            </ul>

        </nav>
    )

}

export default Nav
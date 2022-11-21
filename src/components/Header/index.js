import {withRouter,Link} from 'react-router-dom'
import './index.css'

const Header=()=>(
    <nav className='nav-bar'>
        <ul className='nav-bar-ul-list'>
        <Link to='/' className='nav-link'>
            <li className='nav-bar-list-item'>Home</li>
        </Link>
        <Link to='/about-the-developer' className='nav-link'>
            <li className='nav-bar-list-item'>
                About
            </li>
            </Link>
            <Link to='/projects' className='nav-link'>
            <li className='nav-bar-list-item'>Projects</li>
            </Link>
        </ul>
    </nav>
)

export default withRouter(Header)
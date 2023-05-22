import {withRouter,Link} from 'react-router-dom'
import {AiOutlineHome,AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsChatLeftDotsFill} from 'react-icons/bs'

import {FcAbout} from 'react-icons/fc'
import './index.css'

const Header=()=>(
    <nav className="nav-container">
    <div className='nav-bar-sub-container'>
                <div className="flex-row-container">
                <h1 className="nav-name">Karthik</h1>
                <span className="nav-dot">.</span>
                </div>
                <div className='small-view-container'>
                <Link to='/' className="icon-container">
                    <AiOutlineHome size='24' />
                </Link>  
                <Link to='/about-the-developer' className="icon-container">
                    <FcAbout size='24'/>
                </Link>
                <Link to='/projects' className="icon-container">
                    <AiOutlineFundProjectionScreen size='24'/>
                </Link>
                </div>
                <div className='large-view-container'>

                <ul className="nav-ul">
                    <Link to='/' className='nav-link'>
                    <p className='list-item'>Home</p></Link>
                    <Link to='/about-the-developer' className='nav-link'>
                    <p className='list-item'>About</p>
                    </Link>
                    <Link to='/projects' className='nav-link'>
                    <p className='list-item'>Projects</p>
                    </Link>
                </ul> 
                </div>
    </div>               
                <a href='skype:live:b7f2f2a70ceeb0a7?chat' target='_blank' rel='noreferrer' className='chat-btn'> 
                    <BsChatLeftDotsFill size='28'/>
                </a>
                
            </nav>
)

export default withRouter(Header)
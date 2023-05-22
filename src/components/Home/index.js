import {Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer/index'
import Header from '../Header/index'
import {HiReply} from 'react-icons/hi'
 import {FiArrowUpRight} from 'react-icons/fi'
import './index.css'

class Home extends Component{

    handleSendButtonClick = () => {
        const email="iamkarthikricky@gmail.com"
        const body = "I am interested in your profile."
        const subject="Job Opening"
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      };

    render(){
        return(
            <>
            <div className='home-main-container'>
             <div className="profile-container">
                <Header />
            <div className="profile-sub-container">
                <div className="flex-row-container">
                    <h1 className="salutation">Hi! I am</h1> 
                    <button className="full-stack-button">FullStack Developer</button>
                </div>
                <h1 className="salutation">Karthik Maheshwarapu</h1>
                <p className="home-description">An Aspiring MERN Fullstack Developer.</p>
                <div className="flex-row-container">      
                    <button className="hire-me-btn" onClick={this.handleSendButtonClick}>Hire Me
                        <HiReply className='hire-me' />
                    </button>
                    <Link to='/projects' className='nav-link'>
                    <button className="projects-btn">Projects
                    <FiArrowUpRight color="#f9f9f9" size='16' /></button>
                    </Link>
                </div>
                <div className="flex-container">
                    <div className="flex-column-container">
                        <p className="num-count">48</p>
                        <span className="context">Projects Done</span>
                    </div>
                    <div className="flex-column-container">
                        <p className="num-count">Contact</p>
                        <span className="context">iamkarthikricky@gmail.com</span>
                    </div> 
                </div>
            </div>
        </div> 
        </div> 
        <Footer /> 
        </>
        )
    }
}

export default Home
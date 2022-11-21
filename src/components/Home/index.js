import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiOutlineCopy,AiFillCopy} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import Footer from '../Footer/index'
import Header  from '../Header/index'

import './index.css'

class Home extends Component{
    state={isCopied:false}

    onCopyEmail=()=>{
        this.setState(preValue=>({isCopied:!preValue.isCopied}))
        navigator.clipboard.writeText("iamkarthikricky@gmail.com");
    }

    render(){
        const{isCopied}=this.state
        const displayCopy=isCopied ? <AiFillCopy color='#ffffff' size='22'/>:<AiOutlineCopy color="#ffffff" size='22'/>

        return(
            <div className='home-container'>
            <Header />
                <h1 className='text-color'>
                    Thankyou For Visiting my site !!<br /><br/>
                    Before moving Further, let's get to know about the developer
                </h1>
                <Link to='/about-the-developer' className='btn'>
                <button className='btn'>Click Me !!</button>
                </Link>
                <h1 className='text-color'>
                This website is developed using React JS.
                </h1>
                <div className='email-container'>
                    <MdEmail color='#ffffff' size='24'/>
                    <p className='email'>Email :- iamkarthikricky@gmail.com</p>
                    <button className='copy-btn' onClick={this.onCopyEmail}>
                        {displayCopy}
                    </button>
                </div>
                {isCopied && <p className='copy-success-text'>Email id Copied to Clipboard !!!</p>}
                <Footer />
            </div>
        )
    }
}

export default Home
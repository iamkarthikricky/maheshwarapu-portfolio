import './index.css'

import {FaReact,FaLinkedin,FaTwitterSquare,FaWhatsappSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
const Footer=()=>(
    <div className='footer-main-container'>
    <div className='footer-container'> 
        <div className='website-logo-container'>  
            <p className='footer-logo-description'>Karthik Maheshwarapu</p>
        </div>
        <div className='contact-us-btn-container'>
        <a href='https://www.linkedin.com/in/maheshwarapu-karthik/' target='_blank' rel='noreferrer' className='anchor'>
            <button className='social-btn'>
                <FaLinkedin color='#ffffff' size='24'/>
            </button>
            </a>
            <a href='https://www.facebook.com/karthikmaheshwarapu/' target='_blank' rel='noreferrer'>
            <button className='social-btn'>
                <BsFacebook color='#ffffff' size='24'/>
            </button>
            </a>
            <a href='https://twitter.com/iamkarthikricky' target='_blank' rel='noreferrer'>
            <button className='social-btn'>
                <FaTwitterSquare color='#ffffff' size='24'/>
            </button>
            </a>
            <a href='https://wasap.my/+917036842378' target='_blank' rel='noreferrer'>
            <button className='social-btn'>
                <FaWhatsappSquare color='#ffffff' size='24'/>
            </button>
            </a>
            <a href='https://www.instagram.com/i_am_karthik_ricky/' target="_blank" rel='noreferrer'>
            <button className='social-btn'>
                <AiFillInstagram color='#ffffff' size='24'/>
            </button>
            </a>
        </div>
        </div>
        </div>
    )

export default Footer    
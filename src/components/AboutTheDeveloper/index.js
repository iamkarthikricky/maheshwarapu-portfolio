import Header from '../Header/index'
import Footer from '../Footer/index'
import './index.css'

const SkillDataList=[
    {id:1,skillImg:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1668410453/Own-Website/logo-2582748_640_zpe3qn.png',skillName:'HTML'},{
        id:2,skillImg:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1668419679/Own-Website/css-img_e0yhhi.png',skillName:'CSS'
    },{
        id:3,skillImg:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1668419679/Own-Website/javascript-img_ze9d3g.png',skillName:'Java Script'
    },{
        id:4,skillImg:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1668419679/Own-Website/nodejs-img_xfke5j.png',skillName:'Node JS'
    },{
        id:5,skillImg:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1668420066/Own-Website/express-logo_rtais6.png',skillName:'Express JS'
    },{
        id:6,skillImg:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1668419679/Own-Website/reactjs-img_vo3hjr.png',skillName:'React JS'
    },{
        id:7,skillImg:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1680869298/Own-Website/Screenshot_2023-04-07_173719_uasbjn.png',skillName:'SQL Lite'
    },{
        id:8,skillImg:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1668420066/Own-Website/microsoft-sql-server4529_r0bsqh.jpg',skillName:'Microsoft SQL Server'
    },
    {
        id:9,skillImg:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1668419679/Own-Website/python-img_lwsuyi.png',skillName:'Python'
    }
]

const SkillCard=props=>{
    const{skillData}=props
    const{skillImg,skillName}=skillData

    return(
        <div className='skill-card'>
            <img src={skillImg} alt={`${skillName}-img`} className='skill-image'/>
            <p className='skill-name'>{skillName}</p>
        </div>
    )
}

const About=()=>(
    <>
    <div className='about-main-container'>
    <Header />
        <div className='developer-content'>
        <img src='https://res.cloudinary.com/dlwydxzdi/image/upload/v1668405289/Own-Website/20211120_111711_pock4l.jpg' alt='developer-img' className='developer-image' />
        <p className='developer-name'>Maheshwarapu Karthik</p>
        <p className='developer-education'>B.Tech - E.C.E - 2021</p>
        <a href='https://drive.google.com/file/d/1epjGhWtTRIbEQrKJl-QuI1FBja82nUty/view?usp=share_link' target='_blank' rel='noreferrer' className='nav-link'>
            <button className='resume-btn'>
                View Resume
            </button>
        </a>
        </div>
        <div className='developer-description-container'>
            <p className='developer-description'>I am Maheshwarapu Karthik, I am from Telangana,India. I completed my graduation in Bachelor of Technology from SRM Institute of Science and Technology, Ramapuram, Chennai specialized in Electronics and Communication Engineering. I am an Aspiring FullStack Developer. I have gained knowledge on almost all the Full Stack development Technologies and have built some of the projects from the knowledge I gained. I am looking for a FullStack Developer role.</p>
            <div className='skills-main-container'>
            <h1 className='skills-main-heading'>Skills</h1>
            <div className='skills-container'>
                    {SkillDataList.map(eachSkill=>(
                        <SkillCard key={eachSkill.id} skillData={eachSkill} />
                    ))}
            </div>
            </div>
            </div>
        </div>
        <Footer />
        </>
)

export default About
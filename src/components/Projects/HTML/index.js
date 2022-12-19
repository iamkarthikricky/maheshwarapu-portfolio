import { BsBoxArrowUpRight } from 'react-icons/bs'
import './index.css'
const projectItems=[
    {
        id:1,
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671431049/Own-Website/Static%20Website/Screenshot_20221219_115358_xm5opv.png',        projectTitle:'Tourism Website',
        altText:'tourism-website',
        description:'This is a static website developed using HTML and CSS.',
        url:'https://tourism-static.netlify.app/'
    },
    {
        id:2,
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671430964/Own-Website/Static%20Website/Screenshot_20221219_115226_wsefv9.png',        projectTitle:'Product Launch',
        altText:'product-launch',
        description:'This is a Responsive Website developed using HTML, CSS and Bootstrap.',
        url:'https://product-launch.netlify.app/'
    },
    {
        id:3,
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671430878/Own-Website/Static%20Website/Screenshot_20221219_115103_uwoods.png',
        altText:'food-munch',
        projectTitle:'Food Munch',
        description:'This is a Responsive Website developed using HTML, CSS and Bootstrap.',
        url:'https://food-munch-website.netlify.app/'
    },{
        id:4,
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671431239/Own-Website/Static%20Website/Screenshot_20221219_115709_ebfp2b.png',
        altText:'climate-stats',
        projectTitle:'Climate Stats',
        description:'This is a Responsive Website developed using HTML, CSS and Bootstrap.',
        url:'https://climate-stats.netlify.app/'
    }

]

const ProjectCard=props=>{
    const{project}=props
    const{imgUrl,projectTitle,description,url,altText}=project
    return(
        <li className='project-list-item'>
            <img src={imgUrl} alt={altText} className='img'/>
            <h1 className='html-project-title'>{projectTitle}</h1>
            <p className='html-project-description'>{description}</p>
            <a href={url} target='_blank' rel='noreferrer' className="visit-link">
                    Visit <BsBoxArrowUpRight size='14'/>
                </a>
        </li>
    )
}
const BasicHTML=()=>(
    <div className='html-main-container'>
        <h1 className='html-heading'>HTML Projects</h1>
        <p className='html-para'>This page contains both Static and Responsive Websites of  HTML projects.</p>
        <ul className='html-ul-list'>
            {projectItems.map(eachItem=>(
                <ProjectCard key={eachItem.id} project={eachItem} />
            ))}
        </ul>
    </div>
)

export default BasicHTML
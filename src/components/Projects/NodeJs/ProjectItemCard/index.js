import {AiFillGithub} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'

import './index.css'

const ProjectItemCard=props=>{
    const{project}=props
    const{projectName,description,url,techniques}=project
    return(
        <div className='project-card'>
            <h1 className='project-name'>{projectName}</h1>
            <p className='project-description'>{description}</p>
            <div className='flex-row'>
                <p className='github-link'>Visit ➡️</p>
                <a href={url} target="_blank" rel='noreferrer' className='github-link'>
                    <AiFillGithub size='28' />
                </a>
            </div>
            <ul className='tags-main-container'>
                {techniques.map(eachItem=>(
                    <li className="tag-container" key={eachItem.id}>
                        <BsDot />
                        <p className='tagName'>{eachItem.tagName}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectItemCard
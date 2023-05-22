import {BsBoxArrowUpRight,BsDot} from 'react-icons/bs'

import './index.css';


const ProjectCard=props=>{
    const{cardItem}=props
    const{title,description,url,tagsList}=cardItem 
    return(
            <div className="card-container">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <ul className="tags-main-container">
                    {tagsList.map(eachTag=>(
                        <li className="tag-container" key={eachTag.id}>
                            <BsDot color='white'/>
                            <p className="tag-name">{eachTag.tagName}</p>
                        </li>
                    ))}
                </ul>
                <a href={url} target='_blank' rel='noreferrer' className="link">
                    Visit <BsBoxArrowUpRight size='14'/>
                </a>
            </div>
    )
}

export default ProjectCard
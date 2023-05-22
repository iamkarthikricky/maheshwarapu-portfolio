import { Component } from 'react'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

import './index.css'
import { FailureView, LoadingView } from '../Miscellaneous'

const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'INPROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
}


const ProjectCard=props=>{
    const {projectItem}=props 
    const{imgUrl,altText,title,description,url,github}=projectItem
    return(
        <li className="js-project-card">
            <img src={imgUrl} alt={altText} className='img'/>
                <h1 className='project-title'>{title}</h1>
                <p className='project-bio'>{description}</p>
                <div className='url-main-container'>
                <div className='url-container'>
                    <p className='a-tag'>Visit</p>
                    <a href={url} target="_blank" rel="noreferrer">
                        <BsBoxArrowUpRight color='#FF9900' size='16px'/>
                    </a>
                </div>
                <div className='url-container'>
                    <p className='a-tag'>View</p>
                    <a href={github}>
                        <AiFillGithub color='#FF9900' size='22px'/>
                    </a>
                </div>
                </div>
           
        </li>
    )
}

class JavaScriptProjects extends Component{

    state={apiStatus:apiStatusConstants.initial,projectList:[]}

    componentDidMount(){
        this.getJSProjects()
    }

    getJSProjects=async ()=>{
        this.setState({apiStatus:apiStatusConstants.inProgress})
        const url='https://portfolio-api-f4rq.onrender.com/javascript'

        const options={
            method:'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        }

        const response=await fetch(url,options)
        if (response.ok){
            const fetchedData=await response.json()
    
            const updatedFetchedData = fetchedData.map(eachProject=>({
                id:eachProject.project_id,
                title:eachProject.project_title,
                imgUrl:eachProject.img_url,
                altText:eachProject.alt_text,
                description:eachProject.description,
                url:eachProject.project_url,
                github:eachProject.github_url
            }))
            this.setState({apiStatus:apiStatusConstants.success,projectList:updatedFetchedData})
        }    
        else{
            this.setState({apiStatus:apiStatusConstants.failure})
        }
    }

    JSProjectsView=()=>{
        const{projectList}=this.state
        return(
        <div className='js-main-container'>
            <h1 className='js-main-heading'>JavaScript Projects</h1>
            <ul className='js-projects-container'>
                {projectList.map(eachItem=>(
                    <ProjectCard key={eachItem.id} projectItem={eachItem} />
                ))}
            </ul>
        </div>
        )
    }
    renderJSProjects=()=>{
        const{apiStatus}=this.state 
        switch(apiStatus){
            case apiStatusConstants.success:
                return this.JSProjectsView()
            case apiStatusConstants.inProgress:
                return <LoadingView />
            case apiStatusConstants.failure:
                return <FailureView />
            default:
                return null                   
        }
    }
    render(){
        return(
            <>
                {this.renderJSProjects()}
            </>
        )
    }
}

export default JavaScriptProjects
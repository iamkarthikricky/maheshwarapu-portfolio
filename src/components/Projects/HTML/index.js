import { Component } from 'react'
import { FailureView,LoadingView } from '../Miscellaneous'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import './index.css'


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

const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'INPROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
}


class BasicHTML extends Component{

    state={projectItems:[],apiStatus:apiStatusConstants.initial}

    componentDidMount(){
        this.getHTMLProjects()
    }

    getHTMLProjects=async()=>{
        this.setState({apiStatus:apiStatusConstants.inProgress})
        const url='https://portfolio-api-f4rq.onrender.com/html'

        const options={
            method:'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        }

        const response=await fetch(url,options)
        if (response.ok){
            const fetchedData=await response.json()

            const updatedFetchedData=fetchedData.map(eachItem=>({
                projectId:eachItem.project_id,
                imgUrl:eachItem.img_url,
                altText:eachItem.alt_text,
                projectTitle:eachItem.project_title,
                description:eachItem.description,
                url:eachItem.url,
            }))

            this.setState({projectItems:updatedFetchedData,apiStatus:apiStatusConstants.success})

        }
        else{
            this.setState({apiStatus:apiStatusConstants.failure})
        }
    }


    renderProjects=()=>{
        const {projectItems}=this.state
        return(
        <div className='html-main-container'>
        <h1 className='html-heading'>HTML Projects</h1>
        <p className='html-para'>This page contains both Static and Responsive Websites of  HTML projects.</p>
        <ul className='html-ul-list'>
            {projectItems.map(eachItem=>(
                <ProjectCard key={eachItem.projectId} project={eachItem} />
            ))}
        </ul>
    </div>
        )
    }

    renderHTMLProjects=()=>{
        const{apiStatus}=this.state 
        switch(apiStatus){
            case apiStatusConstants.success:
                return this.renderProjects()  
            case apiStatusConstants.inProgress:
                return <LoadingView />   
            case apiStatusConstants.failure:
                return <FailureView />     
            default:
                return null     
        }
    }


    

    render(){
        return(<>
            {this.renderHTMLProjects()}</>
        )
        
    }
}

export default BasicHTML
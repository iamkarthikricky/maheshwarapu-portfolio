import { Component } from "react";
import { Chrono } from "react-chrono";
import ProjectItemCard from '../ProjectItemCard/index'
import { FailureView, LoadingView } from "../../Miscellaneous";


const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'INPROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
}

class Authentication extends Component{
    state={apiStatus:apiStatusConstants.initial,projectsList:[]}

    componentDidMount(){
        this.getProjects()
    }

    getProjects=async()=>{
        this.setState({apiStatus:apiStatusConstants.inProgress})
        const url='https://portfolio-api-f4rq.onrender.com/nodejs/rest-api'

        const options={
            method:'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        }

        const response=await fetch(url,options)
        if (response.ok){
            const fetchedData = await response.json()
            const updatedFetchedData = await fetchedData.map(eachProject=>({
                id:eachProject.project_id,
                title:eachProject.project_title,
                projectName:eachProject.project_name,
                description:eachProject.description,
                githubUrl:eachProject.github_url,
                techniques:eachProject.techniques.map(technique=>({
                    id:technique.tag_id,
                    tagName:technique.tag_name
                }))
            }))
            this.setState({apiStatus:apiStatusConstants.success,projectsList:updatedFetchedData})
        }
        else{
            this.setState({apiStatus:apiStatusConstants.failure})
        }
    }

    renderProjects=()=>{
        const{apiStatus}=this.state 
        switch(apiStatus){
            case apiStatusConstants.success:
                return this.projectsView()
            case apiStatusConstants.inProgress:
                return <LoadingView />
            case apiStatusConstants.failure:
                return <FailureView />
            default:
                return null                   
        }
    }

    projectsView=()=>{
        const{projectsList}=this.state
        return(
            <Chrono theme={{ cardBgColor: "#daf2dc"}} items={projectsList} mode={"VERTICAL_ALTERNATING"}>
            {projectsList.map(eachProject=>(
                <ProjectItemCard key={eachProject.id} project={eachProject}/>
            ))}
    </Chrono>
        )
    }
    

    render(){
        return(
        <>
            {this.renderProjects()}
        </>
        )
    }


    
}

export default Authentication
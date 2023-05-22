import { Component } from "react";
import {Chrono} from 'react-chrono'
import ProjectCard from '../ProjectCard'
import { FailureView, LoadingView } from '../../../../Miscellaneous';


const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'INPROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
}

class ClassComponents extends Component{
    state={apiStatus:apiStatusConstants.initial,projectsList:[]}

    componentDidMount(){
        this.getProjects()
    }

    getProjects=async()=>{
        this.setState({apiStatus:apiStatusConstants.inProgress})
        const url='https://portfolio-api-f4rq.onrender.com/reactjs/class-components'

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
                title:eachProject.project_name,
                description:eachProject.description,
                url:eachProject.website_url,
                tagsList:eachProject.tagsList.map(eachTag=>({
                    id:eachTag.tag_id,
                    tagName:eachTag.tag_name
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
                return <LoadingView/>
            case apiStatusConstants.failure:
                return <FailureView />
            default:
                return null                   
        }
    }

    projectsView=()=>{
        const{projectsList}=this.state
        return(
            <Chrono theme={{ cardBgColor: "#000000"}} items={projectsList} mode={"VERTICAL_ALTERNATING"}>
            {projectsList.map(eachProject=>(
                <ProjectCard key={eachProject.id} cardItem={eachProject}/>
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


export default ClassComponents
import RestApi from "../RestApi"
import Authentication from "../Authentication/index"

const ProjectCard=props=>{
   
    const demo=()=>{
        const{activeTopic}=props
        switch (activeTopic){
            case 'rest-api':
                return <RestApi />
            case 'authentication':
                return <Authentication />    
            default:
                return null    
        } 
}
    return(
       <div>
        {demo()}
       </div>
    )
}

export default ProjectCard
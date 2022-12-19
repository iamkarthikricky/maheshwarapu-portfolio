import { Component } from "react"

import ClassComponents from "./ReactProjects/ClassComponents";
import WorkingWithLists from "./ReactProjects/WorkingWithLists";
import ComponentLifeCycle from "./ReactProjects/ComponentLifeCycle";

import './index.css';
import ReactRouting from "./ReactProjects/ReactRouting";


class ChronoTab extends Component{

    getFilteredProjects=()=>{
        const{activeTopic}=this.props 
        switch (activeTopic){
            case 'Class Components':
                return <ClassComponents />
            case 'Working with Lists':
                return <WorkingWithLists />
            case 'Component Life Cycle':
                return <ComponentLifeCycle />
            case 'React Routing':
                return <ReactRouting />        
            default:
                return null    
        }
    }
    render(){
        return(
            <div className="chrono-container">
                {this.getFilteredProjects()}
            </div>
        )
    }
}

export default ChronoTab
import { Component } from "react";
import Header from '../Header/index';

import BasicHTML from "./HTML";
import JavaScriptProjects  from "./JavaScript";
import NodeJs from "./NodeJs/index";
import ReactProjects from "./ReactJs/index";

import './index.css'


const TabItem=[
    {
        tabId:1,
        displayText:'HTML'
    },
    {
        tabId:2,
        displayText:'JavaScript'   
    },
    {
        tabId:3,
        displayText:'Node JS'   
    },
    {
        tabId:4,
        displayText:'React JS'   
    }
]

const SkillName=props=>{
    const{onSkill,data,activeSkill}=props 
    const{tabId,displayText}=data
    const onSkillClick=()=>{
        onSkill(tabId)
    }

    const activeSkillTab=activeSkill ? 'active-skill':''

    return(
        <li className={`skill-list-item ${activeSkillTab}`} onClick={onSkillClick}>
           <p>{displayText}</p>
        </li>
    )
}

class Projects extends Component{

    state={activeTab:TabItem[0].tabId}

    onSkill=eachItem=>{
        this.setState({activeTab:eachItem})
    }

    displayProjects=()=>{
        const{activeTab}=this.state
        switch(activeTab){
            case 1:
                return <BasicHTML />
            case 2:
                return <JavaScriptProjects />
            case 3:
                return <NodeJs />  
            case 4:
                return <ReactProjects />    
            default:
                return <h1 className="skill-name">Not Found</h1> 
        }
    }

    render(){
        const{activeTab}=this.state
        return(
            <div className="project-container">
                 <Header />
           <div className="projects-main-container">
                <div className="project-skill-tab">
                    <ul className="skill-ul-list">
                        {TabItem.map(eachItem=>(
                            <SkillName key={eachItem.tabId} data={eachItem} onSkill={this.onSkill} activeSkill={activeTab===eachItem.tabId} />
                        ))}
                    </ul>
                </div>
                <div className="projects-container">
                {this.displayProjects()}
                </div>
           </div>
           </div>
          
        )
    }
}


export default Projects
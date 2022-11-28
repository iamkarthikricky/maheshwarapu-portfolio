import { Component } from "react";
import ChronoTab from "../ChronoTab";

import './index.css'

const TabItem=[
    {
        tabId:1,
        displayText:'HTML & CSS'
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
    const{onSkill,data}=props 
    const{tabId,displayText}=data
    const onSkillClick=()=>{
        onSkill(tabId)
    }

    return(
        <li className="skill-name">
            <button onClick={onSkillClick} className="skill-btn">{displayText}</button>
        </li>
    )
}

class Projects extends Component{

    state={activeTab:TabItem[0].tabId}

    onSkill=eachItem=>{
        this.setState({activeTab:eachItem})
    }

    render(){
        const{activeTab}=this.state

        return(
           <div className="projects-main-container">
                <div className="project-skill-tab">
                    <ul className="skill-ul-list">
                        {TabItem.map(eachItem=>(
                            <SkillName key={eachItem.tabId} data={eachItem} onSkill={this.onSkill} />
                        ))}
                    </ul>
                </div>
                <div className="chrono-container">
                    <ChronoTab activeTab={activeTab}/>
                </div>
           </div>
        )
    }
}



export default Projects
import { Component } from "react";
import ChronoTab from "./ReactChrono/index";

import './index.css'


const topicsList=[
    {
        id:'Class Components',
        topicName:'Class Components'
    },
    {
        id:'Working with Lists',
        topicName:'Working With Lists'
    },
    {
        id:'Component Life Cycle',
        topicName:'Component Life Cycle'
    },
    {
        id:'React Routing',
        topicName:'React Routing'
    }
]

const TopicsTab=props=>{
    const{onToggleTopic,topicObj,isActive}=props
    const{id,topicName}=topicObj
    const onTopicClick=()=>{
        onToggleTopic(id)
    }
    const activeTopic=isActive ? 'active-topic':''
    return(
        <li>
        <button onClick={onTopicClick} className={`topic-btn ${activeTopic}`}>{topicName}</button>
    </li>
    )
}

class ReactProjects extends Component{
    state={activeTopic:topicsList[0].id}

    onToggleTopic=id=>{
       this.setState({activeTopic:id})
    }

    render(){
        const{activeTopic}=this.state 
        return(
            <div className="react-container">
                <h1 className="main-heading">React JS Projects</h1>
                <ul className="topic-container">
                    {topicsList.map(eachTopic=>(
                       <TopicsTab key={eachTopic.id} topicObj={eachTopic} onToggleTopic={this.onToggleTopic} isActive={activeTopic===eachTopic.id}/>
                    ))}
                </ul>
                <ChronoTab activeTopic={activeTopic}/>
        </div>
        )
    }
}

export default ReactProjects
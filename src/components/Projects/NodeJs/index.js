import { Component } from 'react'
import ProjectCard from './ProjectCard'
import './index.css'

const expressTopics=[
    {
        id:'rest-api',
        topicName:'Rest API'
    },
    {
        id:'authentication',
        topicName:'Authentication'
    }
]

const TopicsTab=props=>{
    const{onToggleTopic,topic,isTopicActive}=props 
    const{id,topicName}=topic

    const activeTopicBtn=isTopicActive ? 'activeTopic':'non-active'

    const topicChange=()=>(
        onToggleTopic(id)
    )
    return(
        <li className='topic-list-item'>
            <button onClick={topicChange} className={activeTopicBtn}>{topicName}</button>
        </li>
    )
}

class NodeJs extends Component{
    state={activeTopic:expressTopics[0].id}

    onToggleTopic=id=>{
        this.setState({activeTopic:id})
    }

    render(){
        const{activeTopic}=this.state 
        return(
            <div className='nodejs-container'>
                <h1 className='main-heading'>Node JS & Express JS Projects</h1>
                <p className='html-para'>This Projects in Node JS mostly consists of Express JS , the server side Web Application Framework for Node JS.</p>
                <ul className='topics-container'>
                {expressTopics.map(eachTopic=>(
                    <TopicsTab key={eachTopic.id} topic={eachTopic} onToggleTopic={this.onToggleTopic} isTopicActive={activeTopic===eachTopic.id}/>
                ))}
                </ul>
                <ProjectCard activeTopic={activeTopic}/>
            </div>
        )
    }
}

export default NodeJs
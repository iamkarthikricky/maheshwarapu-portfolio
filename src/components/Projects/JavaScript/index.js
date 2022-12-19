import {BsBoxArrowUpRight} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

import './index.css'

const projectList=[
    {
        id:1,
        title:'Simple Todo',
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671440087/Own-Website/JavaScript/Screenshot_20221219_021507_ptxmfz.png',
        description:'Using this application, A user can be able to add his todo he/she can be able to delete it after completing the todo.This application uses the local storage to store the TODO list so that even after refreshing the page the added TODO won\'t be deleted.',
        url:'https://js-todos-application.netlify.app/',
        github:'https://github.com/iamkarthikricky/js-todos.git'
    },
    {
        id:2,
        title:'Chat Bot',
       imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671440088/Own-Website/JavaScript/Screenshot_20221219_021538_yzbzh3.png',description:'This application is a small demo of a Simple Chatbot, the prefilled suggestions in the Javascript array will be displayed randomly after the user enter\'s valid keyword.',
        url:'https://chatbot-js.netlify.app/',
        github:'https://github.com/iamkarthikricky/js-chatBot.git'
    },
    {
        id:3,
        title:'Word Cloud',
       imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671440088/Own-Website/JavaScript/Screenshot_20221219_021820_boccks.png',description:'This application is a practical use of cloud,whenever a user enters a word and clicks enter the word be added to the Javascript array and randomly font size will be applied to that word and it will be added to the existing cloud.',
        url:'https://js-word-cloud.netlify.app/',
        github:'https://github.com/iamkarthikricky/js-wordCloud.git'
    },
    {
        id:4,
        title:'Time Converter',
       imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671440089/Own-Website/JavaScript/Screenshot_20221219_021955_jgcdnk.png',description:'This project enables a user to convert the hours and minutes into the seconds. This is developed using JavaScript',
        url:'https://js-time-converter.netlify.app/',
        github:'https://github.com/iamkarthikricky/js-timeConverter.git'
    },
    {
        id:5,
        title:'Wikipedia Search',
       imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671440089/Own-Website/JavaScript/Screenshot_20221219_022022_jbr9qt.png',description:'this project is a Wikipedia search application whenever a user enters the word, it will make an API call and gets the results from the Wikipedia website and displays the response',
        url:'https://js-wikipedia-search.netlify.app/',
        github:'https://github.com/iamkarthikricky/js-wikipedia.git'
    },
    {
        id:6,
        title:'Country Population',
       imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671440088/Own-Website/JavaScript/Screenshot_20221219_022040_s7mqpz.png',description:'this project helps in finding the population of a country.whenever a user enters a country name in the search input an API call will be made and the response will be displayed in accordance with the search input containing country name',
        url:'https://js-country-population.netlify.app/',
        github:'https://github.com/iamkarthikricky/js-countryPopulation.git'
    },
    {
        id:7,
        title:'Bookmark Maker',
       imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671440088/Own-Website/JavaScript/Screenshot_20221219_022059_xenyrz.png',description:'Using this a user can be able to bookmark his favorite website',
        url:'https://js-bookmarker.netlify.app/',
        github:'https://github.com/iamkarthikricky/js-bookmaker.git'   
    },
    {
        id:8,
        title:'Speed Typing Test',
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671440088/Own-Website/JavaScript/Screenshot_20221219_022234_luencu.png',description:'This project is made to test the user\'s typing speed,a user has to type the displayed text in the text box and click on the submit after typing.',
        url:'https://js-speed-typing-test.netlify.app/',
        github:'https://github.com/iamkarthikricky/js-speedtest.git'
    }
]

const ProjectCard=props=>{
    const {projectItem}=props 
    const{imgUrl,title,description,url,github}=projectItem
    return(
        <li className="js-project-card">
            <img src={imgUrl} alt={title} className='img'/>

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

const JavaScriptProjects=()=>(
        <div className='js-main-container'>
            <h1 className='js-main-heading'>JavaScript Projects</h1>
            <ul className='js-projects-container'>
                {projectList.map(eachItem=>(
                    <ProjectCard key={eachItem.id} projectItem={eachItem} />
                ))}
            </ul>
    </div>
    )

export default JavaScriptProjects
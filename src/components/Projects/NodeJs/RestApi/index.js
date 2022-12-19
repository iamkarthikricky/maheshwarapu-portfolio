import { Chrono } from "react-chrono";
import ProjectItemCard from '../ProjectItemCard/index'

const apiProjects=[
    {
        id:'cricket-team',
        title:'Cricket Team',
        projectName:'Cricket Team',
        description:'This Project is developed using Node JS and NPM Packages on Express JS Framework. This project enables the users from using SQLite Database to perform CRUD operations.This follows Rest API Principles.',
        url:'https://github.com/iamkarthikricky/expressjs-cricketTeam.git',
        techniques:[
            {id:'1',tagName:'express()'},{id:'2',tagName:'sqlite'},
            {id:'3',tagName:'sqlite3'},{id:'4',tagName:'REST Client'},
            {id:'5',tagName:'CRUD Operations'},{id:'6',tagName:'Create Data'},
            {id:'7',tagName:'Read Data'},{id:'8',tagName:'Update Data'},{id:'9',tagName:'Delete Data'}
        ]
    },
    {
        id:'movies',
        title:'Movies',
        projectName:'Movies',
        description:'This Project is developed using Node JS and NPM Packages on Express JS Framework. A User Can perform CRUD Operations on the project database which is a SQLite database.',
        url:'https://github.com/iamkarthikricky/expressjs-movies.git',
        techniques:[
            {id:'0',tagName:'Connecting SQLite with Express'},
            {id:'1',tagName:'express()'},{id:'2',tagName:'sqlite'},
            {id:'3',tagName:'sqlite3'},{id:'4',tagName:'REST Client'},
        ]
    },
    {
        id:'match-scores',
        title:'Cricket Match Scores',
        projectName:'Cricket Match Scores',
        description:'This Project is developed using Node JS and NPM Packages on Express JS Framework.A User can Create data,Read data,Update data,Delete data on the prefilled SQLite database.',
        url:'https://github.com/iamkarthikricky/expressjs-match-scores.git',
        techniques:[
            {id:'1',tagName:'express()'},{id:'2',tagName:'sqlite'},
            {id:'3',tagName:'sqlite3'},{id:'4',tagName:'REST Client'},
            {id:'5',tagName:'CRUD Operations'},{id:'6',tagName:'Create Data'},
            {id:'7',tagName:'Read Data'},{id:'8',tagName:'Update Data'},{id:'9',tagName:'Delete Data'}
        ]
    },
    {
        id:'todo-app',
        title:'Todo Application',
        projectName:'Todo Application',
        description:'This is developed using Express JS Framework.A user can make Rest Api Calls.',
        url:'https://github.com/iamkarthikricky/restapi-todoApplication.git',
        techniques:[
            {id:'0',tagName:'Connecting SQLite with Express'},
            {id:'1',tagName:'express()'},{id:'2',tagName:'sqlite'},
            {id:'3',tagName:'sqlite3'},{id:'4',tagName:'REST Client'},  {id:'5',tagName:'CRUD Operations'},
        ]
    } 
]

const RestApi=()=>(
    <Chrono theme={{ cardBgColor: "#daf2dc"}} items={apiProjects} mode={"VERTICAL_ALTERNATING"}>
        {apiProjects.map(eachProject=>(
            <ProjectItemCard key={eachProject.id} project={eachProject}/>
        ))}
    </Chrono>
)


export default RestApi
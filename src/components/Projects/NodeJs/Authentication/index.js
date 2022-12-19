import { Chrono } from "react-chrono";
import ProjectItemCard from '../ProjectItemCard/index'


const items=[
    {
        id:'authentication',
        title:'User Authentication',
        projectName:'User Authentication',
        description:'Using this project a user can be able to signup in a website or able to sign-in, every time a user makes a successful login,It creates an authentication token that is JWT token.This JWT token can be sent in the header.Using this JWT token a user can be made  access to the resources of the database.',
        url:'https://github.com/iamkarthikricky/restapi-authentication.git',
        techniques:[
            {id:'1',tagName:'password encryption'},{id:'2',tagName:'npm packages'},{id:'3',tagName:'bcrypt'},
            {id:'4',tagName:'express()'},{id:'5',tagName:'nodemon'},{id:'6',tagName:'sqlite()'},
            {id:'7',tagName:'sqlite3'},{id:'8',tagName:'request.body()'},{id:'9',tagName:'request.params'}
        ]
    },
    {
        id:'twitter-clone',
        title:'Twitter Clone',
        projectName:'Twitter Clone',
        description:'This project is a replica of the real time application Twitter using this application a user can be able to log in whenever a user tries to login It generates a JWT token which he is used to access the database resources and user can be able to see his followers and his following and and able to view replies  to their tweets and along with the date and time.',
        url:'https://github.com/iamkarthikricky/twitterClone.git',
        techniques:[
            {id:'0',tagName:'password encryption'},{id:'1',tagName:'jsonwebtoken'},{id:'2',tagName:'bcrypt'},{id:'3',tagName:'bcrypt.compare()'},{id:'4',tagName:'JWT Token'},
            {id:'5',tagName:'Token Authentication'},{id:'6',tagName:'express()'},{id:'7',tagName:'nodemon'},{id:'8',tagName:'request.body()'},
            {id:'9',tagName:'request.params()'},{id:'10',tagName:'CRUD Operations'}
        ]
    }
]

const Authentication=()=>(
        <Chrono theme={{ cardBgColor: "#daf2dc"}} items={items} mode={"VERTICAL_ALTERNATING"}>
            {items.map(eachProject=>(
                <ProjectItemCard key={eachProject.id} project={eachProject}/>
            ))}
    </Chrono>
)

export default Authentication
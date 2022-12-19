import {Chrono} from 'react-chrono'
import ProjectCard from '../ProjectCard'

const RoutingArray=[
    {
        category:'React Routing',
        id:'signup-form',
        title:'Registration Form',
        description:'Most Common Component that can be seen everywhere during a signup/registration process',
        url:'https://user-registration-signup-form.netlify.app/',
        tagsList:[
            {id:'1',tagName:'SignUp Form'},{id:'2',tagName:'Registration Form'},{id:'3',tagName:'Field Validators'},{id:'4',tagName:'React Routing'},{id:'5',tagName:'onClick()'},{id:'6',tagName:'preventDefault()'}
        ]
    },
    {
        category:'React Routing',
        id:'ipl-dashboard',
        title:'IPL Dashboard',
        description:'The Famous Cricket League Dashboard is here. A User can be able to view the stats of their favorite team based on the data available',
        url:'https://react-ipl-dashbaord.netlify.app/',
        tagsList:[
            {id:'1',tagName:'React Routing'},{id:'2',tagName:'apiStatus'},{id:'3',tagName:'fetch(url)'},{id:'4',tagName:'response.json()'},{id:'5',tagName:'route-navigation'}
        ]

    },
    {
        category:'React Routing',
        id:'shopping-clone',
        title:'E-Commerce Clone',
        description:'It is a Clone of E-commerce site.User Can search for the products and add them to Cart and then checkout.',
        url:'https://shopping-clone-app.netlify.app/',
        tagsList:[
            {id:'1',tagName:'React Routing'},{id:'2',tagName:'apiStatus'},{id:'3',tagName:'fetch(url)'},{id:'4',tagName:'response.json()'},{id:'5',tagName:'route-navigation'}
        ]
    }
]

const ReactRouting=()=>(
    <Chrono  theme={{ cardBgColor: "#000000"}} items={RoutingArray}  mode="VERTICAL_ALTERNATING">
    {RoutingArray.map(eachItem=>(
                <ProjectCard key={eachItem.id} cardItem={eachItem} />
            ))}
    </Chrono>
)

export default ReactRouting
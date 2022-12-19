import { Chrono } from "react-chrono";
import ProjectCard from "../ProjectCard";

const ListsProjectsArray=[
    {
        category:'Working with Lists',
        id:'gallery-app',
        title:'Gallery App',
        description:'This app is a replica of Mobile Gallery App.',
        url:'https://app.netlify.com/sites/gallery-react-webapp',
        tagsList:[
            {id:'1',tagName:'Class Component'},{id:'2',tagName:'Working with Lists'},{id:'3',tagName:'this.setState()'},{id:'4',tagName:'active image'}
        ]
    },
    {
        category:'Working with Lists',
        id:'App-Store',
        title:'App store',
        description:'This app is a clone of app store or PlayStore in which the apps are displayed accordingly with respect to the user\'s input.',
        url:'https://app.netlify.com/sites/app-store-clone',
        tagsList:[
            {id:'0',tagName:'Functional Component'},{id:'1',tagName:'Class Component'},{id:'2',tagName:'Working with Lists'},{id:'3',tagName:'App Store Clone'},{id:'4',tagName:'getActiveApps()'},{id:'5',tagName:'filter()'},
            {id:'6',tagName:'includes()'},
        ]
    },
    {
        category:'Working with Lists',
        id:'review-app',
        title:'Reviews App',
        description:'Simplified display of reviews from a user. Build using React Class Component and Functional Component.',
        url:'https://app.netlify.com/sites/review-app-clone',
        tagsList:[
            {id:'0',tagName:'Functional Component'},{id:'1',tagName:'Class Component'},{id:'2',tagName:'Working with Lists'},{id:'3',tagName:'Length Of List'},{id:'4',tagName:'Iterating over the List'},
        ]
    },{
        category:'Working with Lists',
        id:'comments-app',
        title:'Comments App',
        description:'This is a Comments Section which is developed using React JS Class Components with the prefilled data.',
        url:'https://comment-reactapp.netlify.app/',
        tagsList:[
            {id:'0',tagName:'Class Component'},{id:'1',tagName:'event Listeners'},{id:'2',tagName:'formatDistanceToNow'},{id:'3',tagName:'Unpacking of List'},{id:'4',tagName:'Packing of List'},{id:'5',tagName:'filter()'},{id:'6',tagName:'Field Authenticator'}
        ]
    },{
        category:'Working with Lists',
        id:'appointments-app',
        title:'Appointment App',
        description:'This app helps in listing down the scheduled appointments and can star the important appointments.',
        url:'https://app.netlify.com/sites/appointments-react-app',
        tagsList:[
            {id:'0',tagName:'Class Component'},{id:'1',tagName:'event Listeners'},{id:'2',tagName:'formatDistanceToNow'},{id:'3',tagName:'Unpacking of List'},{id:'4',tagName:'Packing of List'},{id:'5',tagName:'filter()'},{id:'6',tagName:'Field Authenticator'}
        ]
    },{
        category:'Working with Lists',
        id:'money-manager',
        title:'Money Manager',
        description:'One Stop to track all your Expenses and Income.',
        url:'https://app.netlify.com/sites/money-manager-react-app',
        tagsList:[
            {id:'0',tagName:'Class Component'},{id:'1',tagName:'event Listeners'},{id:'2',tagName:'onChange()'},{id:'3',tagName:'Unpacking of List'},{id:'4',tagName:'Packing of List'},{id:'5',tagName:'filter()'}
        ]
    },{
        category:'Working with Lists',
        id:'emoji-game',
        title:'Emoji Game',
        description:'Get engaged with this fun game and try to score high score. Its Really Fun.',
        url:'https://app.netlify.com/sites/emoji-react-game',
        tagsList:[
            {id:'0',tagName:'Working With List'},{id:'1',tagName:'Math.ceil()'},{id:'2',tagName:'Math.random()'},{id:'3',tagName:'Packing of List'},{id:'4',tagName:'includes()'}
        ]
    }
]


const WorkingWithLists=()=>(
    <Chrono  theme={{ cardBgColor: "#000000"}} items={ListsProjectsArray}  mode="VERTICAL_ALTERNATING">
    {ListsProjectsArray.map(eachItem=>(
        <ProjectCard key={eachItem.id} cardItem={eachItem} />
    ))}
</Chrono>
)

export default WorkingWithLists
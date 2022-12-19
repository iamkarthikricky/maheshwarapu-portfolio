import {Chrono} from 'react-chrono'
import ProjectCard from '../ProjectCard'

const ComponentLifeList=[
    {
        category:'Component Life Cycle',
        id:'digital-timer',
        title:'Digital Timer App',
        description:'A user can be able to set timer for prescribed time, pause it and can reset it.',
        url:'https://app.netlify.com/sites/digital-timer-react',
        tagsList:[
            {id:'1',tagName:'componentDidMount()'},
            {id:'2',tagName:'componentDidUnMount()'},
            {id:'3',tagName:'setInterval()'},
            {id:'4',tagName:'clearInterval()'},
            {id:'5',tagName:'UpdatingState'},
            {id:'6',tagName:'Re-rendering component'}
        ]
    },
    {
       category:'Component Life Cycle',
       id:'stopWatch',
       title:'Stop Watch',
       description:'User can be able to start,stop and reset the stopwatch.',
       url:'https://stop-watch-react.netlify.app/',
       tagsList:[
        {id:'1',tagName:'componentDidMount()'},
        {id:'2',tagName:'componentDidUnMount()'},
        {id:'3',tagName:'setInterval()'},
        {id:'4',tagName:'clearInterval()'},
        {id:'5',tagName:'UpdatingState'},
        {id:'6',tagName:'Re-rendering component'}
       ]
    },
    {
        category:'Component Life Cycle',
        id:'faq-app',
        title:'Faqs App',
        description:'The Most Common FAQ\'s section prefilled with the Popular Questions',
        url:'https://react-app-faqs.netlify.app/',
        tagsList:[
            {id:'1',tagName:'Class Components'},
            {id:'2',tagName:'Functional Components'},
            {id:'3',tagName:'Conditional Rendering'},
            {id:'4',tagName:'componentDidMount()'},
            {id:'5',tagName:'display:none'}
        ]
    },
    {
        category:'Component Life Cycle',
        id:'password-manager',
        title:'Password Manager',
        description:'A user can store passwords temporarily and can able to see count of passwords and can hide/unhide the saved passwords.',
        url:'https://save-passwords.netlify.app/',
        tagsList:[
            {id:'1',tagName:'Field Validators'},{id:'2',tagName:'ComponentDidMount()'},{id:'3',tagName:'uuid'},{id:'4',tagName:'onClick()'},{id:'5',tagName:'Unpacking List'}
        ]
    },{
        category:'Component Life Cycle',
        id:'Match Game',
        title:'Match Game',
        description:'It\'s a fun game. A User has to match the image displayed with the thumbnail available in the respective category.',
        url:'https://react-matchgame.netlify.app/',
        tagsList:[
            {id:'1',tagName:'componentDidMount()'},
        {id:'2',tagName:'componentDidUnMount()'},
        {id:'3',tagName:'updateState'},
        {id:'4',tagName:'ComponentLifeCycle'}
        ]
    }
]


const ComponentLifeCycle=()=>(
    <Chrono  theme={{ cardBgColor: "#000000"}} items={ComponentLifeList}  mode="VERTICAL_ALTERNATING">
    {ComponentLifeList.map(eachItem=>(
                <ProjectCard key={eachItem.id} cardItem={eachItem} />
            ))}
    </Chrono>
)

export default ComponentLifeCycle
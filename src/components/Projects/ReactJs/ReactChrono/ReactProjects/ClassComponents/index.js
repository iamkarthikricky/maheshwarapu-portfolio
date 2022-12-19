import {Chrono} from 'react-chrono'
import ProjectCard from '../ProjectCard'

const classComponentsArray=[
    {   
        category:'Class Components',
        id:'even-odd',
        title:'Even Odd Generator',
        description:'This app helps in generating a random number and identifies whether it is even or odd',
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671442430/Own-Website/ReactJS/1/Screenshot_20221219_025706_rymsbk.png',
        url:'https://even-or-odd-app.netlify.app/',
        tagsList:[
            {
                id:'1',
                tagName:'React JS'
            },
            {
                id:'2',
                tagName:'Class Component'
            },
            {
                id:'3',
                tagName:'Conditional Rendering'
            },
            {
                id:'4',
                tagName:'Math.ceil()'
            },
            {
                id:'5',
                tagName:'Math.random()'
            },
            {
                id:'6',
                tagName:'this.setState()'
            }

        ]
    },
    {
        category:'Class Components',
        id:'random-number',
        title:'Random Number Generator',
        description:'This app helps in  generating a  random number between 1 to 100',
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671442430/Own-Website/ReactJS/1/Screenshot_20221219_025829_ih74yr.png',
        url:'https://random-number-react-app.netlify.app/',
        tagsList:[
            {
                id:'1',
                tagName:'React JS'
            },
            {
                id:'2',
                tagName:'Class Component'
            },
            {
                id:'3',
                tagName:'Conditional Rendering'
            },
            {
                id:'4',
                tagName:'Math.ceil()'
            },
            {
                id:'5',
                tagName:'Math.random()'
            },
            {
                id:'6',
                tagName:'this.setState()'
            }

        ]
    },
    {
        category:'Class Components',
        id:'destination-search',
        title:'Destination Search',
        description:'This app helps in search the prefilled destinations based upon the search Input',
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671442431/Own-Website/ReactJS/1/Screenshot_20221219_030013_knlheu.png',url:'https://destination-search-app.netlify.app/',
        tagsList:[
            {id:'1',tagName:'filter()'},{id:'2',tagName:'includes()'},{id:'3',tagName:'toLowerCase()'}
        ]
    },
    {
        category:'Class Components',
        id:'todos-app',
        title:'SimpleTodos App',
        description:'It\'s a todo app and respective todo can be deleted upon clicking delete button ',
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671442430/Own-Website/ReactJS/1/Screenshot_20221219_030029_fumkxx.png',url:'https://todos-simple-app.netlify.app/',
        tagsList:[
            {id:'1',tagName:'filter()'},{id:'2',tagName:'id !== id'}
        ]
    },
    {
        category:'Class Components',
        id:'google-suggestions',
        title:'Google Search Suggestions',
        description:'This app helps in suggesting the recommended searches same like real world Google search.',
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671442430/Own-Website/ReactJS/1/Screenshot_20221219_030049_hqch8u.png',url:'https://google-suggestion.netlify.app/',
        tagsList:[
            {id:'1',tagName:'filter()'},{id:'2',tagName:'includes()'},{id:'3',tagName:'toLowerCase()'}
        ]
    }, 
    {
        category:'Class Components',
        id:'letters-count',
        title:'Letters Counter',
        description:'This app will be able to count the number of letters entered by the user.',
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671442431/Own-Website/ReactJS/1/Screenshot_20221219_030113_cvpkaw.png',url:'https://letters-counter.netlify.app/',
        tagsList:[
            {id:'1',tagName:'eventListeners'},{id:'2',tagName:'onChange()'},{id:'3',tagName:'Length'}
        ]
    },{
        category:'Class Components',
        id:'browser-history',
        title:'Browser History',
        description:'This app is a replica of Browser\'s Browsing History such as Google Chrome,Microsoft Edge etc..,',
        imgUrl:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1671442431/Own-Website/ReactJS/1/Screenshot_20221219_030158_xfukso.png',url:'https://browser-history.netlify.app/',
        tagsList:[
            {id:'1',tagName:'Class Component'},{id:'2',tagName:'this.setState()'},
            {id:'3',tagName:'eventListeners'},{id:'4',tagName:'onChange()'},{id:'5',tagName:'filter()'},
            {id:'6',tagName:'includes()'},{id:'7',tagName:'id !== id'}
        ]
    },
]

const ClassComponents=()=>(
    <Chrono  theme={{ cardBgColor: "#000000"}} items={classComponentsArray}  mode="VERTICAL_ALTERNATING">
    {classComponentsArray.map(eachItem=>(
                <ProjectCard key={eachItem.id} cardItem={eachItem} />
            ))}
    </Chrono>
)

export default ClassComponents
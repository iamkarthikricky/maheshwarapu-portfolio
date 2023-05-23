import {FidgetSpinner} from 'react-loader-spinner'
import './index.css'

export const LoadingView=()=>(
        <div className="loader-container">
        <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#ff0000', '#00ff00', '#0000ff']}
        backgroundColor="#F4442E"
      />
        </div>
)

export const FailureView=()=>(
    <div className='failure-container'>
        <img src='https://res.cloudinary.com/dlwydxzdi/image/upload/v1684846984/not-found-img_v7nehg.png' alt="not-found" className='failure-img'/>
        <p className='f-main-para'>Oops! Something Went Wrong</p>
        <p className='f-para'>We Cannot seem to find the page you are looking for.</p>
        <span className='span'>Kindly Refresh the page.</span>
    </div>
)
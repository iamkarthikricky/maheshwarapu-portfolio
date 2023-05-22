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
    <div>
        <h1>hi</h1>
    </div>
)
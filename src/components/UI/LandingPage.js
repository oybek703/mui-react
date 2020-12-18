import React from 'react'
import animationData from '../../animations/landinganimation/data'
import Lottie from 'react-lottie'

const LandingPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <Lottie options={defaultOptions} width={400} height={400}/>
    )
}

export default LandingPage
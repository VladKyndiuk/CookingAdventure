import Lottie from "lottie-react"
import SuccessAnim from "../../images/jsons/check.json"
import { useRef } from "react";

function Success({isSuccess}) {
    const lottieRef = useRef();
    // isSuccess ? lottieRef.current.start() : lottieRef.current.pause()
    return (
         
        <Lottie lottieRef={lottieRef} animationData={SuccessAnim} loop={1}></Lottie>
     );
}

export default Success;
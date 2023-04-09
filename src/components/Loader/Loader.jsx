import "./Loader.scss"
import FriedEgg from "../../images/jsons/FriedEgg.json";
import Food from "../../images/jsons/food.json";
import Lottie from "lottie-react"

function Loader() {
  return (
    // <div class="pan-loader">
    //   <div class="loader"></div>
    //   <div class="pan-container">
    //     <div class="pan"></div>
    //     <div class="handle"></div>
    //   </div>
    //   <div class="shadow"></div>
    // </div>
    <Lottie animationData={Food}></Lottie>

  );
}

export default Loader;

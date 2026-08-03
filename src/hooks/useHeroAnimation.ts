import {useEffect} from "react";

import {heroTimeline} from "../Animations/heroTimeline";


export function useHeroAnimation(){


useEffect(()=>{


const animation = heroTimeline();


return ()=>{

animation.pause();

}


},[])


}
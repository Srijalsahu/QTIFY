import React, { useEffect, useState } from 'react'
import styles from "./CarouselLeftNavigation.module.css"
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";
import {useSwiper} from "swiper/react";


function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isEnd, SetIsEnd] = useState(swiper.isEnd)

    useEffect(()=>{
        swiper.on("slideChange", function(){
            SetIsEnd(swiper.isEnd);
        }
        )
    },[]); 
  return (
    <div className={styles.leftNavigation}>
      {!isEnd && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation

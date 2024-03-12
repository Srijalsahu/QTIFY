import React, { useEffect, useState } from 'react'
import styles from "./CarouselRightNavigation.module.css"
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";
import {useSwiper} from "swiper/react";


function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, SetIsEnd] = useState(swiper.isEnd)

    useEffect(()=>{
        swiper.on("slideChange", function(){
            SetIsEnd(swiper.isEnd);
        }
        )
    },[]); 
  return (
    <div className={styles.rightnavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation

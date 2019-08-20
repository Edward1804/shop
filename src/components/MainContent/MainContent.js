import React from 'react';
import s from './Content.module.css'
import img from "../../img/banner1.webp"
import img2 from "../../img/banner2.webp"
import img3 from "../../img/banner3.webp"

import icon1 from "../../img/icons/heart.png";
import icon2 from "../../img/icons/tachometr.png";
import icon3 from "../../img/icons/details.png";
import icon4 from "../../img/icons/settings.png";


import gal1 from "../../img/gallery/1.jpg"
import gal2 from "../../img/gallery/2.png"
import gal3 from "../../img/gallery/3.png"
import gal4 from "../../img/gallery/4.png"
import gal5 from "../../img/gallery/5.jpg"
import gal6 from "../../img/gallery/6.png"

import Slider from "./Slider/Slider";
import Garant from "./Garant/Garant";
import Gallery from "./Gallery/Gallery";


export const MainContent = (props) => {
    return (
        <div className={s.content}>
            <div className={s.slider}>
                <Slider img={img} img2={img2} img3={img3}/>
                <Garant icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4}/>
                <Gallery/>
            </div>
        </div>
    )
}
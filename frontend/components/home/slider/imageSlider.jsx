import React, {useState} from 'react'; 
import { SliderData } from './imageData';
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

const ImageSlider = () => { 
    const [current, setCurrent]= useState(0); 

    const nextSlide=()=> { 
        setCurrent(current === SliderData.length -1 ? 0 : current + 1)
    }
    const prevSlide=()=> { 
        setCurrent(current === 0 ? SliderData.length -1 : current - 1)
    }

    return(
        <div className="slider-imgs">
            <IoArrowBackSharp className="left-arrow" onClick={prevSlide}/> 
            <IoArrowForwardSharp className="right-arrow" onClick={nextSlide}/> 
            {
            SliderData.map((img, idx) => { 
                return(
                    <div className={ idx === current ? "slide active" : "slide"} key={idx}>
                        {idx === current && (<img src={img.image} className="img"/>)}
                    </div>
                )
            })
            }
        </div>
    )
}

export default ImageSlider; 
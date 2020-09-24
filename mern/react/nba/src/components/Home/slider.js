import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { URL_SLIDES } from '../utils/paths';
import axios from 'axios';

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const MySlider = () => {

  const [slides, setSlides] = useState([]);
  
  useEffect(() => {
    const getSlides = async () => {
      try {
        const response = await axios.get(URL_SLIDES)
        setSlides(response.data)
      } catch(error){
        console.log(error)
      }
    }
    getSlides();
  }, [])

  console.log(slides)

  return(
    slides ?
      <Slider {...settings}>
        {slides.map( (item) => (
            <div key={item.id}>
              <div 
                style={{
                  background: `url('/images/covers/${item.cover}')`
                }}
                className='item_slider'>

              <div className="caption">
                <h4>{item.topic}</h4>
                <p>{item.title}</p>
              </div>
              </div>
            </div>
          ))}
      </Slider>
    : null
  )
}
export default MySlider;


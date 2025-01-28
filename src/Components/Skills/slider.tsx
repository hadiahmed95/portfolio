import React ,{useEffect,useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skills from '@/Api/Tech'

function ActivitiesSlider() {

  const [tech, setTech] = useState<any>([])

  useEffect(()=>{
if(Skills.length > 0){
  setTech(Skills)
}
  },[Skills])

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 8,
    slidesToScroll: 1,
    speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    autoplay: true,
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="overflow-hidden mt-20 mb-10">
        <Slider {...settings}>
        {tech.length > 0 && tech.map((skills:any,index:number)=>{
          return (
            <div className="" key={index}>
              <div className="flex justify-center items-center">
              <img className="md:w-[90px] md:h-[80px] w-[70px] h-[60px]" src={skills.logo.src} alt="" />
              </div>
              <h2 className="md:text-[24px] sm:text-[20px] text-center mt-5">{skills.name}</h2>
            </div>
          )
        })}
        </Slider>
      </div>
  );
}

export default ActivitiesSlider;

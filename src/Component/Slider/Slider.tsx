import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Slider/Slider.module.css";
import Degree from "../../assets/Images/graduation.png";

const MySlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <Slider className={`${styles.slider} m-8`} {...settings}>
      <div className="bg-gradient-to-r from-[#CB97E7] to-[#f3a984] rounded-3xl w-full pt-1.5">
        <div className="bg-gradient-to-t from-[#fbefc7] to-[#EACB68] px-12 py-6 rounded-t-xl rounded-b-3xl flex justify-between items-center space-x-4">
          <div className="flex">
            <div className="flex-1">
              <h2 className="text-4xl font-thin text-[#545454]">
                Achieve Your Milestone with Ease
              </h2>
              <p className="mb-4 text-lg">
                Streamlined Degree Clearance Process
              </p>
              <p className="mb-3 font-thin from-stone-600">
                Navigating through your degree clearance is now simpler than
                ever. With TrackLite HITEC, you're just a click away from
                beginning the final steps of your academic journey. Secure your
                transcripts, finalize records, and celebrate your
                accomplishments with our comprehensive online clearance system.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-800">
                Approve Your Degree
              </button>
            </div>
            <div className="flex-shrink-0 bg-gradient-to-b from-[#CB97E7] to-[#FCF9E0] bg-opacity-80 border-2 border-[#EE844E] rounded-full p-10">
              <img src={Degree} alt="degree" className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#CB97E7] to-[#f3a984] rounded-3xl w-full pt-1.5">
        <div className="bg-gradient-to-t from-[#fbefc7] to-[#EACB68] px-12 py-6 rounded-t-xl rounded-b-3xl flex justify-between items-center space-x-4">
          <div className="flex">
            <div className="flex-1">
              <h2 className="text-4xl font-thin text-[#545454]">
                Achieve Your Milestone with Ease
              </h2>
              <p className="mb-4 text-lg">
                Streamlined Degree Clearance Process
              </p>
              <p className="mb-3 font-thin from-stone-600">
                Navigating through your degree clearance is now simpler than
                ever. With TrackLite HITEC, you're just a click away from
                beginning the final steps of your academic journey. Secure your
                transcripts, finalize records, and celebrate your
                accomplishments with our comprehensive online clearance system.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-800">
                Approve Your Degree
              </button>
            </div>
            <div className="flex-shrink-0 bg-gradient-to-b from-[#CB97E7] to-[#FCF9E0] bg-opacity-80 border-2 border-[#EE844E] rounded-full p-10">
              <img src={Degree} alt="degree" className="w-32" />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default MySlider;

import React from "react";
import Slider, { Settings } from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="m-8" {...settings}>
      <div className="bg-yellow-200 p-8 rounded-xl flex justify-between items-center space-x-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            Achieve Your Milestone with Ease
          </h2>
          <p className="mb-8">Streamlined Degree Clearance Process</p>
          <p className="mb-8">
            Navigating through your degree clearance is now simpler than ever.
            With TrackLite HiTEC, you're just a click away from beginning the
            final steps of your academic journey. Secure your transcripts,
            finalize records, and celebrate your accomplishments with our
            comprehensive online clearance system.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-800">
            Approve Your Degree
          </button>
        </div>
        <div className="flex-shrink-0">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-6xl text-pink-600"
          />
        </div>
      </div>
      <div className="bg-yellow-200 p-8 rounded-xl flex justify-between items-center space-x-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            Achieve Your Milestone with Ease
          </h2>
          <p className="mb-8">Streamlined Degree Clearance Process</p>
          <p className="mb-8">
            Navigating through your degree clearance is now simpler than ever.
            With TrackLite HiTEC, you're just a click away from beginning the
            final steps of your academic journey. Secure your transcripts,
            finalize records, and celebrate your accomplishments with our
            comprehensive online clearance system.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-800">
            Approve Your Degree
          </button>
        </div>
        <div className="flex-shrink-0">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-6xl text-pink-600"
          />
        </div>
      </div>
    </Slider>
  );
};

export default MySlider;

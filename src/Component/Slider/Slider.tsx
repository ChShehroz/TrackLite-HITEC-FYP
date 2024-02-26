import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Slider/Slider.module.css";
import Degree from "../../assets/Images/graduation.png";
import complain from "../../assets/Images/complain.png";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const MySlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    lazyLoad: "ondemand",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
  };

  return (
    <Slider className={`${styles.slider} mx-8 my-6`} {...settings}>
      <div className="bg-gradient-to-r from-[#6DD5FA] to-[#9B89B3] rounded-3xl w-full pt-1.5 overflow-hidden">
        <div className="bg-gradient-to-t from-[#E0EAFC] to-[#CFDEF3] px-12 py-6 rounded-t-xl rounded-b-3xl flex justify-between items-center space-x-4">
          <div className="flex">
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-slate-700">
                Achieve Your Milestone with Ease
              </h2>
              <p className="mb-4 text-slate-800 text-lg font-medium">
                Streamlined Degree Clearance Process
              </p>
              <p className="mb-3 font-light text-slate-500 mr-3">
                Navigating through your degree clearance is now simpler than
                ever. With TrackLite HITEC, you're just a click away from
                beginning the final steps of your academic journey. Secure your
                transcripts, finalize records, and celebrate your
                accomplishments with our comprehensive online clearance system.
              </p>
              <Link to={"/Degree-Application"}>
                <Button
                  radius="full"
                  variant="flat"
                  className="px-6 py-2 flex items-center text-sm space-x-2 bg-slate-800 text-white shadow-lg  focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  Approve Your Degree
                </Button>
              </Link>
            </div>
            <div className="flex-shrink-0 bg-gradient-to-b from-[#CB97E7] to-[#FCF9E0] shadow-lg bg-opacity-80 border-2 border-[#EE844E] rounded-full p-10">
              <img src={Degree} alt="degree" className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#FF9966] to-[#FF5E62] rounded-3xl w-full pt-1.5 overflow-hidden">
        <div className="bg-gradient-to-t from-[#FFF6E5] to-[#FFD2A0] px-12 py-6 rounded-t-xl rounded-b-3xl flex justify-between items-center space-x-4">
          <div className="flex">
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-slate-700">
                Speak Up - We're Here to Listen
              </h2>
              <p className="mb-4 text-lg text-slate-800 font-medium">
                Your Voice Matters
              </p>
              <p className="mb-3 font-light text-slate-500">
                At TrackLite HITEC, every feedback is an opportunity for us to
                improve. If you've encountered any issues or if there's anything
                about campus life, academics, or services that concerns you,
                don't hesitate to let us know. Your input is invaluable and will
                be promptly reviewed by our dedicated team. Submit complaints
                here.
              </p>
              <Link to={"/Complaints"}>
                <Button
                  radius="full"
                  variant="flat"
                  className="px-6 py-2 flex items-center text-sm space-x-2 bg-slate-800 text-white shadow-lg  focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  Submit a Complaint
                </Button>
              </Link>
            </div>
            <div className="flex-shrink-0 bg-gradient-to-b from-[#CB97E7] shadow-lg to-[#FCF9E0] bg-opacity-80 border-2 border-[#EE844E] rounded-full p-10">
              <img src={complain} alt="degree" className="w-32" />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default MySlider;

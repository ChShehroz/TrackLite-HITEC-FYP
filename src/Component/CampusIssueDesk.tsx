import React from "react";
import img1 from "../../src/assets/Images/graduation (1).png";
import img2 from "../../src/assets/Images/complaint.png";
import img3 from "../../src/assets/Images/binoculars (1).png";
import img4 from "../../src/assets/Images/image 3.png";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  img: any;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  routePath: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  img,
  title,
  subTitle,
  description,
  buttonText,
  routePath,
}) => {
  return (
    <div className="bg-gradient-to-l from-[#c39d4d] to-[#FFC344] pt-1 rounded-3xl">
      <div className="flex px-4 py-8 items-center bg-[#EBE1C4] rounded-2xl shadow-lg">
        <div className="p-6 bg-gradient-to-b from-[#FFC344] border border-white shadow-lg rounded-full m-4">
          <img src={img} className="w-20 text-gray-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-slate-800 font-semibold">{title}</h3>
          <p className="text-sm text-slate-500 font-normal mb-4">{subTitle}</p>
          <p className="text-sm text-slate-600 mb-6">{description}</p>
          <Link to={routePath}>
            <button className="mt-2 px-8 py-2 text-sm font-semibold text-white bg-black rounded-full shadow-sm hover:bg-transparent hover:text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-all">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CampusIssueDesk: React.FC = () => {
  return (
    <div className="px-8 pt-8 pb-14">
      <h2 className="text-3xl font-bold text-slate-800 text-center mb-6">
        Campus Issue Desk
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ServiceCard
          img={img1}
          title="Degree Clearance"
          subTitle="Your Graduation Gateway"
          description="Complete your academic chapter smoothly. Verify credits, finalize dues, and prepare for your ceremony, all in one place."
          buttonText="Start Here"
          routePath="/DegreeApplication"
        />
        <ServiceCard
          img={img3}
          title="Loss and Found"
          subTitle="Reclaim Your Items"
          description="Lost an item on campus? Report it here. Found something? Help it return to its owner. Together, let's reunite lost belongings with their rightful owners."
          buttonText="Search & Report"
          routePath="/LostFoundReport"
        />
        <ServiceCard
          img={img2}
          title="Complaints"
          subTitle="We’re Listening"
          description="Encounter an issue? Let us know. Submit and track complaints easily for a swift resolution."
          buttonText="Report Now"
          routePath="/Complaints"
        />
        <ServiceCard
          img={img4}
          title="Exam Queries"
          subTitle="Exam Assistance"
          description="Have questions about exams? Get clarifications and support for your exam-related queries here."
          buttonText="Inquire Here"
          routePath="/ExamQuries"
        />
      </div>
    </div>
  );
};

export default CampusIssueDesk;

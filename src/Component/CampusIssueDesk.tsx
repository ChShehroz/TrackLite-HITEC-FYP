import React from "react";
import {
  faGraduationCap,
  faBinoculars,
  faBookOpen,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  buttonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="flex px-8 py-12 items-center bg-[#EBE1C4] rounded-2xl shadow-lg m-2">
      <div className="px-4 bg-[#AED9E0] rounded-full m-4">
        <FontAwesomeIcon icon={icon} className="text-3xl text-gray-700" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <button className="mt-2 px-4 py-2 text-sm font-bold text-white bg-black rounded-full shadow-sm hover:bg-transparent hover:text-black border border-black transition-all">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CampusIssueDesk: React.FC = () => {
  return (
    <div className="px-8 pt-8 pb-14">
      <h2 className="text-3xl font-bold text-[#555555] text-center mb-6">
        Campus Issue Desk
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ServiceCard
          icon={faGraduationCap}
          title="Degree Clearance"
          description="Complete your academic chapter smoothly. Verify credits, finalize dues, and prepare for your ceremony, all in one place."
          buttonText="Start Here"
        />
        <ServiceCard
          icon={faBinoculars}
          title="Loss and Found"
          description="Misplaced something on campus? Browse found items or report lost belongings for quick recovery."
          buttonText="Search & Report"
        />
        <ServiceCard
          icon={faBookOpen}
          title="Complaints"
          description="Encounter an issue? Let us know. Submit and track complaints easily for a swift resolution."
          buttonText="Report Now"
        />
        <ServiceCard
          icon={faQuestionCircle}
          title="Exam Queries"
          description="Have questions about exams? Get clarifications and support for your exam-related queries here."
          buttonText="Inquire Here"
        />
      </div>
    </div>
  );
};

export default CampusIssueDesk;

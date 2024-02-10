import React from "react";
import imgFolder from "../../src/assets/Images/folder.png"; // Ensure this path is correct and accessible

type RequestStatus = "Pending" | "Rejected" | "Approved";

interface Request {
  issue: string;
  status: RequestStatus;
  created: string;
  lastUpdate: string;
}

const statusStyles: Record<RequestStatus, string> = {
  Pending:
    "inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20",
  Rejected:
    "inline-flex items-center rounded-md bg-red-200 px-2 py-1 text-xs font-medium text-red-900 ring-1 ring-inset ring-red-600/10",
  Approved:
    "inline-flex items-center rounded-md bg-green-200 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",
};

const requests: Request[] = [
  {
    issue: "Degree Clearance",
    status: "Pending",
    created: "Jun 04 2024",
    lastUpdate: "Jun 04 2024",
  },
  {
    issue: "Loss Item",
    status: "Rejected",
    created: "Jun 05 2024",
    lastUpdate: "Jun 05 2024",
  },
  {
    issue: "I-Grade",
    status: "Approved",
    created: "Jul 04 2024",
    lastUpdate: "Jul 04 2024",
  },
];

const RequestTable: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl text-[#545454] font-semibold my-11 text-center">
        My Requests/History
      </h2>
      {requests.length > 0 ? (
        <div className="overflow-x-auto relative rounded-3xl shadow-md sm:rounded-xl mx-28 mb-16">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-sm text-gray-700 uppercase bg-[#FEF8E1]">
              <tr>
                <th scope="col" className="py-4 px-6">
                  Issue
                </th>
                <th scope="col" className="py-4 px-6">
                  Status
                </th>
                <th scope="col" className="py-4 px-6">
                  Created
                </th>
                <th scope="col" className="py-4 px-6">
                  Last Update
                </th>
                <th scope="col" className="py-4 px-6">
                  Action Taken
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index} className="bg-[#EFE7CD]">
                  <td className="py-4 px-6">{request.issue}</td>
                  <td className="py-4 px-6">
                    <div className={`${statusStyles[request.status]}`}>
                      {request.status}
                    </div>
                  </td>
                  <td className="py-4 px-6">{request.created}</td>
                  <td className="py-4 px-6">{request.lastUpdate}</td>
                  <td className="py-4 px-6">
                    <button className="bg-black text-xs text-white font-semibold px-4 py-1 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[268px]">
          <img src={imgFolder} alt="No requests" className="h-32" />
          <p className="mt-4 text-xl text-gray-500">No requests found.</p>
        </div>
      )}
    </div>
  );
};

export default RequestTable;

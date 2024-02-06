import React from "react";

type RequestStatus = "Pending" | "Rejected" | "Approved";

interface Request {
  issue: string;
  status: RequestStatus;
  created: string;
  lastUpdate: string;
}

const statusStyles: Record<RequestStatus, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Rejected: "bg-red-100 text-red-800",
  Approved: "bg-green-100 text-green-800",
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
      <h2 className="text-xl font-bold text-center my-5">My Request/History</h2>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">
                Issue
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Created
              </th>
              <th scope="col" className="py-3 px-6">
                Last Update
              </th>
              <th scope="col" className="py-3 px-6">
                Action Taken
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-4 px-6">{request.issue}</td>
                <td className={`py-4 px-6 ${statusStyles[request.status]}`}>
                  {request.status}
                </td>
                <td className="py-4 px-6">{request.created}</td>
                <td className="py-4 px-6">{request.lastUpdate}</td>
                <td className="py-4 px-6">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    View Detail
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestTable;

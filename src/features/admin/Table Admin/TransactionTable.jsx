import React from "react";

const TransactionTable = () => {
  // Data statis untuk Transaction Table
  const transactions = [
    {
      id: 1,
      userName: "John Doe",
      serviceOrdered: "Website Development",
      transactionStatus: "Completed",
      orderDate: "2024-12-01",
    },
    {
      id: 2,
      userName: "Jane Smith",
      serviceOrdered: "Plumbing Maintenance",
      transactionStatus: "Pending",
      orderDate: "2024-12-05",
    },
    {
      id: 3,
      userName: "Michael Johnson",
      serviceOrdered: "Graphic Design",
      transactionStatus: "Cancelled",
      orderDate: "2024-12-08",
    },
    {
      id: 4,
      userName: "Emily Davis",
      serviceOrdered: "Digital Marketing",
      transactionStatus: "Completed",
      orderDate: "2024-12-10",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Transaction Dashboard</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">User Name</th>
            <th className="px-4 py-2 border">Service Ordered</th>
            <th className="px-4 py-2 border">Transaction Status</th>
            <th className="px-4 py-2 border">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-4 py-2 border">{transaction.id}</td>
              <td className="px-4 py-2 border">{transaction.userName}</td>
              <td className="px-4 py-2 border">{transaction.serviceOrdered}</td>
              <td
                className={`px-4 py-2 border ${
                  transaction.transactionStatus === "Completed"
                    ? "text-green-500"
                    : transaction.transactionStatus === "Pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {transaction.transactionStatus}
              </td>
              <td className="px-4 py-2 border">{transaction.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
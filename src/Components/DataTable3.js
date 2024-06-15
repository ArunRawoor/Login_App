import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './Table.css';

const DataTable3 = () => {
  const data2 = [
    {
      dateTime: '2023-08-24 10:30 AM',
      billNumber: '54321',
      type: 'Expense',
      amount: '₹200',
      mode: 'Credit Card',
      category: 'consultation',
    },
    {
      dateTime: '2023-08-25 3:45 PM',
      billNumber: '54322',
      type: 'Income',
      amount: '₹500',
      mode: 'Bank Transfer',
      category: 'consultation',
    },
    {
      dateTime: '2023-08-26 9:15 AM',
      billNumber: '54323',
      type: 'Expense',
      amount: '₹50',
      mode: 'Cash',
      category: 'consultation',
    },
    {
      dateTime: '2023-08-27 11:30 AM',
      billNumber: '54324',
      type: 'Expense',
      amount: '₹120',
      mode: 'Credit Card',
      category: 'consultation',
    },
    {
      dateTime: '2023-08-28 2:00 PM',
      billNumber: '54325',
      type: 'Income',
      amount: '₹800',
      mode: 'PayPal',
      category: 'consultation',
    },
    {
      dateTime: '2023-08-29 8:30 AM',
      billNumber: '54326',
      type: 'Expense',
      amount: '₹35',
      mode: 'Debit Card',
      category: 'consultation',
    },
    {
      dateTime: '2023-08-30 1:15 PM',
      billNumber: '54327',
      type: 'Income',
      amount: '₹300',
      mode: 'Check',
      category: 'consultation',
    },
    {
      dateTime: '2023-08-31 6:45 PM',
      billNumber: '54328',
      type: 'Expense',
      amount: '₹70',
      mode: 'Cash',
      category: 'consultation',
    },
    {
      dateTime: '2023-09-01 9:00 AM',
      billNumber: '54329',
      type: 'Expense',
      amount: '₹25',
      mode: 'Credit Card',
      category: 'consultation',
    },
    {
      dateTime: '2023-09-02 4:30 PM',
      billNumber: '54330',
      type: 'Income',
      amount: '₹150',
      mode: 'PayPal',
      category: 'consultation',
    },
  
    
    // Add more data items here
  ];

  const [tableData, setTableData] = useState(data2);

  const handleDelete = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  return (
    <div className="data-table-container3">
      <table className="data-table3">
      <thead>
          <tr>
            <th>Date & Time</th>
            <th>Bill#</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Mode</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.dateTime}</td>
              <td>{item.billNumber}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.mode}</td>
              <td>{item.category}</td>
              <td>
                <span className="delete-btn" onClick={() => handleDelete(index)}>
                  <MdDelete color="red" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable3;

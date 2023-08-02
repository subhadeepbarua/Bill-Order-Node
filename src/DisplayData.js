// import React, { useState, useEffect } from 'react';

// const DisplayData = ({ toggleView }) => {
//   const [invoice, setInvoice] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredInvoice, setFilteredInvoice] = useState([]);

//   const getBill = async () => {
//     try {
//       const response = await fetch('http://localhost:9000/bill-data'); // Replace the URL with your Node.js server URL
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log('Data from MongoDB Atlas:', data);
//       setInvoice(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     getBill();
//   }, []);

//   useEffect(() => {
//     const filteredData = invoice.filter(
//       (row) =>
//         (row.Pname && row.Pname.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (row.Pbuyers && row.Pbuyers.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (row.Date && row.Date.includes(searchQuery))
//     );
//     setFilteredInvoice(filteredData);
//   }, [invoice, searchQuery]);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <>
//       <div className="header">
//         <div className='headerItem'>
//         <button  id="D-btn" onClick={toggleView}>Back</button>
//         </div>
//         <div className='headerItem' style={{ alignItems:'flex-end' }}>
//         <h2 >BILL & ORDER DATABASE</h2>
//         </div>
//       </div>

//       <div className="search-bar">
//         <input
//           type='text'
//           placeholder='Search by Party Name, Buyer Name, or Date'
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </div>
//       <div className="table-container">
//         <table className="display-table">
//           <thead>
//             <tr>
//               <th style={{ width:'2%'}}>SL no.</th>
//               <th>Date</th>
//               <th>Party Name</th>
//               <th>Bill no.</th>
//               <th>Amount</th>
//               <th>CGST no.</th>
//               <th>SGST no.</th>
//               <th>IGST no.</th>
//               <th>Payment Buyers</th>
//               <th>Cheque no.</th>
//               <th>Payment Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredInvoice.map((row, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{row.Date}</td>
//                 <td>{row.Pname}</td>
//                 <td>{row.Billno}</td>
//                 <td>{row.Amount}</td>
//                 <td>{row.CGST}</td>
//                 <td>{row.SGST}</td>
//                 <td>{row.IGST}</td>
//                 <td>{row.Pbuyers}</td>
//                 <td>{row.Chequeno}</td>
//                 <td>{row.PDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default DisplayData;


// React component (DisplayData.js)

import React, { useState, useEffect } from 'react';

const DisplayData = ({ toggleView }) => {
  const [invoice, setInvoice] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInvoice, setFilteredInvoice] = useState([]);

  const getBill = async () => {
    try {
      const response = await fetch('http://localhost:9000/bill-data'); // Replace the URL with your Node.js server URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data from MongoDB Atlas:', data);
      setInvoice(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getBill();
  }, []);

  useEffect(() => {
    const filteredData = invoice.filter(
      (row) =>
        (row.Pname && row.Pname.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (row.Pbuyers && row.Pbuyers.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (row.Date && row.Date.includes(searchQuery))
    );
    setFilteredInvoice(filteredData);
  }, [invoice, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="header">
        <div className='headerItem'>
        <button  id="D-btn" onClick={toggleView}>Back</button>
        </div>
        <div className='headerItem' style={{ alignItems:'flex-end' }}>
        <h2 >BILL & ORDER DATABASE</h2>
        </div>
      </div>

      <div className="search-bar">
        <input
          type='text'
          placeholder='Search by Party Name, Buyer Name, or Date'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="table-container">
        <table className="display-table">
          <thead>
            <tr>
              <th style={{ width:'2%'}}>SL no.</th>
              <th>Date</th>
              <th>Party Name</th>
              <th>Bill no.</th>
              <th>Amount</th>
              <th>CGST no.</th>
              <th>SGST no.</th>
              <th>IGST no.</th>
              <th>Payment Buyers</th>
              <th>Cheque no.</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoice.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.Date}</td>
                <td>{row.Pname}</td>
                <td>{row.Billno}</td>
                <td>{row.Amount}</td>
                <td>{row.CGST}</td>
                <td>{row.SGST}</td>
                <td>{row.IGST}</td>
                <td>{row.Pbuyers}</td>
                <td>{row.Chequeno}</td>
                <td>{row.PDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayData;

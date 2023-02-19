// import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import './brand.css'
// function GetBrandSalesDailyPage() {
//   const [salesData, setSalesData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/BrandSalesDaily")
//       .then((response) => {
//         setSalesData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <Table variant="simple">
//       <Thead>
//         <Tr>
//           <Th>Brand</Th>
//           <Th>Date</Th>
//           <Th>Total Orders</Th>
//           <Th>Total Order Value</Th>
//           <Th>Gross Margin Percentage</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {salesData.map((data) => (
//           <Tr key={data._id}>
//             <Td>{data.brand}</Td>
//             <Td>{new Date(data.date).toLocaleDateString()}</Td>
//             <Td>{data.totalOrders}</Td>
//             <Td>{data.totalOrderValue}</Td>
//             <Td>{data.grossMarginPercentage}</Td>
//           </Tr>
//         ))}
//       </Tbody>
//     </Table>
//   );
// }

// export default GetBrandSalesDailyPage;
import React, { useEffect, useState } from "react";
import './brand.css'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";

function GetBrandSalesDaily() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/BrandSalesDaily");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Brand</Th>
          <Th>Transaction Type</Th>
          <Th>Total Orders</Th>
          <Th>Total Order Value</Th>
          <Th>Gross Margin Percentage</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row) => (
          <Tr key={row._id}>
            <Td>{new Date(row.date).toLocaleDateString()}</Td>
            <Td>{row.brand}</Td>
            <Td>{row.transactionType}</Td>
            <Td>{row.totalOrders}</Td>
            <Td>{row.totalOrderValue}</Td>
            <Td>{row.grossMarginPercentage}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default GetBrandSalesDaily;


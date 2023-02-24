import useApi from "hooks/useApi";

import { Body } from "style/components/style";
// import React from "react";
// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Dashboard = () => {
  const apiData = useApi("https://jsonplaceholder.typicode.com/todos");
  console.log(apiData);
  

  return (
    <div>
      <Body>
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>ID</th>
              <th>Title</th>
              {/* <th>Completed</th> */}
            </tr>
          </thead>
          <tbody>
            {apiData.map((item:any) => {
              return(
                <tr key={item.id}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  {/* <td>{item.completed}</td> */}
                </tr>
              )
                
              }
            )}
          </tbody>
        </table>
      </Body>
    </div>
  );
};

export default Dashboard;

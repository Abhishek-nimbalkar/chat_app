import React from 'react'
import { useLocation } from 'react-router-dom';
import useApi from 'hooks/useApi';

const ThankYou = () => {
  const location = useLocation();
  const userData=location.state;
  const Data=useApi("https://dummyjson.com/users");
  const apiData=(Data.users);
  // console.log(apiData);
  
  
  
  return (
    <>

   <h1>Hello</h1>
    {/* <div>
      <h1>Thankyou for Applying</h1>
      <h3>Name : {userData?.Name}</h3>
      <h3>Company Name You Enterded : {userData?.companyName}</h3>
      <h3>We Will Contact You on this Email Shortly: {userData?.email}</h3>
      <h3>We Have Taken Note of Your Needs and We will Our Sales Team will clla you soon for Following Needs You Mention: {userData?.needs}</h3>
    </div> */}
    <div>
    <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Image</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {apiData?.map((item:any) => {
              return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td><img src={item.image} alt="" /></td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>

                </tr>
              )
                
              }
            )}
          </tbody>
        </table>
        
    </div>
  
    
      
   </>
  )
}

export default ThankYou;
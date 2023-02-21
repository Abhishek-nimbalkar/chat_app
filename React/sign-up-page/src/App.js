
import './App.css';



function App() {
  
  const submitButton=(e)=>{
    e.preventDefault();
    const form = document.querySelector('form');
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data);

    // let fname=document.getElementById("fName");
    // let lname=document.getElementById("lName");
    // let address=document.getElementById("address");
    // let phoneNo=document.getElementById("phone");
    // let email=document.getElementById("email");
    // console.log(`First Name is : ${fname.value}` );
    // console.log(`Last Name is : ${lname.value}` );
    // console.log(`Addres is : ${address.value}` );
    // console.log(`Phone No is : ${phoneNo.value}` );
    // console.log(`Email is : ${email.value}` );
  }
  
  return (
    <div className="App">
      <div id="formContainer">
          <form id="form" action="#" onSubmit={submitButton}>
            <fieldset>
              <h1>Registration Form</h1>
              <div id="fullName">
                <input type="text" name="fName" id="fName" placeholder="First Name"  />
                <input type="text" name="lName" id="lName" placeholder="Last Name"  />
              </div>
              <div id="otherInputs">
                {/* <input type="number" name="npi" id="npi" placeholder="NPI number"  /> */}
                <input type="address" name="address" id="address" placeholder="Business Address" />
                <input type="tel" name="phone" id="phone" placeholder="Telephone Number"  />
                <input type="email" name="email" id="email" placeholder="Email Address"  />
              </div>
              <br /><br />
              <input type="submit" name="submit" id="submit"  />
            </fieldset>
          </form>
        </div>
    </div>


  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";

const LoggedIn = () => {
    const counter = useSelector((state) => state)
    console.log(counter);
     
  return (
    <>
    Hello
    </>
  )
}

export default LoggedIn
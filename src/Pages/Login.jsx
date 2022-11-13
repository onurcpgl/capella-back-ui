import {React,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../Service/Actions/authActions";

export default function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});
  
    const signUser = (event) => {
      event.preventDefault();
      
      dispatch(loginUser(formData));
    };
  return (
  
  <div className='flex h-screen justify-center items-center'>
    
  </div>
  )
}

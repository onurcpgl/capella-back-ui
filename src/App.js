import React, { Component, useEffect,useContext } from "react";
import "primereact/resources/themes/tailwind-light/theme.css";                  
import "primeicons/primeicons.css";  
import {  useSelector,useDispatch } from "react-redux";
import { BrowserRouter,Route,Link, Outlet} from "react-router-dom";
import AppRouter from "./Routes/AppRouter"
import {loginUser,fetchCategory} from "./Service/Actions/authActions";
import Sidebar from './Layouts/Sidebar/Sidebar';
import AppTopbar from "./Layouts/Header/Header";
import "./App.css";
import './styles/layout/layout.scss';
import {MenuContext} from "./Components/MenuProvider";
import { useLocation } from "react-router-dom";
function Index() {
  const dispatch = useDispatch();
  const location = useLocation();
  const category = useSelector((state) => state.auth.category);
  const token = useSelector((state)=>state.auth.token) 

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const signUser = (event) => {
    event.preventDefault();

    dispatch(loginUser({username:"string",password:"string"}));
    dispatch(fetchCategory({ id: 1 }));
  }; 
  
  
  useEffect(()=>{
    console.log("değişti")

  },[location])


  const onRouteChanged=()=>{
    console.log("ROUTE CHANGED");
  }
  return (
    <div className="layout-wrapper layout-theme-light">
        <AppTopbar />
       <div className="layout-theme-dark layout-sidebar">
        <Sidebar />
      <div>  
          <AppRouter isAuthenticated={isAuthenticated}></AppRouter>
      </div>
    </div>
    </div>
    
  );
}
export default Index

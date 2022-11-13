
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import UserManagement from "../Pages/UserManagment";

const AppRoutes = [
  {
    path: "login",
    component: <Login/>,
    exact: true,
    guard: false,
  },
  {
    path: "",
    component: <Dashboard/>,
    exact: true,
    guard: true,
  },

  {
    path: "user-management",
    component: <UserManagement/>,
    exact: true,
    guard: true,
  },
];

export default AppRoutes;

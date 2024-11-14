import Login from "@/page/login/Login";
import { createBrowserRouter } from "react-router-dom";
import MyWallet from "@/page/myWallet/MyWallet";
import Layout from "@/layout/PostAuthLayout";
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/my-wallet",
        element: <MyWallet/>,
      },
    ]
  }
 


]);

export default router;

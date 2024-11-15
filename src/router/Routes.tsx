import Login from "@/page/login/Login";
import { createBrowserRouter } from "react-router-dom";
import MyWallet from "@/page/myWallet/MyWallet";
import Layout from "@/layout/PostAuthLayout";
import Payment from "@/page/payment/Payment";
import Credits from "@/page/credits/Credits";
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
      {
        path: "/payment",
        element: <Payment/>
      },
      {
        path: "/credits",
        element: <Credits/>
      },

    ]
  }
 


]);

export default router;

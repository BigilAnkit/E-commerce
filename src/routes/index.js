import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPassowrd from '../pages/ForgotPassowrd';
import Signup from '../pages/Signup';

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children : [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path:"forgot-password",
                element:<ForgotPassowrd/>
            },
            {
                path:"sign-up",
                element:<Signup/>
            }
        ]
    },
])

export default router
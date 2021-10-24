import { Navigate } from 'react-router-dom';
import MainLayout from "./component/MainLayout";
import Login from "./component/Login";

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children:[
            { path: 'login', element: <Login /> }
        ]
    }
];

export default routes;

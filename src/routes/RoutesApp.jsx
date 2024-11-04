import { createBrowserRouter } from "react-router-dom";
import Button from "../components/Button";
import Home from "../pages/Home"
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Button />,
        children: [
            {path: '/', element: <Home />},
            {path: '/profile', element: <Profile />},
            {path: '/myJob', element: <MyJob />}
        ]
    }
])

export default router
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../pages/HomePage";
import PostDetail from "../pages/PostDetail";
import Profile from "../pages/Profile";
import PostForm from "../pages/PostForm";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/posts/:id", element: <PostDetail /> },
            { path: "/profile", element: <Profile /> },
            { path: "/posts/new", element: <PostForm /> },
            { path: "/posts/:id/edit", element: <PostForm /> },
        ],
    },
]);

export default router;

import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTask from "./components/AddTask";
import ToDoScreen from "./screens/ToDoScreens";
import { TaskProvider } from "./context/TaskContext"; // Correct import

// Define the basename for GitHub Pages deployment
const basename = "/cipherschool_mernstack";

// Create router with basename configuration
const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen />,
    },
    {
        path: "/add-task",
        element: <AddTask />,
    },
], { basename });

const App = () => {
    return (
        <TaskProvider>
            <RouterProvider router={router} />
        </TaskProvider>
    );
};

export default App;

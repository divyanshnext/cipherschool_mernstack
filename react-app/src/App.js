import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTask from "./components/AddTask";
import ToDoScreen from "./screens/ToDoScreens";
import { TaskProvider } from "./context/TaskContext"; // Correct import

const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen />,
    },
    {
        path: "/add-task",
        element: <AddTask />,
    },
]);

const App = () => {
    return (
        <TaskProvider>
            <RouterProvider router={router} />
        </TaskProvider>
    );
};

export default App;

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([
	{
		path: "/*",
		element: <App />,
	},
]);

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");
createRoot(root).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

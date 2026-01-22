import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes, } from "react-router";
import Sales_To_Stocks from "@components/projects/Sales-To-Stocks";
import HashScrollHandler from "@handlers/hashScrollHandler"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Nav />

        <BrowserRouter> <HashScrollHandler /><Routes><Route path="/" element={<App />} />
            <Route path="/projects/sales-to-stocks" element={<Sales_To_Stocks />} />
        </Routes></BrowserRouter>
    </React.StrictMode>
);
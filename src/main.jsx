import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes, } from "react-router";
import SalesToStocks from "@projects/SalesToStocks";
import HashScrollHandler from "@handlers/hashScrollHandler"
import AppleMusicToSpotify from "@projects/AppleMusicToSpotify";
import ExceptionTool from "@projects/ExceptionTool";
import RaytheonMapIntelligence from "@projects/Raytheon";
import DakotaHotels from "@projects/DakotaHotels";
import FolderWizard from "@projects/FolderWizard";
import VexDeskDefence from "@projects/Robot"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Nav />


        <BrowserRouter> <HashScrollHandler /><Routes><Route path="/" element={<App />} />
            <Route path="/projects/sales-to-stocks" element={<SalesToStocks />} />
            <Route path="/projects/apple-music-to-spotify" element={<AppleMusicToSpotify />} />
            <Route path="/projects/exception-analysis-tool" element={<ExceptionTool />} />
            <Route path="/projects/raytheon-intelligence-tool" element={<RaytheonMapIntelligence />} />
            <Route path="/projects/dakota-hotels" element={<DakotaHotels />} />
            <Route path="/projects/folder-wizard" element={<FolderWizard />} />
            <Route path="/projects/vex-desk-defence" element={<VexDeskDefence />} />
        </Routes></BrowserRouter>
    </React.StrictMode >
);
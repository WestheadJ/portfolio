import React, { useState } from "react";
import Nav from "@components/Nav";
import PortfolioView from "@components/PortfolioView";
import Terminal from "@components/Terminal";

export default function App() {
    const [terminalMode, setTerminalMode] = useState(false);

    return (
        <div className="min-h-screen f bg-neutral-950 text-rose-50 leading-7">
            <main className="">{terminalMode ? <Terminal /> : <PortfolioView />}</main>
        </div>
    );
}
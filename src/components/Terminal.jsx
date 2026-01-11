import React, { useState } from "react";
import { siteTree } from "../data/siteTree";

export default function Terminal() {
    const [currentNode, setCurrentNode] = useState(siteTree);
    const [nodeStack, setNodeStack] = useState([]);
    const [output, setOutput] = useState(["Welcome to my terminal portfolio!"]);
    const [typing, setTyping] = useState(false);

    const ls = () => {
        const list = [];
        if (nodeStack.length > 0) list.push("..");
        currentNode.children.forEach(c => list.push(c.name));
        setOutput(prev => [...prev, ...list]);
    };

    const cd = target => {
        if (target === "..") {
            if (nodeStack.length === 0) return;
            const prevStack = [...nodeStack];
            const prev = prevStack.pop();
            setCurrentNode(prev);
            setNodeStack(prevStack);
            setOutput(prev => [...prev, `Moved up to ${prev.name}`]);
            return;
        }

        const child = currentNode.children.find(c => c.name === target);
        if (!child) {
            setOutput(prev => [...prev, `No such directory/page: ${target}`]);
            return;
        }

        setNodeStack(prev => [...prev, currentNode]);
        setCurrentNode(child);

        if (child.children.length === 0) {
            setOutput(prev => [...prev, `--- Viewing page: ${child.name} ---`]);
        }
    };

    const handleCommand = e => {
        e.preventDefault();
        const cmd = e.target.elements.command.value.trim();
        e.target.reset();

        const [c, arg] = cmd.split(" ");
        if (c === "ls") ls();
        else if (c === "cd") {
            if (!arg) setOutput(prev => [...prev, "Specify target directory/page"]);
            else cd(arg);
        } else setOutput(prev => [...prev, `Unknown command: ${c}`]);
    };

    return (
        <div className="bg-black bg-gradient-to-b from-black via-terminalDark to-black text-terminalGreen font-mono text-sm leading-relaxed p-4 min-h-[70vh] rounded overflow-auto">
            <div className="space-y-1">
                {output.map((line, idx) => (
                    <div key={idx} className="terminal-section animate-fadeIn">
                        {line}
                    </div>
                ))}
            </div>

            <form onSubmit={handleCommand} className="mt-2 flex items-center">
                <span>/ {">"}</span>
                <input
                    name="command"
                    autoFocus
                    className="bg-transparent border-none ml-1 w-auto min-w-[10px] text-terminalGreen font-mono text-sm focus:outline-none"
                />
            </form>

            <span
                className={`inline-block w-[10px] h-[20px] mt-1 bg-terminalGreen shadow-[0_0_8px_#00ff88] ${typing ? "animate-none" : "animate-terminalBlink"
                    }`}
            ></span>

            <div className="mt-2 flex flex-wrap gap-2">
                {currentNode.children.map(c => (
                    <button
                        key={c.name}
                        className="bg-green-700 hover:bg-green-800 text-white px-2 py-1 rounded"
                        onClick={() => cd(c.name)}
                    >
                        {c.name}
                    </button>
                ))}
                {nodeStack.length > 0 && (
                    <button
                        className="bg-gray-700 hover:bg-gray-800 text-white px-2 py-1 rounded"
                        onClick={() => cd("..")}
                    >
                        ..
                    </button>
                )}
            </div>
        </div>
    );
}
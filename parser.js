
const directories = {
    name: "/",
    type: "dir",
    children: [
        {
            "name": "about",
            "type": "dir",
            "children": []
        },
        {
            "name": "projects",
            "type": "dir",
            "children": [
                {
                    "name": "personal",
                    "type": "dir",
                    "children": [
                        { "name": "project1", "type": "file", "children": [] },
                        { "name": "project2", "type": "file", "children": [] }
                    ]
                },
                {
                    "name": "university",
                    "type": "dir",
                    "children": [
                        { "name": "project3", "type": "file", "children": [] },
                        { "name": "project4", "type": "file", "children": [] }
                    ]
                }
            ]
        },
        {
            "name": "contact",
            "type": "dir",
            "children": []
        }
    ]
};
let currentPath = "/";

const commandParser = function (command) {
    command = command.value
    try {
        console.log("Parsing command:", command);
        if (command.startsWith("help")) {
            return "<p>Available commands: help, cd, ls, download</p>"
        }
        else if (command.startsWith("cd ")) {
            cd(command.slice(3).trim());
        }
        else if (command.startsWith("ls")) {
            return ls();
        }
        else { return "<p>Command not recognized. Type 'help' for a list of available commands.</p>"; }
    }
    catch (error) {
        console.error("Error parsing commands:", error);
        return null;
    }
}




function cd(target) {
    if (target === "..") {
        if (currentPath.length > 1) currentPath.pop();
        return;
    }

    const node = getNode(currentPath);
    const exists = node.find(obj => obj[target]);
    if (exists) currentPath.push(target);
}


function ls() {
    const node = getNode(currentPath);
    let output = [];

    // show parent if not root
    if (currentPath.length > 1) {
        output.push("└── ..");
    }

    if (!node || node.length === 0) {
        return output
    }

    node.forEach((item, index) => {
        const name = Object.keys(item)[0];
        const isLast = index === node.length - 1;
        const prefix = isLast ? "└── " : "├── ";
        output.push(prefix + name);
    });
    console.log(output)
    return output;
}

function getNode(path) {
    let node = directories["/"];

    for (let i = 1; i < path.length; i++) {
        const entry = node.find(obj => obj[path[i]] !== undefined);
        if (!entry) return null;
        node = entry[path[i]];
    }

    return node;
}

export default commandParser;
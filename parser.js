const commandParser = function (command, inputField) {
    try {
        console.log("Parsing command:", command);
        if (command.startsWith("help")) {
            inputField.value = "";
            return "<p>Available commands: help, cd, ls, download</p>";
        }
        else if (command.startsWith("cd ")) {
            inputField.value = "";
            return `<p>Changed directory to ${dir} (simulated)</p>`;
        }
        else { inputField.value = ""; return "<p>Command not recognized. Type 'help' for a list of available commands.</p>"; }
    }
    catch (error) {
        console.error("Error parsing commands:", error);
        return null;
    }
}



export default commandParser;
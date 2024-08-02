const { exec } = require("child_process");

// Git commands
const gitCommands = [
  "git init",
  "git add .",
  'git commit -m "pushed By NodeJS"',
  "git branch -M main",
  "git remote add origin https://github.com/parasbagri/Texting_With_Node.git",
  "git push -u origin main",
];

// Function to execute git commands
const executeGitCommand = (command, callback) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
    callback();
  });
};

// Execute each git command
const runGitCommands = (commands) => {
  if (commands.length === 0) return;
  const [command, ...rest] = commands;
  executeGitCommand(command, () => runGitCommands(rest));
};

runGitCommands(gitCommands);

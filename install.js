const { exec } = require('child_process');

console.log ('Installing dependencies...');
// Define the dependencies you want to install
const dependencies = [
    'express',
    'axios',
    'bcrypt'
    // Add more dependencies here
];

// Install the dependencies
exec(`npm install ${dependencies.join(' ')}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`Dependencies installed successfully.`);
});

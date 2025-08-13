import { exec } from 'node:child_process';

export function getClientWindow() {
    exec(`py ./src/scripts/client_window_metadata.py`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    });
}
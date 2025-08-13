import { BrowserWindow } from 'electron';
import { updateTray } from './tray';

let connectionState: boolean = false;

//subject for rename clarity
export function sendipcMainStatus() {
    console.log('ipcstate', connectionState)
    return connectionState;
}

export function handleConnectionStatus(mainWindow: BrowserWindow, initialised: boolean) {
    connectionState = initialised;
    console.log(connectionState ? 'Client Instance Opened' : 'Client Instance Closed');
    updateTray(connectionState);
    return mainWindow.webContents.send('connection-status', connectionState);
}
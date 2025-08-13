// use: expose user-defined endpoints to the renderer endpoints
// ipcMain.handle() + ipcRenderer.invoke() is used for q&a, i.e. request xyz from main and wait for reply
// webContents.send((send messages from main to renderer)) + ipcRenderer.on() is for main process event handling
// i.e status changes in main that have to be pushed into the renderer when they happen

import { contextBridge, ipcRenderer } from 'electron';

const clientStatus = {
    onStatus: (getConnection: (status: boolean) => void) => {
        if (ipcRenderer.listenerCount('connection-status') === 1) {
            console.log('removed unneeded listeners')
            ipcRenderer.removeAllListeners('connection-status'); 
        }

        ipcRenderer.invoke('initial-connection').then(getConnection)
        ipcRenderer.on('connection-status', (event: Electron.IpcRendererEvent, status: boolean) => {
            getConnection(status);
        });
    },
    listeners: (): number => ipcRenderer.listenerCount('connection-status'),
}

contextBridge.exposeInMainWorld('clientConnection', clientStatus);

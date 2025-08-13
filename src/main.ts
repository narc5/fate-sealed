import { app, BrowserWindow } from 'electron';
import { initialiseTray } from '../utils/tray';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import establishClientConnection from './services/establishClientConnections';
import { ipcMain } from 'electron';
import { sendipcMainStatus } from '../utils/handleConnectionStatus';

let mainWindow: BrowserWindow;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

const createWindow = () => {
  // other platforms would require different px dimensions for the icon
  mainWindow = new BrowserWindow({
    width: 720,
    height: 350,
    icon: './public/taskbarIcon.ico',
    darkTheme: true,
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      sandbox: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  // mainWindow.setIgnoreMouseEvents(true);

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('initial-connection', () => {
  return sendipcMainStatus();
});

app.whenReady().then(() => {
  initialiseTray();
  establishClientConnection(mainWindow);
});
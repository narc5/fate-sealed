import { Tray, Menu, nativeImage, MenuItemConstructorOptions } from 'electron';

let tray: Tray;
let contextMenu: Electron.Menu | null = null;
const trayLabelState = {
  true: 'Currently Online',
  false: 'Currently Offline'
};
const menuTemplateOptions = (isClientOpen: boolean):  MenuItemConstructorOptions[] => [
    { enabled: false, label: 'Fate Sealed', icon: './public/miniTrayIcon.png', type: 'normal' },
    { label: 'TitleSeparator', type: 'separator' },
    { label: trayLabelState[`${isClientOpen}`], type: 'checkbox', checked: isClientOpen, id:'isOnCheck' },
    { label: 'TitleSeparator', type: 'separator' },
    { label: 'Exit', type: 'normal', role: 'quit'}
]

export function initialiseTray(): Tray {
  const icon = nativeImage.createFromPath('./public/trayIcon.png');
  tray = new Tray(icon);
  contextMenu = Menu.buildFromTemplate(menuTemplateOptions(false));

  tray.setContextMenu(contextMenu);
  tray.setToolTip('Fate Sealed');
  tray.setTitle('Fate Sealed');

  return tray;
}

export function updateTray(isClientOpen: boolean) {
  contextMenu = Menu.buildFromTemplate(menuTemplateOptions(isClientOpen));
  tray.setContextMenu(contextMenu);
  console.log('Tray Status Updated \n');
}
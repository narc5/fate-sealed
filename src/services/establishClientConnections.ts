import { BrowserWindow } from 'electron';
import { handleConnectionStatus } from '../utils/handleConnectionStatus';
import getClientCredentials from './getClientCredentials';

// promise<credentials> is used as ECC is an async fn, thus a promise is used to represent it being resolved
// do we need to close the client 

let initialised: boolean = false;

export default async function establishClientConnection(mainWindow: BrowserWindow): Promise<boolean> {
  try {
    console.log('Waiting for league client...\n');
    const client = await getClientCredentials();
    
    client.on('connect', (newCredentials) => {  initialised = true; handleConnectionStatus(mainWindow, initialised); });
    client.on('disconnect', () => { initialised = false; handleConnectionStatus(mainWindow, initialised); });
    
    initialised = true;
    handleConnectionStatus(mainWindow, initialised)
    client.start();

    return initialised;
  }
    catch(err) {
      console.log('error initialising league-client', err);
      throw err;
    }
}

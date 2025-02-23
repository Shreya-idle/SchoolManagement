import { BrowserWindow } from 'electron';
import path from 'path';

const createWindow = (): void => {
  // Create a new BrowserWindow instance with specific options
  const mainWindow: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false, // ⚠️ Allow local file & WebView content
    },
  });

  // Load the HTML file into the BrowserWindow
  mainWindow.loadURL(`file://${path.join(__dirname, '/index.html')}`);
};

export default createWindow;
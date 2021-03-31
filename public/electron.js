const {app , BrowserWindow} = require('electron');
const path = require("path");
const isDev = require("electron-is-dev");

let appWindow;

function createWindow() {

    appWindow = new BrowserWindow({
        width: 1200,
        height: 768,
        minWidth: 800,
        minHeight: 520,
        center: true,
        resizable: true,
        show: false,
        icon: `${__dirname}/icon.ico`,
        webPreferences: {
            nodeIntegration: true,
            devTools: false
        }

    });
    
    appWindow.setMenu(null);

    appWindow.maximize();

    appWindow.loadURL(
        isDev?
        'http://localhost:3000'
        :
        `file://${path.join(__dirname, "../build/index.html")}`
        );

    appWindow.once("ready-to-show", () => {
        appWindow.show();
    });

    appWindow.webContents.openDevTools();

    appWindow.on('closed', () => {
        appWindow = null
    })
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (appWindow === null) {
        createWindow()
    }
});
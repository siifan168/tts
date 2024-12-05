const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url');
const createMainWindow = () => {
    const mainWin = new BrowserWindow({
        show: false,
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './preload.js')
        }
    })
    let startUrl = url.format({
        pathname: path.join(__dirname, '../ui/build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    // mainWin.loadURL('http://localhost:1010')
    mainWin.loadURL(startUrl)
    mainWin.on('ready-to-show', () => {
        mainWin.maximize()
        mainWin.show()
    })
}
module.exports = { createMainWindow }
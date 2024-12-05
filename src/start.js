const { createMainWindow } = require('./window')
const { app } = require('electron')

const start = () => {
    app.whenReady().then(() => {
        createMainWindow()
    })
    app.on('window-all-closed', () => {        
        if (process.platform !== 'darwin') app.quit()
    })
}

module.exports = { start }